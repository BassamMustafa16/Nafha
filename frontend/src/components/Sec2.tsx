import Image from "next/image";
export default function Sec2() {
  return (
    <section className="relative text-white">
      {/* Image */}
      <div className="relative w-screen h-[100vh]">
        <Image
          src="/images/sec 02.png"
          alt="sec 02"
          fill
          sizes="100vw"
          className="object-cover object-top-center"
        />
      </div>

      {/* Text Content */}
      <div className="absolute px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col items-center gap-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
        <h1 className="text-4xl text-center">
          DISCOVER CREATIONS THAT SPEAK POWER, <br />
          PRECISION, AND PURE INDIVIDUALITY.
        </h1>
        {/* Button */}
        <button className="border-t border-b hover:font-semibold py-3 px-10 text-xl w-fit cursor-pointer">
          DISCOVER THE COLLECTION
        </button>
      </div>
    </section>
  );
}
