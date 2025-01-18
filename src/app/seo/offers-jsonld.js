const offersJsonLd = (offers) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: offers.map((offer, index) => ({
    "@type": "Product",
    position: index + 1,
    name: offer.translations?.EN?.name || "Unnamed Product",
    image: {
      "@type": "ImageObject",
      url: offer.image
        ? `https://shoping-tdfr.vercel.app${offer.image}`
        : "https://shoping-tdfr.vercel.app/default-image.jpg",
      width: 1200,
      height: 628,
      caption: offer.translations?.EN?.name || "Unnamed Product",
    },
    description: offer.translations?.EN?.description || "No description available",
    sku: offer.sku || "N/A",
    offers: {
      "@type": "Offer",
      price: offer.discountPrice || offer.price,
      priceCurrency: "UAH",
      availability: "https://schema.org/InStock",
    },
    category: offer.category || "General",
    color: offer.colors?.join(", "),
    size: offer.sizes?.join(", "),
  })),
});

export default offersJsonLd;