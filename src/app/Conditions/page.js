"use client";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import seoConfig from "../next-seo.config";

const DynamicConditions = dynamic(() => import("../components/Conditions/Conditions"), { ssr: false });

export default function ConditionPage() {
  return (
    <>
      <NextSeo {...seoConfig.conditions} />
      <Layout>
        <DynamicConditions />
      </Layout>
    </>
  );
}
