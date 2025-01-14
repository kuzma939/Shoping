"use client";

import { LanguageProvider } from "../Functions/useLanguage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useTheme } from "../contexts/ThemeContext";
export default function Layout({ children }) {
  const { isDarkMode, toggleDarkMode } = useTheme();

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
 {/*"use client";

import { LanguageProvider } from "../Functions/useLanguage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useTheme } from "../contexts/ThemeContext";
import { NextSeo } from "next-seo";

export default function Layout({ children }) {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <LanguageProvider>
      <NextSeo
        title="Latore Atelier – Exclusive Fashion"
        description="Latore Atelier offers exclusive fashion collections for every season."
        openGraph={{
          url: "https://latore-atelier.com",
          title: "Latore Atelier – Exclusive Fashion",
          description: "Exclusive fashion collections for every season.",
          images: [{ url: "https://latore-atelier.com/preview-image.jpg" }],
        }}
      />
      <div
        className={`${
          isDarkMode ? "dark bg-black text-white" : "light bg-white text-black"
        } transition-colors min-h-screen`}
      >
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main role="main" aria-label="Page content">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
*/}