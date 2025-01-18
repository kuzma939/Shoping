import OffersInfo from "../components/OffersInfo/OffersInfo";
import Layout from "../components/Layout";
import Head from "next/head";
import offersJsonLd from "../seo/offers-jsonld"; // Імпорт функції JSON-LD
import seoConfig from "../../../next-seo.config"; // Імпорт SEO-конфігурації

export default function Offerspage() {
    // Масив пропозицій
    const offers = [
        {
            id: "1",
            translations: {
                UA: { name: "Пропозиція 1", description: "Опис українською" },
                EN: { name: "Offer 1", description: "Description in English" },
                FR: { name: "Offre 1", description: "Description en français" },
            },
            image: "/offers/offer1.jpg", // Відносний шлях до зображення
            price: 3000,
            discountPrice: 2500,
            sku: "12345",
            colors: ["red", "blue"],
            sizes: ["S", "M", "L"],
            category: "Dresses",
        },
        {
            id: "2",
            translations: {
                EN: { name: "Offer 2", description: "Description in English" },
            },
            image: null, // Відсутнє зображення
            price: 2000,
            discountPrice: null,
            sku: "54321",
            colors: ["black"],
            sizes: ["M", "L"],
            category: "Shoes",
        },
    ];

    const jsonLd = offersJsonLd(offers); // Генерація JSON-LD для пропозицій

    const seo = seoConfig.offers; // Отримуємо SEO-налаштування для сторінки Offers

    return (
        <div className="transition-colors">
            <Head>
                {/* SEO мета-теги */}
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:title" content={seo.openGraph.title} />
                <meta property="og:description" content={seo.openGraph.description} />
                <meta property="og:url" content={seo.openGraph.url} />
                <meta property="og:type" content={seo.openGraph.type} />
                <meta property="og:image" content={seo.openGraph.images[0].url} />
                <link rel="canonical" href={seo.canonical} />
                <meta name="robots" content={seo.robots} />
                
                {/* JSON-LD для структурованих даних */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <Layout>
                <OffersInfo />
            </Layout>
        </div>
    );
}
