import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-3 items-center gap-4">
        {/* Left Image */}
          <div className="relative flex flex-col">
                    <Image
                      src="/1.jpg" 
                      alt="Secondary Image"
                      width={350}
                      height={250}
                      className="rounded-lg object-cover  shadow-2xl shadow-black"
                    />
                  </div>

        {/* Center Title */}
        <div className="relative col-span-1 z-10">
          <h1 className="text-6xl font-bold tracking-wide whitespace-nowrap text-center inline-block max-w-xs md:max-w-md after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black">
            LATORE ATELIER
          </h1>
        </div>

        {/* Right Image */}
        <div className="relative mt-4 flex flex-col items-center ">
                    <Image
                      src="/7.jpg" 
                      alt="Secondary Image"
                      width={400}
                      height={300}
                      className="rounded-lg object-cover shadow-2xl shadow-black"
                    />
                  </div>
      </div>
      
      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {/* Bottom Left Image */}
        <div className="relative mt-4 flex flex-col items-center ">
                    <Image
                      src="/5.jpg" 
                      alt="Secondary Image"
                      width={800}
                      height={600}
                      className="rounded-lg object-cover shadow-2xl shadow-black"
                    />
                  </div>

        {/* Description */}
        <div className="flex flex-col justify-center text-center space-y-4">
          <p className="text-lg text-gray-700">Discover your style with us.</p>
          <p className="text-lg text-gray-700">
            Explore the latest trends in fashion.
          </p>
        </div>
      </div>
    </section>
  );
}
