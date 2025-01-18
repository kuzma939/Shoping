import TopProductsInfo from "../components/TopProductsInfo/TopProductsInfo";
import Layout from "../components/Layout";
import Head from "next/head";
import topProductsJsonLd from "../seo/top-products-jsonld";
import seoConfig from "../../../next-seo.config";

export default function TopProductspage() {
    const topProducts = [
        {
            id: "1",
            translations: {
                UA: { name: "Топ продукт 1", description: "Опис українською" },
                EN: { name: "Top Product 1", description: "Description in English" },
                FR: { name: "Produit Top 1", description: "Description en français" },
            },
            image: "https://shoping-tdfr.vercel.app/top-product1.jpg",
            price: 2000,
            discountPrice: 1800,
            category: "Dress",
        },
    ];

    const jsonLd = topProductsJsonLd(topProducts);
    const seo = seoConfig.topProducts;

    return (
        <div className="transition-colors">
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:title" content={seo.openGraph.title} />
                <meta property="og:description" content={seo.openGraph.description} />
                <meta property="og:type" content={seo.openGraph.type} />
                <meta property="og:url" content={seo.openGraph.url} />
                <meta property="og:image" content={seo.openGraph.images[0].url} />
                <link rel="canonical" href={seo.canonical} />
                <meta name="robots" content={seo.robots} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <Layout>
                <TopProductsInfo />
            </Layout>
        </div>
    );
}
