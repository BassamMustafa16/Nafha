import Image from "next/image";

export default function Sec4() {
  return (
    <section className="relative z-20">
      {/* Image */}
      <div
        className="relative w-screen"
        style={{ height: "calc(100vh - 0px)" }}
      >
        <Image
          src="/images/last sec.png"
          alt="last sec"
          fill
          sizes="100vw"
          className="object-cover object-top-center"
        />
      </div>

      {/* Text Content */}
      <div className="absolute pr-4 md:pr-8 lg:pr-16 xl:pr-32 2xl:pr-64 flex flex-col gap-10 top-1/2 -translate-y-1/2 left-1/2">
        <h1 className="text-4xl">THE ARCHIVE</h1>
        <p className="text-xl">
          A curated showcase of couture and ready-to-wear creations. Every
          design tells a story of precision, emotion, and elevated
          individuality.
        </p>

        {/* Button */}
        <button className="border hover:font-semibold py-3 px-10 text-xl w-fit cursor-pointer">
          Discover More
        </button>
      </div>
    </section>
  );
}
