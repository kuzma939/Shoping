"use client";

import { LanguageProvider } from "../Functions/useLanguage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useTheme } from "../contexts/ThemeContext";
import Head from "next/head";

export default function Layout({ children }) {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <LanguageProvider>
      <div
        className={`${
          isDarkMode ? "dark bg-black text-white" : "light bg-white text-black"
        } transition-colors min-h-screen`}
      >
        <Head> {/*мета-теги та SEO-оптимізація*/}
          <title>Latore Atelier – Exclusive Fashion</title>
          <meta
            name="description"
            content="Latore Atelier offers exclusive fashion collections for every season."
          />
          <meta
            name="keywords"
            content="fashion, atelier, clothing, exclusive, Latore Atelier"
          />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "Latore Atelier",
                description: "Exclusive fashion collections for every season.",
                url: "https://latore-atelier.com",
              }),
            }}
          />
        </Head>

        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
       
        <main
          role="main"
          aria-label="Page content"
        >
          {children}
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
