import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { firstName, lastName, email, phone, message, productName,productDescription, productPrice, productColor,productQuantity,
     productSize, productSKU, productImage } = req.body;
  console.log("Отримані дані:", req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "anjakuzma9393@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>Новий запит від ${firstName} ${lastName}</h2>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Повідомлення:</strong> ${message || "Відсутнє"}</p>
        <hr />
        <h3>Деталі продукту:</h3>
        <p><strong>Назва:</strong> ${productName || "Немає назви"}</p>
        <p><strong>Опис:</strong> ${productDescription || "Опис відсутній"}</p>
        <p><strong>Ціна:</strong> ${productPrice || "Немає ціни"}</p>
        <p><strong>Колір:</strong> ${productColor || "Не вказано"}</p>
        <p><strong>Розмір:</strong> ${productSize || "Не вказано"}</p>
        <p><strong>Кількість:</strong> ${productQuantity || 1}</p>
        <p><strong>SKU:</strong> ${productSKU || "N/A"}</p>
        ${productImage ? `<p><strong>Фото продукту:</strong></p><img src="${productImage}" alt="Product Image" style="max-width: 300px; border-radius: 8px;" />` : "<p>Фото відсутнє</p>"}
  
        `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Помилка:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
}
