"use client";
import Image from "next/image";

export default function SpecialOffers() {
  return (
    <section className="bg-[#f5e7da] py-12 px-8">
      <div className="space-y-4">
        <div className="relative ml-auto max-w-6xl pr-[12px] flex justify-end">
          {/* Зображення на всю ширину контейнера */}
          <div className="w-full h-[900px] relative rounded-lg shadow-2xl shadow-black">
            <Image
              src="/8.jpg"
              alt="Special Offers Image"
              layout="fill" /* Зображення заповнює контейнер */
              objectFit="cover" /* Масштабування без спотворень */
              className="rounded-lg"
            />
          </div>
         {/* Текстовий блок */}
 {/* Текстовий блок, що вилазить на зображення */}
 <div className="absolute bottom-[20%] left-[-23%] bg-white p-16 md:p-20 rounded-lg shadow-lg w-[100%] max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Special Offers</h2>
          <p className="text-2xl md:text-3xl font-medium mb-6 text-gray-700">Limited Time</p>
          <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
            Don’t miss out on our exclusive deals. Grab them while they last and enjoy discounts that won't be around forever!
          </p>
          <button className="bg-gray-900 text-white py-4 px-10 text-lg md:text-xl rounded-full hover:bg-gray-700 transition">
            Shop Now
          </button>
        </div>
        </div>

      </div>
    </section>
  );
}
