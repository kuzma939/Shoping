"use client";
import Image from "next/image";

export default function SpecialOffers() {
  return (
    <section className="bg-[#f5e7da] dark:bg-[#2e1f14] section-container py-12 px-4 md:px-8">
      <div className="space-y-4">
        <div className="relative ml-auto max-w-4xl pr-0 md:pr-[12px] flex justify-center md:justify-end">
          <div className="w-full h-[400px] md:h-[700px] lg:h-[900px] relative rounded-lg shadow-xl shadow-gray-800 dark:shadow-gray-600">
            <Image
              src="/8.jpg"
              alt="Special Offers Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="absolute bottom-[10%] md:bottom-[20%] left-0 md:left-[-30%] bg-white dark:bg-[#3a2a20] p-6 md:p-16 lg:p-20 rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[100%] max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-[#f5e8d6]">
              Special Offers
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 md:mb-6 text-gray-700 dark:text-gray-300">
              Limited Time
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
              Don’t miss out on our exclusive deals. Grab them while they last
              and enjoy discounts that won't be around forever!
            </p>
            <button className="bg-gray-900 dark:bg-[#f5e8d6] text-white dark:text-[#2e1f14] py-3 px-6 md:py-4 md:px-10 text-lg md:text-xl rounded-full hover:bg-gray-700 dark:hover:bg-[#d1b79e] transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
