const generateConditionsJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Умови користування", // Назва сторінки
    description: "Перегляньте наші умови користування та політику конфіденційності.", // Опис сторінки
    url: "https://shoping-tdfr.vercel.app/conditions", // Коректний URL
    image: {
      "@type": "ImageObject",
      url: "https://shoping-tdfr.vercel.app/conditions-image.jpg", // Зображення для сторінки
      width: 1200,
      height: 628,
      caption: "Conditions Page Image", // Альтернативний текст
    },
    inLanguage: [
      { "@type": "Language", name: "Ukrainian" },
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "French" },
    ],
    dateModified: new Date().toISOString(), // Дата останнього оновлення
  };
};

export default generateConditionsJsonLd;
