import { Pool } from "pg";

// Налаштування підключення до бази даних PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "999999999", // Заміни на свій пароль
  port: 5432,
  application_name: "myApp",
  charset: "UTF8",
});

// Функції для роботи з базою даних
async function getCartItems(userId, sessionId, lang) {
  return pool.query(
    `SELECT 
       c.id, 
       p.translations -> $3 ->> 'name' AS name, 
       p.price, 
       p.category, 
       c.quantity, 
       p.image
     FROM cart c
     INNER JOIN products p ON c.product_id = p.id
     WHERE (c.user_id = $1 OR $1 IS NULL)
       AND (c.session_id = $2)`,
    [userId || null, sessionId, lang]
  );
}

async function addCartItem(userId, sessionId, productId, quantity) {
  return pool.query(
    `INSERT INTO cart (user_id, session_id, product_id, quantity) 
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [userId || null, sessionId, productId, quantity]
  );
}

async function updateCartItemQuantity(cartId, quantity) {
  return pool.query(
    `UPDATE cart SET quantity = $1, updated_at = NOW() 
     WHERE id = $2 RETURNING *`,
    [quantity, cartId]
  );
}

async function deleteCartItem(cartId) {
  return pool.query(`DELETE FROM cart WHERE id = $1`, [cartId]);
}

// Основний обробник запитів
export default async function handler(req, res) {
  console.log(`Запит отримано: ${req.method} ${req.url}`);
  const { method } = req;
  try {
    if (method === "GET") {
      // Отримання товарів у корзині
      const { userId, sessionId, lang } = req.query;

      if (!sessionId || !lang) {
        return res.status(400).json({ message: "Не вказано sessionId або мову!" });
      }

      try {
        const result = await getCartItems(userId, sessionId, lang);

        if (result.rows.length === 0) {
          console.log("Кошик порожній для userId:", userId, "та sessionId:", sessionId);
          return res.status(200).json({ cart: [] });
        }

        console.log("Дані з кошика:", result.rows);
        return res.status(200).json({ cart: result.rows });
      } catch (error) {
        console.error("SQL помилка в методі GET:", error.message, error.stack);
        return res.status(500).json({
          message: "Сталася помилка при отриманні товарів з корзини.",
          error: error.message,
        });
      }
    } else if (method === "POST") {
      // Додавання товару в корзину
      const { userId, sessionId, id: productId, quantity } = req.body;

      if (!sessionId || !productId || !quantity) {
        return res.status(400).json({ message: "Поля 'sessionId', 'id' та 'quantity' є обов'язковими!" });
      }

      try {
        const result = await addCartItem(userId, sessionId, productId, quantity);
        return res.status(201).json({
          message: "Товар додано в корзину!",
          cart: result.rows[0],
        });
      } catch (error) {
        console.error("Помилка додавання товару в кошик:", error.message, error.stack);

        if (error.message === "Товар вже є в кошику!") {
          return res.status(400).json({ message: error.message });
        }

        return res.status(500).json({ message: "Сталася помилка на сервері." });
      }
    } else if (method === "PUT") {
      // Оновлення кількості товару
      console.log("Отримані дані:", req.body);

      const { cartId, quantity } = req.body;

      if (!cartId || !quantity) {
        return res.status(400).json({ message: "Всі поля обов'язкові!" });
      }

      const result = await updateCartItemQuantity(cartId, quantity);
      return res.status(200).json({
        message: "Кількість товару оновлено!",
        cart: result.rows[0],
      });
    } else if (method === "DELETE") {
      // Видалення товару з корзини
      const { cartId } = req.body;

      if (!cartId) {
        return res.status(400).json({ message: "Не вказано cartId!" });
      }

      await deleteCartItem(cartId);
      return res.status(200).json({ message: "Товар видалено з корзини!" });
    } else {
      // Якщо метод запиту не підтримується
      res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
      return res.status(405).end(`Метод ${method} не дозволено`);
    }
  } catch (error) {
    console.error("Помилка:", error.message, error.stack);
    return res.status(500).json({ message: "Сталася помилка на сервері." });
  }
}
{/*import { Pool } from "pg";

// Налаштування підключення до бази даних PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "999999999", // Заміни на свій пароль
  port: 5432,
  application_name: "myApp",
  charset: "UTF8",
});

// Функції для роботи з базою даних
async function getCartItems(userId, sessionId) {
  return pool.query(
    `SELECT c.id, p.name, p.price, p.category, c.quantity, p.image
     FROM cart c
     INNER JOIN products p ON c.product_id = p.id
     WHERE (c.user_id = $1 OR $1 IS NULL)
       AND (c.session_id = $2)`,
    [userId || null, sessionId]
  );
}

async function addCartItem(userId, sessionId, productId, quantity) {
  return pool.query(
    `INSERT INTO cart (user_id, session_id, product_id, quantity) 
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [userId || null, sessionId, productId, quantity]
  );
}

