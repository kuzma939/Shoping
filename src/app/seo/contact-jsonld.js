const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+123456789", // Вкажіть номер телефону
      email: "anjakuzma9393@gmail.com", // Вкажіть коректну електронну пошту
      areaServed: ["UA"], // Перелік країн або регіонів
      availableLanguage: [
        { "@type": "Language", name: "Ukrainian" },
        { "@type": "Language", name: "English" }
      ] // Коректне визначення мов
    }
  };
  
  export default contactJsonLd;
  