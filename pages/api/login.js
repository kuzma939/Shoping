//Перевірка, чи користувач із таким email існує
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

      if (user.rowCount === 0) {
        return res.status(404).json({ message: "Користувача не знайдено!" });
      }

      const validPassword = await compare(password, user.rows[0].password_hash);

      if (!validPassword) {
        return res.status(401).json({ message: "Невірний пароль!" });
      }

      const token = jwt.sign({ userId: user.rows[0].id, email }, "your_secret_key", {
        expiresIn: "1h",
      });

      res.status(200).json({
        token,
        userId: user.rows[0].id,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Сталася помилка на сервері!" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Метод ${req.method} не дозволений`);
  }
}
