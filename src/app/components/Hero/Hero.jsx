
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";

export default function Hero() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "hero");

  return (
    <section className="section-container relative" aria-labelledby="hero-heading">
      <h2 id="hero-heading" className="sr-only">Our Atelier Highlights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
        {/* Верхнє фото – вправо */}
        <div className="relative flex justify-end items-center">
          <Image
            src="/1.jpg"
            alt="Left showcase of Atelier fashion"
            width={400}
            height={600}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out focus:scale-110 hover:scale-110 
            w-[200px] sm:w-[300px] md:w-[400px]"
          />
        </div>

        {/* Центральний блок із текстом та фото */}
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl xl:text-7xl font-bold tracking-wide text-center text-gray-900 dark:text-gray-100 relative z-10">
            LATORE 
            <span className="block">ATELIER</span>
          </h1>
          <div className="absolute top-[50%] translate-y-[-50%]">
            <Image
              src="/10.jpg"
              alt="Center showcase of Atelier design"
              width={400}
              height={400}
              sizes="(max-width: 640px) 200px, (max-width: 1200px) 300px, 400px"
              className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out focus:scale-110 hover:scale-110"
            />
          </div>
        </div>

        {/* Нижнє фото – вліво */}
        <div className="relative flex justify-start items-center">
          <Image
            src="/5.jpg"
            alt="Showcase collection – Bottom left image"
            width={400}
            height={600}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out focus:scale-110 hover:scale-110 
            w-[200px] sm:w-[300px] md:w-[400px]"
          />
        </div>
      </div>

      {/* Текстова частина */}
      <div className="text-center mt-8">
        <p className="text-sm sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300">
          {menuItems[0] || "Experience the Difference"}
        </p>
        <p className="text-sm sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300">
          {menuItems[1] || "Explore Our Signature Collections"}
        </p>
      </div>
    </section>
  );
}
