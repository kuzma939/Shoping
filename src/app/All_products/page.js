"use client";

import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import seoConfig from "../next-seo.config";
import dynamic from "next/dynamic";

// Динамічний імпорт компонента AllProducts
const DynamicAllProducts = dynamic(() => import("../components/AllProducts/AllProducts"), { ssr: false });

export default function AllProductsPage() {
  return (
    <>
      <NextSeo {...seoConfig.allProducts} />
      <Layout>
        <DynamicAllProducts />
      </Layout>
    </>
  );
}
