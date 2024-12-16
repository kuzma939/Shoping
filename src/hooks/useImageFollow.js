"use client";
import { useState, useEffect } from "react";

export default function useImageFollow(imagesLength, visibleCount = 5, autoScrollDelay = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesLength - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); 
    }, autoScrollDelay);

    return () => clearInterval(interval); 
  }, [autoScrollDelay]);

  const displayedImages = Array.from({ length: visibleCount }).map(
    (_, i) => (currentIndex + i) % imagesLength
  );

  return { currentIndex, displayedImages, handleNext, handlePrev };
}
