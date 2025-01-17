import TopProductsInfo from "../components/TopProductsInfo/TopProductsInfo";
import Layout from "../components/Layout";

export default function TopProductspage() {
    return (
        <div className="transition-colors">
            <Layout>
                <TopProductsInfo />
            </Layout>
        </div>
    );
}
{/*"use client";

export const dynamic = "force-dynamic";

import dynamicImport from "next/dynamic"; // Перейменовано dynamic на dynamicImport
import { NextSeo } from "next-seo";
import seoConfig from "../../../next-seo.config";
import generateTopProductsJsonLd from "../seo/top-products-jsonld";
import products from "../data/products";

// Динамічне завантаження компонентів Layout та TopProductsInfo
const Layout = dynamicImport(() => import("../components/Layout"), { ssr: false });
const TopProductsInfo = dynamicImport(() => import("../components/TopProductsInfo/TopProductsInfo"), { ssr: false });

export default function TopProductspage() {
  // Фільтруємо тільки продукти, які є топ-продуктами
  const topProducts = products.filter((product) => product.isTop === true);

  // Генеруємо JSON-LD для топ-продуктів
  const topProductsJsonLd = generateTopProductsJsonLd(topProducts);

  return (
    <div className="transition-colors">
      <NextSeo {...seoConfig.topProducts} />

      {/* JSON-LD для топ-продуктів 
      <script type="application/ld+json">{JSON.stringify(topProductsJsonLd)}</script>

      {/* Основний контент 
      <Layout>
        <TopProductsInfo products={topProducts} />
      </Layout>
    </div>
  );
}
*/}