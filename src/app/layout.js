"use client";

import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";
import Head from "next/head";

export default function RootLayout({ children }) {
    const siteJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Latore Atelier",
        url: "https://shoping-tdfr.vercel.app",
        description: "Latore Atelier пропонує стильний та ексклюзивний жіночий одяг для кожного сезону.",
        image: "https://shoping-tdfr.vercel.app/Darklogo.avif",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://shoping-tdfr.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <html lang="uk">
            <Head>
                <title>Ексклюзивний жіночий одяг від Latore Atelier | Створено для кожного сезону</title>
                <meta
                    name="description"
                    content="Latore Atelier пропонує стильний та ексклюзивний жіночий одяг, розроблений для того, щоб ви почувалися унікально у будь-якому сезоні. Відкрийте наші колекції сьогодні!"
                />
                <meta
                    name="keywords"
                    content="жіночий одяг, Latore Atelier, ексклюзивний одяг, сучасна мода, стильний одяг, сезонні колекції"
                />
                <meta name="author" content="Latore Atelier" />
                <meta property="og:title" content="Ексклюзивний жіночий одяг від Latore Atelier" />
                <meta
                    property="og:description"
                    content="Latore Atelier пропонує стильний та ексклюзивний жіночий одяг, розроблений для того, щоб ви почувалися унікально у будь-якому сезоні. Відкрийте наші колекції сьогодні!"
                />
                <meta property="og:image" content="https://shoping-tdfr.vercel.app/Darklogo.avif" />
                <link rel="icon" href="/Darklogo.avif" type="image/avif" />
                <link rel="canonical" href="https://shoping-tdfr.vercel.app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
                />
            </Head>
            <body className="transition-colors min-h-screen">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
