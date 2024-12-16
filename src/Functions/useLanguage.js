import { useState } from "react"; // Import useState
import translations from "../locales/translations.json"; // Import your translations file

export function useLanguage() {
    const [language, setLanguage] = useState("EN");
  
    const translateList = (page, component) => {
      return translations[language]?.[page]?.[component] || [];
    };
  
    return { language, setLanguage, translateList };
  }

  