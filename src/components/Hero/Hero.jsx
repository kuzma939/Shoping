
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-container w-full relative -top-8">
      <div className="grid grid-cols-3 gap-4 relative">
        {/* Left Image */}
        <div className="relative mt-4 flex flex-col items-center group">
          <Image
            src="/1.jpg"
            alt="Left Image"
            width={400}
            height={400}
            className="w-full sm:max-w-[400px] md:max-w-[500px] h-auto rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Center Title */}
        <div className="relative col-span-3 flex justify-center items-center z-10 h-[200px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide whitespace-nowrap text-center inline-block relative 
                         text-gray-900 dark:text-gray-100 
                         after:block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-1 after:bg-gray-800 dark:after:bg-gray-200">
            LATORE A
            <span className="relative z-10">TELIER</span>
            <span className="absolute top-[-160px]  right-[-100px] sm:top-[-100px] sm:right-[-80px] md:top-[-250px]  md:right-[-280px]  z-0 group ">
              <Image
                src="/10.jpg"
                alt="Right Image"
                width={350}
                height={350}
                className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[500px] h-auto  rounded-none object-cover aspect-square shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </span>
          </h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2">
        {/* Bottom Left Image */}
        <div className="relative mt-4 flex flex-col items-center group">
          <Image
            src="/5.jpg"
            alt="Bottom Left Image"
            width={400}
            height={400}
            className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[500px] h-auto rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        {/* Description */}
        <div className="flex flex-col justify-center text-center space-y-4">
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
            Discover your style with us.
          </p>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
            Explore the latest trends in fashion.
          </p>
        </div>
      </div>
    </section>
  );
}
