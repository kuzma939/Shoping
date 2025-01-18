import Script from "next/script";
import AllProducts from "../components/AllProducts/AllProducts";
import Layout from "../components/Layout";
import Head from "next/head";
import generateProductsJsonLd from "../seo/all-products-jsonld";
import seoConfig from "../../../next-seo.config";
import products from "../data/products";

export default function Products() {
    const jsonLd = generateProductsJsonLd(products); // Генерація JSON-LD
    console.log("Generated JSON-LD:", JSON.stringify(jsonLd, null, 2));

    const seo = seoConfig.allProducts; // SEO-конфігурація для сторінки

    return (
        <div className="transition-colors">
            <Head>
                {/* SEO метатеги */}
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:title" content={seo.openGraph.title} />
                <meta property="og:description" content={seo.openGraph.description} />
                <meta property="og:url" content={seo.openGraph.url} />
                <meta property="og:type" content={seo.openGraph.type} />
                <meta property="og:image" content={seo.openGraph.images[0].url} />
                <link rel="canonical" href={seo.canonical} />
                <meta name="robots" content={seo.robots} />
            </Head>

            {/* JSON-LD через Script */}
            <Script
                id="products-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Layout>
                <AllProducts />
            </Layout>
        </div>
    );
}
