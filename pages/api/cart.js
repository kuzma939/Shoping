import { Pool } from "pg";

// Налаштування підключення до бази даних PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "999999999", // Заміни на свій пароль
  port: 5432,
});

export default async function handler(req, res) {
    console.log(`Запит отримано: ${req.method} ${req.url}`);
  const { method } = req;


  if (method === "POST") {
    // Додавання товару в корзину
    const { userId, sessionId, id, quantity } = req.body;
    console.log('Запит POST:', { userId, sessionId, id, quantity });
    if (!id || !quantity) {
        return res.status(400).json({ message: "Поле 'id' та 'quantity' є обов'язковими!" });
      }
      {/*
    if ((!userId && !sessionId) || !id || !quantity) {
      return res.status(400).json({ message: "Всі поля обов'язкові!" });
    }
*/}
    try {
        const result = await pool.query(
            `INSERT INTO cart (user_id, session_id, product_id, quantity) 
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [userId || null, sessionId || null, id, quantity]
          );
         
      return res.status(201).json({
        message: "Товар додано в корзину!",
        cart: result.rows[0],
      });
    } catch (error) {
        console.error("Помилка в запиті:", error.message, error.stack);
  
      return res.status(500).json({ message: "Сталася помилка на сервері." });
    }
  } else if (method === "GET") {
    // Отримання товарів у корзині для користувача або сесії
    const { userId, sessionId } = req.query;

    if (!userId && !sessionId) {
      return res.status(400).json({ message: "Не вказано userId або sessionId!" });
    }

    try {
      const result = await pool.query(
        `SELECT cart.*, products.name, products.price 
         FROM cart
         INNER JOIN products ON cart.product_id = products.id
         WHERE cart.user_id = $1 OR cart.session_id = $2`,
        [userId || null, sessionId || null]
      );
      return res.status(200).json({ cart: result.rows });
    } catch (error) {
      console.error("Error fetching cart items:", error);
      return res.status(500).json({ message: "Сталася помилка на сервері." });
    }
  } else if (method === "PUT") {
    // Оновлення кількості товару в корзині
    const { cartId, quantity } = req.body;

    if (!cartId || !quantity) {
      return res.status(400).json({ message: "Всі поля обов'язкові!" });
    }

    try {
      const result = await pool.query(
        `UPDATE cart SET quantity = $1, updated_at = NOW() 
         WHERE id = $2 RETURNING *`,
        [quantity, cartId]
      );
      return res.status(200).json({
        message: "Кількість товару оновлено!",
        cart: result.rows[0],
      });
    } catch (error) {
      console.error("Error updating cart item:", error);
      return res.status(500).json({ message: "Сталася помилка на сервері." });
    }
  } else if (method === "DELETE") {
    // Видалення товару з корзини
    const { cartId } = req.body;

    if (!cartId) {
      return res.status(400).json({ message: "Не вказано cartId!" });
    }

    try {
      await pool.query(`DELETE FROM cart WHERE id = $1`, [cartId]);
      return res.status(200).json({ message: "Товар видалено з корзини!" });
    } catch (error) {
        
      console.error("Error deleting cart item:", error);
      return res.status(500).json({ message: "Сталася помилка на сервері." });
    }
  } else {
    // Якщо метод запиту не підтримується
    res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
    return res.status(405).end(`Метод ${method} не дозволено`);
  }
}
