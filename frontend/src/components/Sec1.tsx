import Link from "next/link";

export default function Sec1() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col items-center justify-center py-10 md:py-20">
      <div className="flex flex-col gap-5 md:gap-10 max-w-5xl">
        {/* Text Content */}
        <h2 className="text-xl md:text-2xl lg:text-4xl w-full">
          CRAFTED FOR ICONS <br /> MADE TO STAND ALONE
        </h2>
        <p className="lg:text-xl">
          Nafha Thabet is a haute couture brand born from a deep reverence for
          bold femininity, sculptural elegance, and fearless self-expression.
        </p>
        <p className="lg:text-xl">
          Each piece is a celebration of individuality, meticulously designed
          and hand-crafted to empower women to stand tall in their truth.
        </p>
        {/* Button */}
        <Link href="/about">
          <button className="border py-3 px-10 lg:text-xl w-fit hover:bg-black hover:text-white transition-all duration-300">
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
}
