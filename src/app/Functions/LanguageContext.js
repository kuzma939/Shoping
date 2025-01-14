"use client"; // Позначаємо файл клієнтським

import { useState, useContext, createContext, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("EN");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const res = await fetch("/locales/translations.json");
        if (!res.ok) throw new Error("Failed to load translations");
        const data = await res.json();
        setTranslations(data);
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    };

    if (typeof window !== "undefined") {
      fetchTranslations(); // Виконується лише на клієнті
    }
  }, []);

  const translate = (page, component) => {
    return translations[language]?.[page]?.[component] || "Missing translation";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
