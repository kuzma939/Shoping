const topProductsJsonLd = (products) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://shoping-tdfr.vercel.app/products/${product.id}`, // URL продукту
    name: product.translations?.EN?.name || "Unnamed Product", // Назва
    image: product.image || "https://shoping-tdfr.vercel.app/default-image.jpg", // Зображення
    description: product.translations?.EN?.description || "No description available", // Опис
    
  })),
});

export default topProductsJsonLd;

 