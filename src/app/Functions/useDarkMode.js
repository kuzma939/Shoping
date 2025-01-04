import { useState, useEffect, useCallback } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Завантаження стану з localStorage під час першого рендера
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  // Оновлення className для темного режиму та збереження у localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;

      // Зміна className
      root.className = isDarkMode ? "dark" : "light";

      // Збереження стану у localStorage
      localStorage.setItem("darkMode", isDarkMode);
    }
  }, [isDarkMode]);

  // Мемоізована функція для перемикання темного режиму
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  // Лог для перевірки
  useEffect(() => {
    console.log("Dark mode updated:", isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
}
{/*
import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;

      // Змінюємо весь className
      root.className = isDarkMode ? "dark" : "light";

      // Зберігаємо стан у localStorage
      localStorage.setItem("darkMode", isDarkMode);
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
*/}