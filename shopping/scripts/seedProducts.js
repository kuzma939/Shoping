// Скрипт, для читатання  даних і завантажування їх у таблицю
// Скрипт для додавання даних у таблицю "products"
import pkg from "pg";
import products from "../../src/app/data/products.js";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "999999999", // Заміни на свій пароль
  port: 5432,
});

const seedProducts = async () => {
  try {
    console.log("Починаємо завантаження даних...");

    // Починаємо транзакцію
    await pool.query("BEGIN");

    for (const product of products) {
      await pool.query(
        `INSERT INTO products (
          id, price, is_top, sku, color, size, category, image, images, colors, sizes, translations, created_at, updated_at
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9::text[], $10::text[], $11::text[], $12::jsonb, NOW(), NOW()
        ) ON CONFLICT (id) DO NOTHING`,
        [
          product.id,
          product.price,
          product.isTop || false,
          product.sku,
          product.color,
          product.size,
          product.category,
          product.image,
          product.images, // Передається як масив
          product.colors, // Передається як масив
          product.sizes, // Передається як масив
          JSON.stringify(product.translations), // JSON.stringify для JSON-даних
        ]
      );
    }

    // Завершуємо транзакцію
    await pool.query("COMMIT");
    console.log("Дані успішно додані!");
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Помилка при завантаженні даних:", error);
  } finally {
    await pool.end();
  }
};

seedProducts();
