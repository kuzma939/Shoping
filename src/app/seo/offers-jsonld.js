const generateOffersJsonLd = (offers) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: offers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://yourdomain.com/products/${offer.id}`, // Посилання на сторінку продукту
      name: offer.translations.EN.name, // Назва продукту
      image: offer.image, // Головне зображення продукту
      description: offer.translations.EN.description, // Опис
    })),
  };
};

export default generateOffersJsonLd;