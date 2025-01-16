"use client";

import OffersInfo from "../components/OffersInfo/OffersInfo";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import seoConfig from "../../../next-seo.config";
import generateOffersJsonLd from "../seo/offers-jsonld";
import products from "../data/products";

export default function Offerspage() {
  // Фільтруємо продукти тільки з isSpecialOffer: true
  const specialOffers = products.filter((product) => product.isSpecialOffer === true);

  // Генеруємо JSON-LD для пропозицій
  const offersJsonLd = generateOffersJsonLd(specialOffers);

  return (
    <div className="transition-colors">
      {/* SEO для сторінки Offers */}
      <NextSeo {...seoConfig.offers} />

      {/* JSON-LD для пропозицій */}
      <script type="application/ld+json">{JSON.stringify(offersJsonLd)}</script>

      {/* Основний контент */}
      <Layout>
        <OffersInfo offers={specialOffers} />
      </Layout>
    </div>
  );
}
