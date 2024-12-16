import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-container relative -top-8">
      <div className="grid grid-cols-3 gap-4 relative">
        {/* Left Image */}
        <div className="relative flex flex-col items-center mt-8 ml-16 group">
          <Image
            src=""
            alt="Left Image"
            width={400}
            height={400}
            className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Center Title */}
        <div className="relative col-span-3 flex justify-center items-center z-10 h-[200px]">
          <h1 className="text-6xl font-bold tracking-wide whitespace-nowrap text-center inline-block relative 
                         text-gray-900 dark:text-gray-100 
                         after:block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-1 after:bg-gray-800 dark:after:bg-gray-200">
            LATORE ATE
            <span className="relative z-10">LIER</span>
            <span className="absolute top-[-250px] right-[-280px] z-0 group">
              <Image
                src=""
                alt="Right Image"
                width={350}
                height={350}
                className="rounded-none object-cover aspect-square shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </span>
          </h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {/* Bottom Left Image */}
        <div className="relative mt-4 flex flex-col items-center group">
          <Image
            src=""
            alt="Bottom Left Image"
            width={400}
            height={400}
            className="rounded-none object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        {/* Description */}
        <div className="flex flex-col justify-center text-center space-y-4">
          <p className="text-2xl text-gray-700 dark:text-gray-300">
            Discover your style with us.
          </p>
          <p className="text-2xl text-gray-700 dark:text-gray-300">
            Explore the latest trends in fashion.
          </p>
        </div>
      </div>
    </section>
  );
}
