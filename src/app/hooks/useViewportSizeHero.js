import { useState, useEffect } from "react";

export function useViewportSize() {
  const getViewportWidth = () => (typeof window === "undefined" ? 0 : window.innerWidth);

  const [viewportWidth, setViewportWidth] = useState(getViewportWidth());

  useEffect(() => {
    const handleResize = () => setViewportWidth(getViewportWidth());

    setViewportWidth(getViewportWidth());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportWidth;
}

{/*
import { useState, useEffect } from "react";

export function useViewportSize() {
  const [viewportSize, setViewportSize] = useState("desktop"); // За замовчуванням для SSR

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