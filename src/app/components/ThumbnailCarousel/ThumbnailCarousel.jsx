"use client";
import React, { useState } from "react";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

const ThumbnailCarousel = ({ images = [], onImageSelect }) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  const handleScrollLeft = () => {
    const prevIndex = thumbnailIndex - 1 < 0 ? images.length - 1 : thumbnailIndex - 1;
    setThumbnailIndex(prevIndex);
    onImageSelect(images[prevIndex]); // Передає вибране зображення у `ProductBanner`
  };

  const handleScrollRight = () => {
    const nextIndex = (thumbnailIndex + 1) % images.length;
    setThumbnailIndex(nextIndex);
    onImageSelect(images[nextIndex]); // Передає вибране зображення у `ProductBanner`
  };

  useKeyboardNavigation(handleScrollLeft, handleScrollRight);

  return (
    <div className="relative w-full max-w-lg flex justify-center items-center mt-4 overflow-visible">

      {/* Ліва стрілка */}
      <button
        className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        onClick={handleScrollLeft}
      >
        {"‹"}
      </button>

      {/* Мініатюри */}
      <div className="flex gap-2 overflow-hidden px-8">
        <div
          className="flex gap-2 transition-transform duration-300"
          style={{
            transform: `translateX(-${thumbnailIndex * 60}px)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-24 h-24 object-cover border rounded cursor-pointer hover:brightness-150 hover:scale-105 ${
                index === thumbnailIndex ? "border-black dark:border-white" : "border-gray-500"
              }`}
              onClick={() => {
                setThumbnailIndex(index);
                onImageSelect(image); // Передає вибране зображення
              }}
            />
          ))}
        </div>
      </div>

      {/* Права стрілка */}
      <button
        className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        onClick={handleScrollRight}
      >
        {"›"}
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
