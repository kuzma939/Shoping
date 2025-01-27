"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import useImageFollow from "../../hooks/useImageFollow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

export default function FollowUs() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "follow_us");
  const Insta = "https://www.instagram.com/latore.atelier?igsh=Y3RvbWZhZW12Zmxj";
  const images = [
    { src: "/1.jpg", link: Insta },
    { src: "/2.jpg", link: Insta },
    { src: "/3.jpg", link: Insta },
    { src: "/4.jpg", link: Insta },
    { src: "/5.jpg", link: Insta },
    { src: "/6.jpg", link: Insta },
    { src: "/7.jpg", link: Insta },
    { src: "/8.jpg", link: Insta },
    { src: "/9.jpg", link: Insta },
    { src: "/10.jpg", link: Insta },
  ];

  const { displayedImages, handleNext, handlePrev } = useImageFollow(
    images.length,
    5
  );
  useKeyboardNavigation(handlePrev, handleNext);

  return (
    <section id="follow-us" className="bg-black text-white section-container py-8">
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          {menuItems[0]}
        </h2>
        <div className="border-t border-gray-700"></div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-8">
        {/* Ліва кнопка */}
        <div
          onClick={handlePrev}
          className="text-white text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 transition-all duration-300"
        >
          <FaChevronLeft />
        </div>

        {/* Карусель зображень */}
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
                alt={`Зображення ${imageIndex + 1}`}
                width={200} // Ширина для мобільних пристроїв
                height={250} // Пропорційна висота
                sizes="(max-width: 768px) 45vw, (max-width: 1024px) 20vw, 300px" // Аналогічно TopProducts
                style={{ width: "auto", height: "auto" }}
                quality={100} // Висока якість
                className="rounded-lg object-cover shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90
                  w-[calc(39vw-16px)]
                  sm:w-[150px] sm:h-[150px]
                  md:w-[200px] md:h-[300px]
                  lg:w-[250px] lg:h-[350px]
                  xl:w-[300px] xl:h-[350px]"
              />
            </Link>
          ))}
        </div>

        {/* Права кнопка */}
        <div
          onClick={handleNext}
          className="text-white text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 transition-all duration-300"
        >
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
}
