import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Hero() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "hero");

  const [viewportSize, setViewportSize] = useState("mobile"); // 'mobile', 'tablet', 'desktop'

  // Визначаємо ширину екрану
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setViewportSize("mobile");
      } else if (window.innerWidth <= 620) {
        setViewportSize("tablet");
      } else {
        setViewportSize("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Викликаємо під час першого рендерингу
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // **Мобільний вигляд (до 450px)**
  if (viewportSize === "mobile") {
    return (
      <>
        <Head>
          <link
            rel="preload"
            as="image"
            href="/Dress/Dress Grace/1.avif"
            type="image/avif"
          />
        </Head>
        <section
          className="section-container relative"
          aria-labelledby="hero-heading"
          role="banner"
        >
          <h1 id="hero-heading" className="sr-only">
            Experience the Unique Touch of Latore Atelier – Exclusive Fashion
          </h1>
          <div className="flex flex-col gap-6 items-center">
            {/* Центральне зображення */}
            <div className="relative">
              <Image
                src="/Dress/Dress Grace/1.avif"
                alt="Elegant design by Latore Atelier – Centerpiece"
                width={300}
                height={300}
                sizes="(max-width: 450px) 80vw, 300px"
                className="w-[200px] h-[200px] rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
                priority
                decoding="async"
              />
              <h2
                className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] text-center text-3xl font-bold text-white bg-black bg-opacity-50 py-3 px-6 rounded-2xl whitespace-nowrap"
                aria-label="LATORE ATELIER Centerpiece"
              >
                LATORE ATELIER
              </h2>
            </div>
          </div>
          <header className="flex flex-col justify-center mt-8 text-center space-y-2">
            <p className="text-xl sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mobile-320">
              {menuItems[0] || "Experience the Difference"}
            </p>
            <p className="text-xl sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mobile-320">
              {menuItems[1] || "Explore Our Signature Collections"}
            </p>
          </header>
        </section>
      </>
    );
  }

  // **Планшетний вигляд (451px - 620px)**
  if (viewportSize === "tablet") {
    return (
      <>
        <Head>
          <link
            rel="preload"
            as="image"
            href="/Dress/Dress Grace/1.avif"
            type="image/avif"
          />
        </Head>
        <section
          className="section-container relative"
          aria-labelledby="hero-heading"
          role="banner"
        >
          <h1 id="hero-heading" className="sr-only">
            Explore Latore Atelier – Signature Fashion and Design
          </h1>
          <div className="flex flex-col gap-6 items-center">
  {/* Центр зображення */}
  <div className="relative">
    <Image
      src="/Dress/Dress Grace/1.avif"
      alt="Elegant design by Latore Atelier – Centerpiece"
      width={300}
      height={300}
      sizes="(max-width: 640px) 80vw, (max-width: 1200px) 40vw, 300px"
      className="w-[200px] h-[200px] rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
      priority
      decoding="async" // Додано асинхронне декодування для швидшого рендерингу
    />
    <h2
      className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] text-center text-3xl font-bold text-white bg-black bg-opacity-50 py-3 px-6 rounded-2xl whitespace-nowrap"
      aria-label="LATORE ATELIER Centerpiece"
    >
      LATORE ATELIER
    </h2>
  </div>

  {/* Зображення з боків */}
  <div className="flex gap-4 justify-between w-full px-4">
    {/* Ліве зображення */}
    <Image
      src="/Dress/Dress Grace/2.avif"
      alt="Latore Atelier Left Design Showcase"
      width={200}
      height={300}
      sizes="(max-width: 640px) 50vw, (max-width: 1200px) 30vw, 200px"
      
      className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
      loading="lazy" // Зображення завантажується ліниво, якщо не є пріоритетним
      decoding="async" // Асинхронне декодування для кращої продуктивності
    />
    {/* Праве зображення */}
    <Image
      src="/Dress/Dress Grace/4.avif"
      alt="Latore Atelier Signature Collection"
      width={200}
      height={300}
      sizes="(max-width: 640px) 50vw, (max-width: 1200px) 30vw, 200px"
      className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
      loading="lazy"
      decoding="async"
    />
  </div>
</div>
<header
  className="flex flex-col justify-center text-center space-y-2"
  style={{ minHeight: "150px" }} // Резервування простору для заголовка
>
  <p
    className="text-xl sm:text-2xl  md:text-4xl text-gray-700 dark:text-gray-300 mobile-320"
    style={{ minHeight: "40px" }} // Резервування для першого рядка
  >
    {menuItems[0] || "Experience the Difference"}
  </p>
  <p
    className="text-xl sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mobile-320"
    style={{ minHeight: "40px" }} // Резервування для другого рядка
  >
    {menuItems[1] || "Explore Our Signature Collections"}
  </p>
</header>

      </section>
      </>
    );
   
  }

  // **Десктопний вигляд (від 620px)**
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/Dress/Dress Grace/1.avif"
          type="image/avif"
        />
      </Head>
      <section
      className="section-container relative"
      aria-labelledby="hero-heading"
      role="banner"
    >
      <h1 id="hero-heading" className="sr-only">
        Explore Latore Atelier – Signature Fashion and Design
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
  {/* Ліва частина */}
  <div className="relative flex justify-end items-center px-4">
    <Image
      src="/Dress/Dress Grace/1.avif"
      alt="Left showcase of Latore Atelier's exclusive fashion design"
      width={400}
      height={600}
      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 400px"
      className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
      priority
    />
  </div>

  {/* Центр */}
  <div className="relative flex flex-col items-center justify-center">
    <div className="relative">
      <Image
        src="/Dress/Dress Grace/2.avif"
        alt="Center showcase of Latore Atelier's elegant design"
        width={400}
        height={400} // Пропорції збережено
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 400px"
        className="rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
        priority
      />
      {/* Текст поверх зображення */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-5xl font-bold text-white bg-black bg-opacity-50 rounded-full">
        <span className="block self-start ml-4">LATORE</span>
        <span className="block text-5xl font-bold self-end mr-8 mt-2">
          ATELIER
        </span>
      </div>
    </div>
  </div>

  {/* Права частина */}
  <div className="relative flex justify-start items-center px-4">
    <Image
      src="/Dress/Dress Grace/4.avif"
      alt="Showcase of Latore Atelier's signature collection"
      width={400}
      height={600}
      sizes="(max-width: 1200px) 50vw, 400px"
      className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
      loading="lazy"
    />
  </div>
</div>

      <header
  className="flex flex-col justify-center text-center space-y-2"
  style={{ minHeight: "150px" }} // Резервування простору для заголовка
>
  <p
    className="text-xs sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mobile-320"
    style={{ minHeight: "40px" }} // Резервування для першого рядка
  >
    {menuItems[0] || "Experience the Difference"}
  </p>
  <p
    className="text-xs sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mobile-320"
    style={{ minHeight: "40px" }} // Резервування для другого рядка
  >
    {menuItems[1] || "Explore Our Signature Collections"}
  </p>
</header>

      </section>
    </>
  );
}

