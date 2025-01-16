const generateProductsJsonLd = (products) => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://yourdomain.com/products/${product.id}`,
        name: product.translations?.EN?.name || "No name available",
        image: product.image || "No image available",
        description: product.translations?.EN?.description || "No description available",
      })),
    };
  };
  
  export default generateProductsJsonLd;
  