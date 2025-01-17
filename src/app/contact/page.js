import { Suspense } from "react";
import Layout from "../components/Layout";
import ContactUs from "../components/Contact_US/Contact_us";
import Script from "next/script";
//import { NextSeo } from "next-seo";
import Head from "next/head";
import seoConfig from "../../../next-seo.config";
import contactJsonLd from "../seo/contact-jsonld";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  const seo = seoConfig.contact; // Отримуємо конфігурацію для сторінки

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
      </Head>
    
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Layout>
        <Suspense fallback={<div>Loading contact form...</div>}>
          <ContactUs />
        </Suspense>
      </Layout>
    </div>
  );
}

{/*
import { Suspense } from "react"; // Додано імпорт Suspense
import Layout from "../components/Layout";
import ContactUs from "../components/Contact_US/Contact_us";
import Script from "next/script";
import contactJsonLd from "../seo/contact-jsonld";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <div className="transition-colors">
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Layout>
        <Suspense fallback={<div>Loading contact form...</div>}>
          <ContactUs />
        </Suspense>
      </Layout>
    </div>
  );
}
*/}

{/*
import Layout from "../components/Layout";
import ContactUs from "../components/Contact_US/Contact_us";
import { Suspense } from "react";
import { NextSeo } from "next-seo";
import seoConfig from "../../../next-seo.config";
import contactJsonLd from "../seo/contact-jsonld";

export default function ContactPage() {
  return (
    <div className="transition-colors">
      <NextSeo {...seoConfig.contact} />
      <script type="application/ld+json">{JSON.stringify(contactJsonLd)}</script>
      <Layout>
        <Suspense fallback={<div>Loading contact form...</div>}>
          <ContactUs />
        </Suspense>
      </Layout>
    </div>
  );
}
*/}