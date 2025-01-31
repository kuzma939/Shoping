import { useState, useEffect } from "react";

// Функція для визначення viewport
function getViewport() {
  if (typeof window === "undefined") return "mobile"; // Значення за замовчуванням для SSR
  if (window.innerWidth <= 450) return "mobile";
  if (window.innerWidth <= 1024) return "tablet";
  return "desktop";
}

export function useViewportSize() {
  const [viewportSize, setViewportSize] = useState(getViewport);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const newSize = getViewport();
      setViewportSize((prev) => (prev !== newSize ? newSize : prev));
    };

    // Використання debounce для зменшення кількості викликів
    const debouncedResize = debounce(handleResize, 100);

    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  return viewportSize;
}

// Допоміжна функція debounce
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
{/*import { useState, useEffect } from "react";

export function useViewportSize() {
  const [viewportSize, setViewportSize] = useState("mobile");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getViewport = () => {
      if (window.innerWidth <= 450) return "mobile";
      if (window.innerWidth <= 1024) return "tablet";
      return "desktop";
    };

    setViewportSize(getViewport());

    const handleResize = () => {
      setViewportSize((prev) => {
        const newSize = getViewport();
        return prev !== newSize ? newSize : prev;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportSize;
}

*/}