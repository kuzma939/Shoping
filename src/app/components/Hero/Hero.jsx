import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import Head from "next/head";

const Hero = () => {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "hero");

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/Dress/Dress Grace/1.avif" type="image/avif" />
        <link rel="preload" as="image" href="/Dress/Dress Grace/2.avif" type="image/avif" />
        <link rel="preload" as="image" href="/Dress/Dress Grace/4.avif" type="image/avif" />
      </Head>

      <section
        className="relative flex flex-col justify-center items-center section-container"
        aria-labelledby="hero-heading"
        role="banner"
      >
        <h1 id="hero-heading" className="sr-only">
          Explore Latore Atelier – Signature Fashion and Design
        </h1>

        {/* Мобільна версія */}
        <div className="flex flex-col items-center gap-4 md:hidden">
          <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden">
            <Image
              src="/Dress/Dress Grace/1.avif"
              alt="Elegant design by Latore Atelier – Centerpiece"
              width={250}
              height={250}
              sizes="100vw"
              className="rounded-full object-cover shadow-lg block"
              priority
            />
          </div>
          <h2 className="text-center text-3xl font-bold text-white bg-black bg-opacity-50 py-2 px-6 rounded-lg mt-[-10px]">
            LATORE ATELIER
          </h2>
        </div>

        {/* Планшетна версія */}
        <div className="hidden md:flex md:flex-col gap-6 items-center lg:hidden">
          <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden">
            <Image
              src="/Dress/Dress Grace/1.avif"
              alt="Elegant design by Latore Atelier – Centerpiece"
              width={250}
              height={250}
              className="rounded-full object-cover shadow-lg block"
              priority
            />
          </div>
          <h2 className="text-center text-3xl font-bold text-white bg-black bg-opacity-50 py-2 px-6 rounded-lg mt-[-10px]">
            LATORE ATELIER
          </h2>
          <div className="flex gap-4 justify-between w-full px-4">
            <div className="w-[200px] h-[300px]">
              <Image
                src="/Dress/Dress Grace/2.avif"
                alt="Latore Atelier Left Design Showcase"
                width={200}
                height={300}
                className="rounded-lg object-cover shadow-lg block"
                loading="lazy"
              />
            </div>
            <div className="w-[200px] h-[300px]">
              <Image
                src="/Dress/Dress Grace/4.avif"
                alt="Latore Atelier Signature Collection"
                width={200}
                height={300}
                className="rounded-lg object-cover shadow-lg block"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Десктопна версія */}
        <div className="hidden lg:flex justify-between items-center gap-4">
          <div className="relative w-[300px] h-[400px]">
            <Image
              src="/Dress/Dress Grace/1.avif"
              alt="Left showcase of Latore Atelier's exclusive fashion design"
              width={300}
              height={400}
              className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
              priority
            />
          </div>
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden">
            <Image
              src="/Dress/Dress Grace/2.avif"
              alt="Center showcase of Latore Atelier's elegant design"
              width={300}
              height={300}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-bold text-white bg-black bg-opacity-50">
              <span className="block self-start ml-8">LATORE</span>
              <span className="block text-4xl font-bold self-end mr-8 mt-2">ATELIER</span>
            </div>
          </div>
          <div className="relative w-[300px] h-[400px]">
            <Image
              src="/Dress/Dress Grace/4.avif"
              alt="Right showcase of Latore Atelier's signature collection"
              width={300}
              height={400}
              className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400"
              priority
            />
          </div>
        </div>

        {/* Текстовий блок */}
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
