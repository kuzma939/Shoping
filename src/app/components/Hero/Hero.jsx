import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import { useViewportSize } from "../../hooks/useViewportSizeHero";
import Head from "next/head";

const Hero = () => {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "hero");
  const viewportSize = useViewportSize();

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
            <div className="relative">
              <Image
                src="/Dress/Dress Grace/1.avif"
                alt="Elegant design by Latore Atelier – Centerpiece"
                width={300}
                height={300}
                sizes="(max-width: 450px) 100vw, 300px"
                className="w-[200px] h-[200px] rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
                priority
                style={{ aspectRatio: "1 / 1" }}
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
            <p className="text-xl sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300" style={{ minHeight: "2em" }}>
              {menuItems[0] || "Experience the Difference"}
            </p>
            <p className="text-xl sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300" style={{ minHeight: "2em" }}>
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
            <div className="relative">
              <Image
                src="/Dress/Dress Grace/1.avif"
                alt="Elegant design by Latore Atelier – Centerpiece"
                width={300}
                height={300}
                sizes="(max-width: 640px) 100vw, 300px"
                className="w-[200px] h-[200px] rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
                priority
                style={{ aspectRatio: "1 / 1" }}
              />
              <h2
                className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] text-center text-3xl font-bold text-white bg-black bg-opacity-50 py-3 px-6 rounded-2xl whitespace-nowrap"
                aria-label="LATORE ATELIER Centerpiece"
              >
                LATORE ATELIER
              </h2>
            </div>

            <div className="flex gap-4 justify-between w-full px-4">
              <Image
                src="/Dress/Dress Grace/2.avif"
                alt="Latore Atelier Left Design Showcase"
                width={200}
                height={300}
                sizes="(max-width: 640px) 50vw, 200px"
                className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
                loading="lazy"
                style={{ aspectRatio: "2 / 3" }}
              />
              <Image
                src="/Dress/Dress Grace/4.avif"
                alt="Latore Atelier Signature Collection"
                width={200}
                height={300}
                sizes="(max-width: 640px) 50vw, 200px"
                className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
                style={{ aspectRatio: "2 / 3" }}
              />
            </div>
          </div>
          <header
            className="flex flex-col justify-center text-center space-y-2 min-h-[150px]"
          >
            <p
              className="text-xl sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300"
              style={{ minHeight: "2em" }}
            >
              {menuItems[0] || "Experience the Difference"}
            </p>
            <p
              className="text-xl sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300"
              style={{ minHeight: "2em" }}
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
          <div className="relative flex justify-end items-center px-4">
            <Image
              src="/Dress/Dress Grace/1.avif"
              alt="Left showcase of Latore Atelier's exclusive fashion design"
              width={400}
              height={600}
              sizes="(min-width: 1024px) 33vw, 400px"
              className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
              priority
              style={{ aspectRatio: "2 / 3" }}
            />
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                src="/Dress/Dress Grace/2.avif"
                alt="Center showcase of Latore Atelier's elegant design"
                width={400}
                height={400}
                sizes="(min-width: 1024px) 33vw, 400px"
                className="rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
                priority
                style={{ aspectRatio: "1 / 1" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-5xl font-bold text-white bg-black bg-opacity-50 rounded-full">
                <span className="block self-start ml-4">LATORE</span>
                <span className="block text-5xl font-bold self-end mr-8 mt-2">
                  ATELIER
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-start items-center px-4">
            <Image
              src="/Dress/Dress Grace/4.avif"
              alt="Showcase of Latore Atelier's signature collection"
              width={400}
              height={600}
              sizes="(min-width: 1024px) 33vw, 400px"
              className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
              priority
              style={{ aspectRatio: "2 / 3" }}
            />
          </div>
        </div>

        <header
          className="flex flex-col justify-center text-center space-y-2 min-h-[150px]"
        >
          <p
            className="text-xs sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300"
            style={{ minHeight: "2em" }}
          >
            {menuItems[0] || "Experience the Difference"}
          </p>
          <p
            className="text-xs sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300"
            style={{ minHeight: "2em" }}
          >
            {menuItems[1] || "Explore Our Signature Collections"}
          </p>
        </header>
      </section>
    </>
  );
};

export default Hero;
