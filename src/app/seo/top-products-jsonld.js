const topProductsJsonLd = (products) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  availableLanguage: [
    {
      "@type": "Language",
      name: "Ukrainian", // Мова Українська
    },
    {
      "@type": "Language",
      name: "English", // Мова Англійська
    },
    {
      "@type": "Language",
      name: "French", // Французька
    },
  ],
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://shoping-tdfr.vercel.app/products/${product.id}`, // URL продукту
    name: product.translations?.EN?.name || "Unnamed Product", // Назва
    image: product.image || "https://shoping-tdfr.vercel.app/default-image.jpg", // Зображення
    description: product.translations?.EN?.description || "No description available", // Опис
    dateModified: product.dateModified || new Date().toISOString(), // Дата модифікації
  })),
});

export default topProductsJsonLd;

 