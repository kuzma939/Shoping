import Layout from "../components/Layout";
import Conditions from "../components/Conditions/Conditions";
import Head from "next/head";
import generateConditionsJsonLd from "../seo/conditions-jsonld";
import seoConfig from "../../../next-seo.config";

export default function ConditionPage() {
  const jsonLd = generateConditionsJsonLd(); // Генерація JSON-LD
  const seo = seoConfig.conditions; // SEO-конфігурація

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Layout>
        <Conditions />
      </Layout>
    </div>
  );
}
