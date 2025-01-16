"use client";
import AllProducts from "../components/AllProducts/AllProducts";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import seoConfig from "../../../next-seo.config";
import generateProductsJsonLd from "../seo/all-products-jsonld";
import products from "../data/products"; 

export default function Products() {
  const productsJsonLd = generateProductsJsonLd(products);

  return (
    <div className="transition-colors">
      <NextSeo {...seoConfig.allProducts} />
      <script type="application/ld+json">{JSON.stringify(productsJsonLd)}</script>
      <Layout>
        <AllProducts />
      </Layout>
    </div>
  );
}
