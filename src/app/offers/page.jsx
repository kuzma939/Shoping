import OffersInfo from "../components/OffersInfo/OffersInfo";
import Layout from "../components/Layout";

export default function Offerspage() {
    return (
        <div className="transition-colors">
            <Layout>
                <OffersInfo />
            </Layout>
        </div>
    );
}
{/*"use client";

import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
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
*/}