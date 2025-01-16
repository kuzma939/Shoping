"use client";

import Layout from "../components/Layout";
import Conditions from "../components/Conditions/Conditions";
import { NextSeo } from "next-seo";
import seoConfig from "../../../next-seo.config";
import generateConditionsJsonLd from "../seo/conditions-jsonld";

export default function ConditionPage() {
  const conditionsJsonLd = generateConditionsJsonLd();

  return (
    <div className="transition-colors">
      <NextSeo {...seoConfig.conditions} />
      <script type="application/ld+json">{JSON.stringify(conditionsJsonLd)}</script>
      <Layout>
        <Conditions />
      </Layout>
    </div>
  );
}
