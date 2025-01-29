import { useState, useEffect } from "react";

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

{/*
import { useState, useEffect } from "react";

export function useViewportSize() {
  const [viewportSize, setViewportSize] = useState("mobile"); // 'mobile', 'tablet', 'desktop'

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setViewportSize("mobile");
      } else if (window.innerWidth <= 620) {
        setViewportSize("tablet");
      } else {
        setViewportSize("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Викликаємо під час першого рендерингу
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportSize;
}
*/}