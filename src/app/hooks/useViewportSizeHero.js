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
