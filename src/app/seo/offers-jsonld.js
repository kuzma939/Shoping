const offersJsonLd = (offers) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  availableLanguage: [
    { "@type": "Language", name: "Ukrainian" },
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "French" },
  ],
  itemListElement: offers.map((offer, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://shoping-tdfr.vercel.app/offers/${offer.id}`,
    name: offer.translations?.EN?.name || "Unnamed Product",
    image: {
      "@type": "ImageObject",
      url: `https://shoping-tdfr.vercel.app${offer.image}`,
      width: 1200,
      height: 628,
      caption: offer.translations?.EN?.name || "Unnamed Product",
    },
    description: offer.translations?.EN?.description || "No description available",
    offers: {
      "@type": "Offer",
      price: offer.discountPrice || offer.price,
      priceCurrency: "UAH",
      availability: "https://schema.org/InStock",
    },
    sku: offer.sku,
    color: offer.colors.join(", "),
    size: offer.sizes.join(", "),
    category: offer.category,
    dateModified: new Date().toISOString(), // Актуальна дата
  })),
});

export default offersJsonLd;
