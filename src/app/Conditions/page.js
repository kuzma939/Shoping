
import Layout from "../components/Layout";
import Conditions from "../components/Conditions/Conditions";

export default function ConditionPage() {
    return (
        <div className="transition-colors">
            <Layout>
                <Conditions />
            </Layout>
        </div>
    );
}

{/*"use client";

import Layout from "../components/Layout";
import Conditions from "../components/Conditions/Conditions";
import { NextSeo } from "next-seo";
import seoConfig from "../../../next-seo.config";
import generateConditionsJsonLd from "../seo/conditions-jsonld";
import { useState, useEffect } from "react";

export default function ConditionPage() {
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      const data = await import("../../../public/locales/translations.json").then(
        (module) => module.default
      );
      setTranslations(data);
    };

    fetchTranslations();
  }, []);

  const conditionsJsonLd = generateConditionsJsonLd();

  if (!translations) {
    return <div>Loading...</div>; // Завантаження даних
  }

  return (
    <div className="transition-colors">
      <NextSeo {...seoConfig.conditions} />
      <script type="application/ld+json">{JSON.stringify(conditionsJsonLd)}</script>
      <Layout>
        <Conditions translations={translations} />
      </Layout>
    </div>
  );
}
*/}