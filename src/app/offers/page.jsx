import OffersInfo from "../components/OffersInfo/OffersInfo";
import Layout from "../components/Layout";
import Head from "next/head";
import Script from "next/script";
import generateOffersJsonLd from "../seo/offers-jsonld";
import products from "../data/products"; // Загальний масив продуктів
import seoConfig from "../../../next-seo.config";

export default function Offerspage() {
  // Отримуємо продукти з основного масиву, позначені як `isSpecialOffer`
  const offers = products.filter((product) => product.isSpecialOffer);

  const jsonLd = generateOffersJsonLd(offers); // Генерація JSON-LD для пропозицій

  const seo = seoConfig.offers; // SEO-конфігурація

  return (
    <div className="transition-colors">
      <Head>
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
      <Script
        id="offers-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout>
        <OffersInfo />
      </Layout>
    </div>
  );
}
