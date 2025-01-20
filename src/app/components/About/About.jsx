
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage"; 

export default function About() {
  const {  translateList } = useLanguage(); 
  const menuItems = translateList("home", "about");

  return (
    <section className="bg-[#e6d1c1] dark:bg-[#2e1f14] section-container py-8 sm:py-12 relative" id="about">
      <h1 className="pl-24 text-2xl sm:text-5xl text-[#4A3222] dark:text-[#f5e8d6] font-bold mb-6 sm:mb-10 text-left">
        {menuItems[0]}
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center relative">
        <div className="space-y-4">
        <figure className="relative mb-6 sm:mb-8 group px-8 lg:px-8 xl:ml-16 mt-4">
  <Image
    src="/2.jpg"
    alt="Main Image"
    width={250}
    height={350}
    className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-105 w-full max-w-[350px]"
  />
</figure>
<figure className="relative mt-4 flex justify-center lg:justify-end group">
  <Image
    src="/3.jpg"
    alt="Secondary Image"
    width={150}
    height={200}
    className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-105 w-full max-w-[200px]"
  />
</figure>

        </div>

        <article className="text-center md:text-left -mt-16 sm:-mt-24 flex-col items-center md:items-start hidden lg:flex">
          <h2 className="text-lg sm:text-xl md:text-2xl xl:text-4xl font-extrabold mb-4">{menuItems[1]}</h2>
          <p className="text-base sm:text-lg md:text-2xl text-[#4A3222] dark:text-[#f5e8d6] leading-relaxed mb-6">{menuItems[2]}</p>
          <p className="text-base sm:text-lg md:text-2xl text-[#4A3222] dark:text-[#f5e8d6] leading-relaxed mb-6">{menuItems[3]}</p>
          <p className="text-base sm:text-lg md:text-2xl text-[#4A3222] dark:text-[#f5e8d6] leading-relaxed mb-6">{menuItems[4]}</p>
          <p className="text-base sm:text-lg md:text-2xl text-[#4A3222] dark:text-[#f5e8d6] leading-relaxed mb-6">{menuItems[5]}</p>
          {/*
          <button className="bg-[#4A3222] text-white py-2 px-4 sm:px-6 rounded-full hover:bg-[#6E4C2E] dark:bg-[#f5e8d6] dark:text-[#4A3222] dark:hover:bg-[#d1b79e] transition-all duration-300 ease-in-out">
            {menuItems[2]}
          </button>
          */}
        </article>
      </div>

      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-[#00000080] flex flex-col items-center justify-center p-4 sm:p-8 md:flex lg:hidden w-full max-w-none">
        <p className="text-white text-lg sm:text-2xl px-4 text-center mb-4">
          {menuItems[2]}
        </p>
        {/*
        <button className="bg-[#4A3222] text-white py-2 px-4 rounded-full hover:bg-[#6E4C2E] dark:bg-[#f5e8d6] dark:text-[#4A3222] dark:hover:bg-[#d1b79e] transition-all duration-300 ease-in-out">
          {menuItems[2]}
        </button>
        */} 
      </div>
    </section>
  );
}
