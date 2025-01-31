import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import Head from "next/head";
import { useViewportSize } from "../../hooks/useViewportSizeHero";

const Hero = () => {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "hero");
  const viewportSize = useViewportSize();

  return (
    <>
      <Head>
        {/* Preload images */}
        <link rel="preload" as="image" href="/Dress/Dress Grace/1.avif" type="image/avif" />
        <link rel="preload" as="image" href="/Dress/Dress Grace/2.avif" type="image/avif" />
        <link rel="preload" as="image" href="/Dress/Dress Grace/4.avif" type="image/avif" />
      </Head>

      <section
        className=" relative flex flex-col justify-center items-center section-container"
        aria-labelledby="hero-heading"
        role="banner"
      >
        <h1 id="hero-heading" className="sr-only">
          Explore Latore Atelier – Signature Fashion and Design
        </h1>

        {viewportSize === "mobile" ? (
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-[250px] h-[250px]">
              <Image
                src="/Dress/Dress Grace/1.avif"
                alt="Elegant design by Latore Atelier – Centerpiece"
                layout="intrinsic"
                width={250}
                height={250}
                style={{ aspectRatio: "1 / 1" }}
                className="rounded-full object-cover shadow-lg block"
                priority
              />
            </div>
          
              <h2 className="text-center text-3xl font-bold text-white bg-black bg-opacity-50 py-2 px-6 rounded-lg mt-[-10px]">
              LATORE ATELIER
            </h2>
          </div>
        ) : viewportSize === "tablet" ? (
          <div className="flex flex-col gap-6 items-center">
            <div className="relative w-[250px] h-[250px]">
              <Image
                src="/Dress/Dress Grace/1.avif"
                alt="Elegant design by Latore Atelier – Centerpiece"
                layout="intrinsic"
                width={250}
                height={250}
                style={{ aspectRatio: "1 / 1" }}
                className="rounded-full object-cover shadow-lg block"
                priority
              />
            </div>
            <h2 className="text-center text-3xl font-bold text-white bg-black bg-opacity-50 py-2 px-6 rounded-lg mt-[-10px]">
              LATORE ATELIER
            </h2>
            <div className="flex gap-4 justify-between w-full px-4">
              <Image
                src="/Dress/Dress Grace/2.avif"
                alt="Latore Atelier Left Design Showcase"
                layout="intrinsic"
                width={200}
                height={300}
                className="rounded-lg object-cover shadow-lg block"
                loading="lazy"
              />
              <Image
                src="/Dress/Dress Grace/4.avif"
                alt="Latore Atelier Signature Collection"
                layout="intrinsic"
                width={200}
                height={300}
                className="rounded-lg object-cover shadow-lg block"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center gap-8">
            <div className="relative flex justify-center items-center">
              <Image
                src="/Dress/Dress Grace/1.avif"
                alt="Left showcase of Latore Atelier's exclusive fashion design"
                layout="intrinsic"
                width={300}
                height={400}
                className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
                priority
              />
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src="/Dress/Dress Grace/2.avif"
                  alt="Center showcase of Latore Atelier's elegant design"
                  layout="intrinsic"
                  width={300}
                  height={300}
                  style={{ aspectRatio: "1 / 1" }}
                  className="rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
                  priority
                />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-bold text-white bg-black bg-opacity-50 rounded-full">
      <span className="block self-start ml-8">LATORE</span>
      <span className="block text-4xl font-bold self-end mr-8 mt-2">ATELIER</span>
    </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <Image
                src="/Dress/Dress Grace/4.avif"
                alt="Right showcase of Latore Atelier's signature collection"
                layout="intrinsic"
                width={300}
                height={400}
                className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
                priority
              />
            </div>
          </div>
        )}

        <header className="flex flex-col mt-12 justify-center text-center space-y-2">
          <p className="text-xl sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300" style={{ minHeight: "1.5em" }}>
            {menuItems[0] || "Experience the Difference"}
          </p>
          <p className="text-xl sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300" style={{ minHeight: "1.5em" }}>
            {menuItems[1] || "Explore Our Signature Collections"}
          </p>
        </header>
      </section>
    </>
  );
};

