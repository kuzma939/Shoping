import pkg from "pg";
import products from "../../src/app/data/products.js";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "999999999", // Замініть на ваш пароль
  port: 5432,
  application_name: "myApp",
  charset: "UTF8",
});

const seedProducts = async () => {
  try {
    console.log("Починаємо завантаження даних...");

    // 1. Перевірка підключення до бази даних
    const client = await pool.connect();
    console.log("✅ Успішно підключено до бази даних");
    client.release();

    await pool.query("BEGIN");

    for (const product of products) {
      // 2. Перевірка, чи продукти імпортуються
      console.log("🛠 Отримано продукт:", JSON.stringify(product, null, 2));

      if (!product.id || !product.price || !product.category || !product.translations) {
        console.warn("⚠️ Пропускаємо некоректний продукт:", product);
        continue;
      }

      // Отримуємо назву продукту з перекладу англійською
      const productName = product.translations?.EN?.name || "Unnamed Product";

      // 3. Виведення SQL-запиту перед виконанням
      console.log("📝 SQL запит:");
      console.log(`
        INSERT INTO products (
          id, price, discount_price, is_top, is_special_offer, sku, color, size, category, image, images, colors, sizes, translations, created_at, updated_at
        ) VALUES (
          ${product.id}, ${product.price}, ${product.discountPrice}, ${product.isTop}, ${product.isSpecialOffer},
          '${product.sku}', '${product.color}', '${product.size}', '${product.category}', '${product.image}',
          '${JSON.stringify(product.images)}', '${JSON.stringify(product.colors)}', '${JSON.stringify(product.sizes)}',
          '${JSON.stringify(product.translations)}', NOW(), NOW()
        ) ON CONFLICT (id) DO UPDATE SET
          price = EXCLUDED.price, discount_price = EXCLUDED.discount_price,
          is_top = EXCLUDED.is_top, is_special_offer = EXCLUDED.is_special_offer,
          sku = EXCLUDED.sku, color = EXCLUDED.color, size = EXCLUDED.size, category = EXCLUDED.category,
          image = EXCLUDED.image, images = EXCLUDED.images, colors = EXCLUDED.colors, sizes = EXCLUDED.sizes,
          translations = EXCLUDED.translations, updated_at = NOW();
      `);

      await pool.query(
        `INSERT INTO products (
          id, price, discount_price, is_top, is_special_offer, sku, color, size, category, image, images, colors, sizes, translations, created_at, updated_at
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11::text[], $12::text[], $13::text[], $14::jsonb, NOW(), NOW()
        ) ON CONFLICT (id) DO UPDATE SET
          price = EXCLUDED.price,
          discount_price = EXCLUDED.discount_price,
          is_top = EXCLUDED.is_top,
          is_special_offer = EXCLUDED.is_special_offer,
          sku = EXCLUDED.sku,
          color = EXCLUDED.color,
          size = EXCLUDED.size,
          category = EXCLUDED.category,
          image = EXCLUDED.image,
          images = EXCLUDED.images,
          colors = EXCLUDED.colors,
          sizes = EXCLUDED.sizes,
          translations = EXCLUDED.translations,
          updated_at = NOW()`,
        [
          product.id,
          product.price,
          product.discountPrice || null,
          product.isTop || false,
          product.isSpecialOffer || false,
          product.sku || null,
          product.color || null,
          product.size || null,
          product.category || null,
          product.image || null,
          product.images || [],
          product.colors || [],
          product.sizes || [],
          JSON.stringify(product.translations || {}),
        ]
      );
    }

    await pool.query("COMMIT");
    console.log("✅ Дані успішно додані!");
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("❌ Помилка при завантаженні даних:", error.message);
    console.error(error.stack);
  } finally {
    await pool.end();
  }
};

seedProducts();
