export const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Latore Atelier",
    url: "https://shoping-tdfr.vercel.app",
    description:
        "Latore Atelier пропонує стильний та ексклюзивний жіночий одяг для кожного сезону.",
    image: "https://shoping-tdfr.vercel.app/logo-social.jpg",
    potentialAction: {
        "@type": "SearchAction",
        target: "https://shoping-tdfr.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
    },
};

export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Latore Atelier",
    url: "https://shoping-tdfr.vercel.app",
    logo: "https://shoping-tdfr.vercel.app/favicon-latore.ico?v=1",
    sameAs: [
        "https://www.facebook.com/latoreatelier",
        "https://www.instagram.com/latoreatelier",
        "https://telegram.me/yourusername",
    ],
};
