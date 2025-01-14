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
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import seoConfig from "../next-seo.config";


// Динамічний імпорт для уникнення помилок із SSR
const DynamicTopProductsInfo = dynamic(() => import("../components/TopProductsInfo/TopProductsInfo"), { ssr: false });

export default function TopProductsPage() {
  return (
    <>
      <NextSeo {...seoConfig.topProducts} />
      <Layout>
        <DynamicTopProductsInfo />
      </Layout>
    </>
  );
}
*/}