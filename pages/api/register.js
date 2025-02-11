import { hash } from "bcrypt"; // Для хешування паролів
import { Pool } from "pg"; // Підключення до PostgreSQL
import jwt from "jsonwebtoken";
import { verifyToken } from "../../src/app/utils/verifyToken";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "999999999",
  port: 5432,
  application_name: "myApp",
  charset: "UTF8",
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      console.log("Перевірка токена...");
      const user = verifyToken(req);
      console.log("Токен валідний, ID користувача:", user.userId);

      const userData = await pool.query(
        "SELECT id, username, lastname, email, phone, address, country, role FROM users WHERE id = $1",
        [user.userId]
      );
      console.log("Отримані дані користувача:", userData.rows);

      if (userData.rowCount === 0) {
        return res.status(404).json({ message: "Користувач не знайдений" });
      }

      res.status(200).json({
        user: userData.rows[0],
      });
    } catch (error) {
      console.error("Помилка при GET-запиті:", error.message);
      res.status(401).json({ message: error.message });
    }
  } else if (req.method === "POST") {
    const { username, lastname, email, phone, address, country, password } = req.body;

    console.log("Отримані дані для реєстрації:", req.body);

    if (!username || !lastname || !email || !phone || !address || !country || !password) {
      return res.status(400).json({ message: "Всі поля обов'язкові!" });
    }

    try {
      const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      console.log("Перевірка існуючого користувача:", existingUser.rows);

      if (existingUser.rowCount > 0) {
        return res.status(400).json({ message: "Користувач з таким email вже існує!" });
      }

      const hashedPassword = await hash(password, 10);
      console.log("Хешований пароль:", hashedPassword);

      const result = await pool.query(
        `INSERT INTO users (username, lastname, email, phone, address, country, password_hash, role) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, 'user') 
         RETURNING id`,
        [username, lastname, email, phone, address, country, hashedPassword]
      );

      const userId = result.rows[0].id;
      console.log("Новий користувач створений з ID:", userId);

      const token = jwt.sign({ userId, email }, "your_secret_key", {
        expiresIn: "1h",
      });
      console.log("Згенерований токен:", token);

      res.status(201).json({
        message: "Реєстрація успішна!",
        userId,
        token,
      });
    } catch (error) {
      console.error("Помилка на сервері:", error.message);
      res.status(500).json({ message: "Сталася помилка на сервері!" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Метод ${req.method} не дозволений`);
  }
}