async function updateCartItemQuantity(cartId, quantity) {
  return pool.query(
    `UPDATE cart SET quantity = $1, updated_at = NOW() 
     WHERE id = $2 RETURNING *`,
    [quantity, cartId]
  );
}

async function deleteCartItem(cartId) {
  return pool.query(`DELETE FROM cart WHERE id = $1`, [cartId]);
}

// Основний обробник запитів
export default async function handler(req, res) {
  console.log(`Запит отримано: ${req.method} ${req.url}`);
  const { method } = req;
  try {
    if (method === "GET") {
      // Отримання товарів у корзині
      const { userId, sessionId } = req.query;

      if (!sessionId) {
        return res.status(400).json({ message: "Не вказано sessionId!" });
      }

  try {
    const result = await getCartItems(userId, sessionId);
  
    if (result.rows.length === 0) {
      console.log("Кошик порожній для userId:", userId, "та sessionId:", sessionId);
      return res.status(200).json({ cart: [] });
    }
  
    console.log("Дані з кошика:", result.rows);
    return res.status(200).json({ cart: result.rows });
  } catch (error) {
    console.error("SQL помилка в методі GET:", error.message, error.stack);
    return res.status(500).json({
      message: "Сталася помилка при отриманні товарів з корзини.",
      error: error.message,
    });
  }
 
    } else if (method === "POST") {
      // Додавання товару в корзину
      const { userId, sessionId, id: productId, quantity } = req.body;

      if (!sessionId || !productId || !quantity) {
        return res.status(400).json({ message: "Поля 'sessionId', 'id' та 'quantity' є обов'язковими!" });
      }

      try {
        const result = await addCartItem(userId, sessionId, productId, quantity);
        return res.status(201).json({
          message: "Товар додано в корзину!",
          cart: result.rows[0],
        });
      } catch (error) {
        console.error("Помилка додавання товару в кошик:", error.message, error.stack);

        if (error.message === "Товар вже є в кошику!") {
          return res.status(400).json({ message: error.message });
        }

        return res.status(500).json({ message: "Сталася помилка на сервері." });
      }
    } else if (method === "PUT") {
      // Оновлення кількості товару
      console.log("Отримані дані:", req.body);
    
      const { cartId, quantity } = req.body;
    
      if (!cartId || !quantity) {
        return res.status(400).json({ message: "Всі поля обов'язкові!" });
      }
    
      const result = await updateCartItemQuantity(cartId, quantity);
      return res.status(200).json({
        message: "Кількість товару оновлено!",
        cart: result.rows[0],
      });
    } else if (method === "DELETE") {
      // Видалення товару з корзини
      const { cartId } = req.body;

      if (!cartId) {
        return res.status(400).json({ message: "Не вказано cartId!" });
      }

      await deleteCartItem(cartId);
      return res.status(200).json({ message: "Товар видалено з корзини!" });
    } else {
      // Якщо метод запиту не підтримується
      res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
      return res.status(405).end(`Метод ${method} не дозволено`);
    }
  } catch (error) {
    console.error("Помилка:", error.message, error.stack);
    return res.status(500).json({ message: "Сталася помилка на сервері." });
  }
}
*/}