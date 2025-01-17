"use client";
import { ThemeProvider } from "./contexts/ThemeContext";

import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Latore Atelier пропонує ексклюзивні модні колекції для кожного сезону." />
                <meta name="keywords" content="мода, ексклюзивний одяг, інтернет-магазин, сучасна мода" />
                <meta name="author" content="Latore Atelier" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="transition-colors min-h-screen">
            <ThemeProvider>
                  {children}
                    </ThemeProvider>
            </body>
        </html>
    );
}