export default Hero;

{/*
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import { useViewportSize } from "../../hooks/useViewportSizeHero";
import Head from "next/head";

const Hero = () => {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "hero");
  const viewportSize = useViewportSize();

  return (
    <>
      <Head>
       
        <link rel="preload" as="image" href="/Dress/Dress Grace/1.avif" type="image/avif" />
        <link rel="preload" as="image" href="/Dress/Dress Grace/2.avif" type="image/avif" />
        <link rel="preload" as="image" href="/Dress/Dress Grace/4.avif" type="image/avif" />
      </Head>

      <section
        className="mt-8 relative"
        aria-labelledby="hero-heading"
        role="banner"
        style={{
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 id="hero-heading" className="sr-only">
          Explore Latore Atelier – Signature Fashion and Design
        </h1>

        {viewportSize === "mobile" ? (
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/Dress/Dress Grace/1.avif"
              alt="Elegant design by Latore Atelier – Centerpiece"
              width={200}
              height={200}
              sizes="(max-width: 450px) 100vw, 200px"
              className="rounded-full object-cover shadow-lg block"
              priority
              style={{ aspectRatio: "1 / 1" }}
            />
            <div
              className="w-full flex justify-center relative"
              style={{ marginTop: "-40px", minHeight: "3em" }}
            >
              <h2
                className="text-center text-3xl font-bold text-white bg-black bg-opacity-50 py-2 px-6 rounded-lg"
                style={{ minHeight: "2em" }}
              >
                LATORE ATELIER
              </h2>
            </div>
          </div>
        ) : viewportSize === "tablet" ? (
          <div className="flex flex-col gap-6 items-center">
            <div className="relative">
              <Image
                src="/Dress/Dress Grace/1.avif"
                alt="Elegant design by Latore Atelier – Centerpiece"
                width={250}
                height={250}
                sizes="(max-width: 768px) 100vw, 300px"
                className="rounded-full object-cover shadow-lg block"
                priority
                style={{ aspectRatio: "1 / 1" }}
              />
              <h2
                className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] text-center text-3xl font-bold text-white bg-black bg-opacity-50 py-3 px-6 rounded-2xl whitespace-nowrap"
                style={{ minHeight: "2em" }}
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
                sizes="(max-width: 768px) 50vw, 200px"
                className="rounded-lg object-cover shadow-lg block"
                loading="lazy"
                style={{ aspectRatio: "2 / 3" }}
              />
              <Image
                src="/Dress/Dress Grace/4.avif"
                alt="Latore Atelier Signature Collection"
                width={200}
                height={300}
                sizes="(max-width: 768px) 50vw, 200px"
                className="rounded-lg object-cover shadow-lg block"
                loading="lazy"
                style={{ aspectRatio: "2 / 3" }}
              />
            </div>
          </div>
        ) : (

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
          <div className="relative flex justify-end items-center px-4">
            <Image
              src="/Dress/Dress Grace/1.avif"
              alt="Left showcase of Latore Atelier's exclusive fashion design"
              width={300}
              height={600}
              sizes="(min-width: 1600px) 50vw, (min-width: 1024px) 33vw, 300px"
              className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
              priority
              style={{ aspectRatio: "2 / 3"}}
            />
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                src="/Dress/Dress Grace/2.avif"
                alt="Center showcase of Latore Atelier's elegant design"
                width={400}
                height={400}
                sizes="(min-width: 1024px) 33vw, 350px"
                className="rounded-full object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
                priority
                style={{ aspectRatio: "1 / 1"}}
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
              width={300}
              height={600}
              sizes="(min-width: 1600px) 50vw, (min-width: 1024px) 33vw, 300px"
              className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
              priority
              style={{ aspectRatio: "2 / 3"}}
            />
          </div>
        </div>
        )}
<header
          className="flex flex-col mt-12 justify-center text-center space-y-2 min-h-[150px]"
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
};

export default Hero;
*/}