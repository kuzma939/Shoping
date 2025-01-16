
"use client";

import TopProductsInfo from "../components/TopProductsInfo/TopProductsInfo";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import seoConfig from "../../../next-seo.config";
import generateTopProductsJsonLd from "../seo/top-products-jsonld";
import products from "../data/products";

export default function TopProductspage() {
  // Фільтруємо тільки продукти, які є топ-продуктами
  const topProducts = products.filter((product) => product.isTop === true);

  // Генеруємо JSON-LD для топ-продуктів
  const topProductsJsonLd = generateTopProductsJsonLd(topProducts);

  return (
    <div className="transition-colors">
      <NextSeo {...seoConfig.topProducts} />
      <script type="application/ld+json">{JSON.stringify(topProductsJsonLd)}</script>
      <Layout>
        <TopProductsInfo />
      </Layout>
    </div>
  );
}