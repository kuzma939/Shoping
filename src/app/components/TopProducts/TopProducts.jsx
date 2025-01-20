"use client";
import Image from "next/image";
import useImageFollow from "../../hooks/useImageFollow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage"; // Import the custom hook
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";
export default function TopProducts() {
  
  const images = [
    { src: "/Costumes/Woolen suit with skirt/1.avif", link: "/Top-products" },
    { src: "/Costumes/Wool suit with trousers/8.avif", link: "/Top-products" },
    { src: "/Costumes/Wool suit with vest/1.avif", link: "Top-products" },
    { src: "/Dress/Woolen trapeze dress/1.avif", link: "Top-products" },
    { src: "/Dress/Wool A-line dress/2.avif", link: "/Top-products" },
    { src: "/6.jpg", link: "/Top-products" },
    { src: "/7.jpg", link: "/Top-products" },
    { src: "/8.jpg", link: "/Top-products" },
    { src: "/9.jpg", link: "/Top-products" },
    { src: "/10.jpg", link: "/Top-products" },

  ];

  const { displayedImages, handleNext, handlePrev } = useImageFollow(
    images.length,
    5 
  );
    const {  translateList } = useLanguage(); // Use the hook
    const menuItems = translateList("home", "top_products");
    
    useKeyboardNavigation(handlePrev, handleNext);
  return (
    <section
      id="top-products"
      className="bg-[#fcf8f3] dark:bg-[#2e1f14] text-black dark:text-gray-100 section-container py-12"
    >
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          {menuItems[0]}
        </h2>
       
        <div className="border-t border-gray-300 dark:border-gray-700"></div>
        </div>
      <div className="flex items-center justify-center space-x-4  ml-4 mt-8">
        <div
          onClick={handlePrev}
          className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        >
          <FaChevronLeft />
        </div>
        <div className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8">
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
            alt={`Image ${imageIndex + 1}`}
            width={150} 
            height={150}
            quality={100} 
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
