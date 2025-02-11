import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "999999999",
  port: 5432,
});

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: `Метод ${req.method} не дозволений` });
  }

  const { id } = req.query;
  console.log("Отримано запит для ID користувача:", id);

  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      console.log("Користувача не знайдено!");
      return res.status(404).json({ message: "Користувача не знайдено!" });
    }

    const user = result.rows[0];
    console.log("Знайдено користувача:", user);

    res.status(200).json({
      id: user.id,
      username: user.username,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      address: user.address,
      country: user.country,
    });
  } catch (error) {
    console.error("Помилка сервера:", error);
    res.status(500).json({ message: "Сталася помилка на сервері!" });
  }
}
