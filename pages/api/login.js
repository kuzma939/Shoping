import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { Pool } from "pg"; 

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
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Метод ${req.method} не дозволений` });
  }

  const { email, password } = req.body;

  try {
    const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (!userResult.rows.length) {
      return res.status(400).json({ message: "Користувача не знайдено!" });
    }

    const user = userResult.rows[0];

    if (!user.password_hash) {
      console.error("❌ ПОМИЛКА: У користувача відсутній пароль!");
      return res.status(500).json({ message: "Помилка в обліковому записі користувача!" });
    }

    const validPassword = await compare(password, user.password_hash);

    if (!validPassword) {
      return res.status(400).json({ message: "Невірний пароль!" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "your_secret_key", 
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Успішний вхід!",
      token,
      userId: user.id,
    });

  } catch (error) {
    console.error("🔥 ПОМИЛКА В АВТОРИЗАЦІЇ:", error.message);
    return res.status(500).json({ message: `Сталася помилка на сервері: ${error.message}` });
  }
}
