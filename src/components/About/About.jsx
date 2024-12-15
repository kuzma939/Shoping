import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#e6d1c1] dark:bg-[#2e1f14] section-container py-12">
      <h2 className="text-4xl text-[#4A3222] dark:text-[#f5e8d6] font-bold mb-10 text-left">
        About
      </h2>
      <div className="container mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="relative mb-8 group">
            <Image
              src="/2.jpg"
              alt="Main Image"
              width={300}
              height={400}
              className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="relative mt-4 flex flex-col items-center group">
            <Image
              src="/3.jpg"
              alt="Secondary Image"
              width={150}
              height={200}
              className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
        <div className="text-center md:text-left -mt-24 md:mt-0">
          <p className="text-xl text-[#4A3222] dark:text-[#f5e8d6] mb-8 leading-relaxed">
            <strong className="text-2xl font-extrabold">Our Story</strong> <br />
            Latore Atelier is your go-to online destination for premium fashion.
            We offer a curated selection of high-quality clothing and
            accessories, designed to elevate your wardrobe. Our mission is to
            provide customers with sophisticated and stylish pieces that
            reflect their unique personality and taste.
          </p>
          <button className="bg-[#4A3222] text-white py-2 px-6 rounded-full hover:bg-[#6E4C2E] dark:bg-[#f5e8d6] dark:text-[#4A3222] dark:hover:bg-[#d1b79e] transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
