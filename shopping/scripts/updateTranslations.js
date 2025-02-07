import pkg from "pg";
import products from "../../src/app/data/products.js";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "999999999", // Вкажіть ваш пароль
  port: 5432,
});

const updateTranslations = async () => {
  try {
    console.log("Оновлення translations для всіх товарів...");
    for (const product of products) {
      await pool.query(
        "UPDATE products SET translations = $1 WHERE id = $2",
        [product.translations, product.id]
      );
    }
    console.log("Translations успішно оновлено!");
  } catch (err) {
    console.error("Помилка при оновленні translations:", err);
  } finally {
    await pool.end();
  }
};

updateTranslations();
