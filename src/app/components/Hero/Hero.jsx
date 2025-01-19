import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";

export default function Hero() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "hero");

  return (
    <section className="section-container relative" aria-labelledby="hero-heading">
      <h2 id="hero-heading" className="sr-only">Our Atelier Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 relative">
        <div className="w-48 sm:w-[200px] -mb-4 md:w-[300px] lg:w-[400px] relative flex flex-row items-center ml-8 sm:ml-24 mg:ml-36 mobile-320">
          <Image
            src="/1.jpg"
            alt="Left showcase of Atelier fashion"
            width={400}
            height={600}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out focus:scale-110 hover:scale-110 group-hover:scale-110 cursor-pointer w-32 sm:w-[200px] md:w-[300px] lg:w-[400px]"
          />
        </div>

        <div className="relative col-span-1 sm:col-span-3 flex justify-center items-center z-10 h-[100px] sm:h-[150px] mobile-320">
          <h1 className="text-2xl sm:text-4xl md:text-6xl xl:text-7xl font-bold tracking-wide whitespace-nowrap text-center inline-block relative text-gray-900 dark:text-gray-100">
            LATORE A
            <span className="relative z-10">TELIER</span>
            <span className="absolute top-[-60px] right-[-90px] sm:top-[-220px] sm:right-[-260px] md:top-[-240px] md:right-[-260px] xl:top-[-340px] xl:right-[-340px] z-0 mobile-320">
              <Image
                src="/10.jpg"
                alt="Showcase of Atelier design – Right"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="w-32 h-32 sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out focus:scale-110 hover:scale-110 group-hover:scale-110"
              />
            </span>
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:mt-4 mobile-320">
        <div className="relative flex justify-center items-center">
          <Image
            src="/5.jpg"
            alt="Showcase collection – Bottom left image"
            width={400}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out focus:scale-110 hover:scale-110 group-hover:scale-110 w-32 sm:w-[200px] md:w-[300px] lg:w-[400px] ml-8 sm:ml-36 h-auto"
          />
        </div>

        <header className="flex flex-col justify-center text-center space-y-2">
          <p className="text-xs sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mobile-320">
            {menuItems[0] || "Experience the Difference"}
          </p>
          <p className="text-xs sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mobile-320">
            {menuItems[1] || "Explore Our Signature Collections"}
          </p>
        </header>
      </div>
    </section>
  );
}