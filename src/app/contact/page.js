import { Suspense } from "react";
import Layout from "../components/Layout";
import ContactUs from "../components/Contact_US/Contact_us";
import Script from "next/script";
import { NextSeo } from "next-seo";
import seoConfig from "../../../next-seo.config";
import contactJsonLd from "../seo/contact-jsonld";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <div className="transition-colors">
      <NextSeo {...seoConfig.contact} />
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