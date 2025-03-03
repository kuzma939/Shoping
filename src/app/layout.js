"use client";

import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";
import Script from "next/script";
import { siteJsonLd, organizationJsonLd } from "./seo/loyout-jsonld"; // Імпорт SEO-даних
import ErrorBoundary from "../app/components/ErrorBoundary/ErrorBoundary";

export default function RootLayout({ children }) {
    return (
        <html lang="uk">
            <head>
                <title>
                    Ексклюзивний жіночий одяг від Latore Atelier | Створено для кожного сезону
                </title>
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
                <meta
                    property="og:image"
                    content="https://shoping-tdfr.vercel.app/logo-social.jpg?v=1"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://shoping-tdfr.vercel.app" />
                <meta property="og:type" content="website" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" href="/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="/favicon.ico" />

                <link rel="canonical" href="https://shoping-tdfr.vercel.app" />
                <link rel="preload" href="/fonts/Raleway-Thin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/Roboto-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

                <style>{`
                    body {
                        font-family: "Raleway", Arial, sans-serif;
                        font-weight: 400;
                        background-color: white;
                        color: black;
                    }
                `}</style>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-site-verification" content="cEPkdQQw_dVOxzbi7iLzOjHyYw9kx6u7lGboqRczRa8" />
                
                {/* Google Analytics  */}
                {process.env.NODE_ENV === "production" && (
                    <>
                        <Script
                            src="https://www.googletagmanager.com/gtag/js?id=G-0PPLZGLX20"
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-0PPLZGLX20');
                            `}
                        </Script>
                    </>
                )}
                
                {/* JSON-LD через next/script */}
                <Script
                    id="organization-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationJsonLd),
                    }}
                />
                <Script
                    id="website-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(siteJsonLd),
                    }}
                />
            </head>
            <body className="transition-colors min-h-screen">
                <ThemeProvider>
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                </ThemeProvider>
            </body>
        </html>
    );
}
