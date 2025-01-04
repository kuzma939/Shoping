"use client";

import { useDarkMode } from "../Functions/useDarkMode";
import { LanguageProvider } from "../Functions/useLanguage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <LanguageProvider>
      <div
        className={`${
          isDarkMode ? "dark bg-black text-white" : "light bg-white text-black"
        } transition-colors min-h-screen`}
      >
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
   
  );
}
 