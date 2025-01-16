// contact-jsonld.js
const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+123456789", // Змініть на ваш номер
      email: "info@yourdomain.com", // Змініть на вашу електронну пошту
      areaServed: ["UA"], // Вкажіть регіони, які обслуговує ваш бізнес
      availableLanguage: ["Ukrainian", "English"], // Мови підтримки
    },
  };
  
  export default contactJsonLd;
  