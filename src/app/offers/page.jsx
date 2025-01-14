"use client";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";

// Динамічний імпорт компонента OffersInfo
const DynamicOffersInfo = dynamic(() => import("../components/OffersInfo/OffersInfo"), { ssr: false });

export default function OffersPage() {
  return (
    <>
      <NextSeo
        title="Спеціальні пропозиції | Магазин жіночого одягу"
        description="Дізнайтеся про наші спеціальні пропозиції та знижки на одяг."
        openGraph={{
          url: "https://yourdomain.com/offers",
          title: "Спеціальні пропозиції | Магазин жіночого одягу",
          description: "Спеціальні пропозиції та акції нашого магазину.",
          images: [{ url: "https://yourdomain.com/preview-offers-image.jpg" }],
        }}
      />
      <div className="transition-colors">
        <Layout>
          <DynamicOffersInfo />
        </Layout>
      </div>
    </>
  );
}
