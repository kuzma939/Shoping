const generateTopProductsJsonLd = (topProducts) => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: topProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://yourdomain.com/products/${product.id}`, // Динамічний URL продукту
        name: product.translations.EN.name, // Назва продукту
        image: product.image, // Головне зображення продукту
        description: product.translations.EN.description, // Опис
      })),
    };
  };
  
  export default generateTopProductsJsonLd;
  