import Image from "next/image";

export default function Sec2() {
  return (
    <section className="relative h-screen mt-10">
      {/* Sticky Parallax Image */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/sec 02.png"
          alt="sec 02"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full flex flex-col gap-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 z-10 items-center text-white">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-light tracking-wide">
          DISCOVER CREATIONS THAT SPEAK POWER, <br />
          PRECISION, AND PURE INDIVIDUALITY.
        </h1>
        <button className="border border-white hover:bg-white hover:text-black py-3 px-5 md:px-10 md:text-xl w-fit transition-all duration-300 backdrop-blur-sm">
          DISCOVER THE COLLECTION
        </button>
      </div>
    </section>
  );
}
