"use client"; // Клієнтський компонент, щоб працювати з хуком `useSearchParams`
import Layout from "../components/Layout";
import ContactUs from "../components/Contact_US/Contact_us";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <div className="transition-colors">
      <Layout>
        <Suspense fallback={<div>Loading contact form...</div>}>
          <ContactUs />
        </Suspense>
      </Layout>
    </div>
  );
}
{/*"use client";

import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import seoConfig from "../next-seo.config"; // Імпорт конфігурації SEO
import dynamic from "next/dynamic";

// Динамічний імпорт ContactUs
const DynamicContactUs = dynamic(() => import("../components/Contact_US/Contact_us"), { ssr: false });

export default function ContactPage() {
  return (
    <>
      {/* SEO налаштування для контактної сторінки 
      <NextSeo {...seoConfig.contact} />
      <Layout>
        <DynamicContactUs />
      </Layout>
    </>
  );
}
*/}