"use client";  

import { useDarkMode } from "./Functions/useDarkMode"; // Import the custom hook
import "./globals.css";
export default function RootLayout({ children }) {
  const [isDarkMode] = useDarkMode(); 

  return (
    <html lang="en" className={isDarkMode ? "dark" : "light"}>
      <body 
            className={`${ 
        isDarkMode ? "dark bg-black text-white" : "light bg-white text-black"
      } transition-colors min-h-screen `}
      >
        {children}
      </body>
    </html>
   
  );
}
