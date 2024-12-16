"use client"; // Ensure this is a client-side component

import { useDarkMode } from "../Functions/useDarkMode"; // Import the custom hook
import "./globals.css";
export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useDarkMode(); // Use the dark mode state

  return (
    <html lang="en">
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
