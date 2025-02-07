// Скрипт, для читатання  даних і завантажування їх у таблицю
import pkg from "pg";
import products from "../../src/app/data/products.js";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "999999999", // Замініть на ваш пароль
  port: 5432,
});

const seedProducts = async () => {
  try {
    console.log("Починаємо завантаження даних...");

    // Початок транзакції
    await pool.query("BEGIN");

    for (const product of products) {
      // Перевірка даних перед вставкою
      if (!product.id || !product.price || !product.translations || !product.name) {
        console.warn("Пропускаємо некоректний продукт:", product);
        continue;
      }
      await pool.query(
        `INSERT INTO products (
          id, price, is_top, is_special_offer, sku, name, color, size, category, image, images, colors, sizes, translations, created_at, updated_at
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11::text[], $12::text[], $13::text[], $14::jsonb, NOW(), NOW()
        ) ON CONFLICT (id) DO NOTHING`,
        [
          product.id,
          product.price,
          product.isTop || false,
          product.isSpecialOffer || false,
          product.sku,
          product.name, // Передаємо значення name
          product.color,
          product.size,
          product.category,
          product.image,
          product.images || [],
          product.colors || [],
          product.sizes || [],
          JSON.stringify(product.translations),
        ]
      );
      
    }

    // Завершення транзакції
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
