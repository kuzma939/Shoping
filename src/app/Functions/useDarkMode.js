
"use client";

import { useState, useEffect, useCallback } from "react";

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Ініціалізація стану (без доступу до браузера)
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("darkMode");
            if (savedMode !== null) {
                return savedMode === "true";
            }
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return prefersDark;
        }
        return false; // Значення за замовчуванням для серверного середовища
    });

    // Завантаження стану при першому рендері
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

    // Зміна теми в localStorage і DOM
    useEffect(() => {
        if (typeof window !== "undefined") {
            const root = document.documentElement;
            root.className = isDarkMode ? "dark" : "light"; // Зміна класу на `html`
            localStorage.setItem("darkMode", isDarkMode.toString()); // Збереження стану в localStorage
        }
    }, [isDarkMode]);

    // Функція для перемикання теми
    const toggleDarkMode = useCallback(() => {
        setIsDarkMode((prev) => !prev);
    }, []);

    return [isDarkMode, toggleDarkMode]; // Повернення стану теми та функції перемикання
}
