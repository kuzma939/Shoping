"use client";

import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const DynamicContactUs = dynamic(() => import("../components/Contact_US/Contact_us"), { ssr: false });

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Контакти | Магазин жіночого одягу"
        description="Контактна сторінка нашого магазину з інформацією про зв'язок."
        openGraph={{
          url: "https://yourdomain.com/contact",
          title: "Контакти | Магазин жіночого одягу",
          description: "Отримайте контактну інформацію для вашого запиту.",
          images: [{ url: "https://yourdomain.com/preview-image.jpg" }],
        }}
      />
      <Layout>
        <DynamicContactUs />
      </Layout>
    </>
  );
}
