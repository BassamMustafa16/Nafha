import Image from "next/image";
import Link from "next/link";

export default function Sec4() {
  return (
    <section className="md:relative bg-white z-20">
      {/* Image */}
      <div className="relative w-[full] aspect-[0.562] md:aspect-[1.78]">
        <Image
          src="/images/last sec mobile.png"
          alt="last sec"
          fill
          sizes="100vw"
          className="object-cover md:hidden object-top-center"
        />
        <Image
          src="/images/last sec.png"
          alt="last sec"
          fill
          sizes="100vw"
          className="object-cover max-md:hidden object-top-center"
        />
      </div>

      {/* Text Content */}
      <div
        className="md:absolute px-4 md:pl-0 md:pr-8 lg:pr-16 xl:pr-32 2xl:pr-64 flex flex-col gap-5 md:gap-10 md:top-1/2 md:-translate-y-1/2 md:left-1/2 py-10 md:py-0 bg-[url('/images/last-sec-background.png')] bg-cover bg-center bg-no-repeat
"
      >
        <h2 className="text-xl md:text-2xl lg:text-4xl">THE ARCHIVE</h2>
        <p className="lg:text-xl">
          A curated showcase of couture and ready-to-wear creations. Every
          design tells a story of precision, emotion, and elevated
          individuality.
        </p>

        {/* Button */}
        <Link href="/collection">
          <button className="border py-3 px-5 md:px-10 md:text-xl w-fit hover:bg-black hover:text-white transition-all duration-300">
            Discover More
          </button>
        </Link>
      </div>
    </section>
  );
}
