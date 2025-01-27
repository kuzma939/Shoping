"use client";

import Image from "next/image";
import useImageFollow from "../../hooks/useImageFollow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

export default function OurProducts() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "Our_Products");

  const images = [
    { src: "/1.jpg", link: "/All-products" },
    { src: "/2.jpg", link: "/All-products" },
    { src: "/3.jpg", link: "/All-products" },
    { src: "/4.jpg", link: "/All-products" },
    { src: "/5.jpg", link: "/All-products" },
    { src: "/6.jpg", link: "/All-products" },
    { src: "/7.jpg", link: "/All-products" },
    { src: "/8.jpg", link: "/All-products" },
    { src: "/9.jpg", link: "/All-products" },
    { src: "/10.jpg", link: "/All-products" },
  ];

  const { displayedImages, handleNext, handlePrev } = useImageFollow(
    images.length,
    5
  );

  useKeyboardNavigation(handlePrev, handleNext);

  return (
    <section
      id="our-products"
      className="bg-[#fcf8f3] dark:bg-[#2e1f14] text-black dark:text-gray-100 section-container py-8"
    >
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          {menuItems[0]}
        </h2>
        <div className="border-t border-gray-300 dark:border-gray-700"></div>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-8">
        {/* Ліва кнопка */}
        <div
          onClick={handlePrev}
          className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        >
          <FaChevronLeft />
        </div>

        {/* Карусель */}
        <div className="flex overflow-x-auto gap-4 w-full px-4 sm:gap-6 md:gap-8">
          {displayedImages.map((imageIndex) => (
            <Link
              key={imageIndex}
              href={images[imageIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group"
            >
              <Image
                src={images[imageIndex].src}
                alt={`Топ продукт ${imageIndex + 1}`}
                width={200} // Зменшений розмір для мобільних
                height={250} // Пропорційна висота
                sizes="(max-width: 768px) 45vw, (max-width: 1024px) 20vw, 300px"
                style={{ width: "auto", height: "auto" }}
                quality={100}
                className="rounded-lg object-cover shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
              />
            </Link>
          ))}
        </div>

        {/* Права кнопка */}
        <div
          onClick={handleNext}
          className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        >
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
}
