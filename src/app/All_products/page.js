import AllProducts from "../components/AllProducts/AllProducts";
import Layout from "../components/Layout";

export default function Products() {
    return (
      <div className="transition-colors">
       
            <Layout>
                <AllProducts />
            </Layout>
        </div>
    );
}
{/*"use client";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import seoConfig from "../next-seo.config";

// Динамічний імпорт компонента AllProducts
const DynamicAllProducts = dynamic(() => import("../components/AllProducts/AllProducts"), { ssr: false });

export default function AllProductsPage() {
  console.log("Rendering AllProducts Page...");

  return (
    <>
      <NextSeo {...seoConfig.allProducts} />
      <Layout>
        <DynamicAllProducts />
      </Layout>
    </>
  );
}
*/}