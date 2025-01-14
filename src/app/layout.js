"use client";  


import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body 
            className="transition-colors min-h-screen"
      >
        <ThemeProvider>
        {children}

        </ThemeProvider>
      </body>
    </html>
   
  );
}