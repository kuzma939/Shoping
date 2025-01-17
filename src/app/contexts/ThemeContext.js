
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Контекст для теми
const ThemeContext = createContext();

// Провайдер контекста для теми
export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Виконується лише на клієнті
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("darkMode");
            if (savedMode !== null) {
                setIsDarkMode(savedMode === "true");
            } else {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setIsDarkMode(prefersDark);
            }
        }
    }, []);

    // Збереження теми в localStorage (тільки на клієнті)
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("darkMode", isDarkMode);
        }
    }, [isDarkMode]);

    // Тогл для перемикання теми
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Хук для використання контекста
export const useTheme = () => useContext(ThemeContext);
