import { hash } from "bcrypt"; // Для хешування паролів
import { Pool } from "pg"; // Підключення до PostgreSQL

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
  if (req.method === "POST") {
    const { username, lastname, email, password } = req.body;

    // Перевірка наявності обов'язкових полів
    if (!username || !lastname || !email || !password) {
      return res.status(400).json({ message: "Всі поля обов'язкові!" });
    }

    try {
      // Перевірка, чи існує email у базі
      const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      if (existingUser.rowCount > 0) {
        return res.status(400).json({ message: "Користувач з таким email вже існує!" });
      }

      // Хешування пароля
      const hashedPassword = await hash(password, 10);

      // Вставка даних у базу
      const result = await pool.query(
        `INSERT INTO users (username, lastname, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING id`,
        [username, lastname, email, hashedPassword]
      );

      res.status(201).json({
        message: "Реєстрація успішна!",
        userId: result.rows[0].id,
      });
    } catch (error) {
      console.error(error);

      // Обробка помилки унікальності email
      if (error.code === "23505") {
        return res.status(400).json({
          message: "Користувач з таким email вже існує!",
        });
      }

      res.status(500).json({
        message: "Сталася помилка на сервері!",
      });
    }
  } else {
    // Метод не дозволений
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Метод ${req.method} не дозволений`);
  }
}
