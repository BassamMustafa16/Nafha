import Image from "next/image";

export default function Sec1() {
  return (
    <section className="relative">
      {/* Image */}
      <div
        className="relative w-screen"
        style={{ height: "calc(100vh - 0px)" }}
      >
        <Image
          src="/images/sec 01.png"
          alt="sec 01"
          fill
          sizes="100vw"
          className="object-cover object-top-center"
        />
      </div>

      {/* Text Content */}
      <div className="absolute pr-4 md:pr-8 lg:pr-16 xl:pr-32 2xl:pr-64 flex flex-col gap-10 top-1/2 -translate-y-1/2 left-1/2">
        <h1 className="text-4xl">CRAFTED FOR ICONS <br/> MADE TO STAND ALONE</h1>
        <p className="text-xl">
          Nafha Thabet is a haute couture brand born from a deep reverence for
          bold femininity, sculptural elegance, and fearless self-expression.
        </p>
        <p className="text-xl">
          Each piece is a celebration of individuality, meticulously designed
          and hand-crafted to empower women to stand tall in their truth.
        </p>
        {/* Button */}
        <button className="border hover:font-semibold py-3 px-10 text-xl w-fit cursor-pointer">
          Read More
        </button>
      </div>
    </section>
  );
}
