import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import { useEffect, useState } from "react";

export default function Hero() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "hero");

  const [isMobile, setIsMobile] = useState(false);

  // Визначення, чи мобільний розмір екрану
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Мобільний екран <= 640px
    };
    handleResize(); // Викликати на початку
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // **Мобільний дизайн**
  if (isMobile) {
    return (
   
<section
className="section-container relative"
aria-labelledby="hero-heading"
role="banner"
>
<div className="flex flex-col gap-6 items-center">
  {/* Центр зображення */}
  <div className="relative">
    <Image
      src="/10.jpg"
      alt="Center showcase of Latore Atelier's elegant design"
      width={300}
      height={300}
      sizes="(max-width: 640px) 80vw, 300px"
      className="w-[200px] h-[200px] rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
      priority
    />
    <h2
      className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] text-center text-3xl font-bold text-white bg-black bg-opacity-50 py-3 px-6 rounded-2xl whitespace-nowrap"
      role="heading"
      aria-level="2"
    >
      LATORE ATELIER
    </h2>
  </div>

  {/* Зображення з боків */}
  <div className="flex gap-4 justify-between w-full px-4">
    <Image
      src="/1.jpg"
      alt="Left showcase of Latore Atelier's exclusive fashion design"
      width={200}
      height={300}
      sizes="(max-width: 640px) 45vw, 200px"
      className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
    />
    <Image
      src="/5.jpg"
      alt="Showcase of Latore Atelier's signature collection"
      width={200}
      height={300}
      sizes="(max-width: 640px) 45vw, 200px"
      className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
    />
  </div>
</div>
<div
  className="text-center mt-2 px-4"
  style={{ minHeight: "100px" }} // Зарезервовано місце для тексту
>
  <p className="text-base text-gray-700 dark:text-gray-300">
    {menuItems[0] || "Experience the Unique Touch of Latore Atelier"}
  </p>
  <p className="text-base text-gray-700 dark:text-gray-300 mt-2">
    {menuItems[1] || "Explore Our Signature Collections"}
  </p>
</div>

</section>
    );
  }

  // **Дизайн для планшетів та десктопів**
  return (
    <section
      className="section-container relative"
      aria-labelledby="hero-heading"
      role="banner"
    >
      <h1 id="hero-heading" className="sr-only">
        Explore Latore Atelier – Signature Fashion and Design
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
        <div className="relative flex justify-end items-center px-4">
          <Image
            src="/1.jpg"
            alt="Left showcase of Latore Atelier's exclusive fashion design"
            width={400}
            height={600}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 w-[200px] sm:w-[300px] md:w-[400px]"
            priority
          />
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <h2
            className="text-2xl sm:text-4xl md:text-6xl xl:text-7xl font-bold tracking-wide text-center text-gray-900 dark:text-gray-100 relative z-10"
            role="heading"
            aria-level="2"
          >
            LATORE 
            <span className="block">ATELIER</span>
          </h2>
          <div className="absolute top-[50%] translate-y-[-50%]">
            <Image
              src="/10.jpg"
              alt="Center showcase of Latore Atelier's elegant design"
              width={400}
              height={400}
              sizes="(max-width: 640px) 200px, (max-width: 1200px) 300px, 400px"
              className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
              priority
            />
          </div>
        </div>

        <div className="relative flex justify-start items-center px-4">
          <Image
            src="/5.jpg"
            alt="Showcase of Latore Atelier's signature collection"
            width={400}
            height={600}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 w-[200px] sm:w-[300px] md:w-[400px]"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300">
          {menuItems[0] || "Experience Latore Atelier's Unique Fashion Touch"}
        </p>
        <p className="text-sm sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300">
          {menuItems[1] || "Discover Our Signature Collections"}
        </p>
      </div>
    </section>
  );
}
