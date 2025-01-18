const generateProductsJsonLd = (products) => {
  console.log(products);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://shoping-tdfr.vercel.app/All_products/${product.id}`, // Коректний URL для продукту
      name: product.translations?.EN?.name || "Unnamed Product", // Назва продукту
      image: {
        "@type": "ImageObject",
        url: product.image || "https://shoping-tdfr.vercel.app/default-image.jpg", // Зображення продукту
        width: 1200, // Рекомендована ширина
        height: 628, // Рекомендована висота
        caption: product.translations?.EN?.name || "Unnamed Product", // Альтернативний текст
      },
      description: product.translations?.EN?.description || "No description available", // Опис продукту
      inLanguage: [
        { "@type": "Language", name: "Ukrainian" }, // Українська
        { "@type": "Language", name: "English" }, // Англійська
        { "@type": "Language", name: "French" }, // Французька
      ],
      dateModified: product.dateModified || new Date().toISOString(), // Дата останнього оновлення
    })),
  };
};

export default generateProductsJsonLd;

