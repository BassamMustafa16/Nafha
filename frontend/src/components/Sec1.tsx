export default function Sec1() {
  return (
    <section className="px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-128 h-[100vh] flex flex-col gap-10 justify-center">
      {/* Text Content */}
      <h1 className="text-4xl w-full">
        CRAFTED FOR ICONS <br /> MADE TO STAND ALONE
      </h1>
      <p className="text-xl">
        Nafha Thabet is a haute couture brand born from a deep reverence for
        bold femininity, sculptural elegance, and fearless self-expression.
      </p>
      <p className="text-xl">
        Each piece is a celebration of individuality, meticulously designed and
        hand-crafted to empower women to stand tall in their truth.
      </p>
      {/* Button */}
      <button className="border-l border-r hover:font-semibold py-3 px-10 text-xl w-fit cursor-pointer">
        Read More
      </button>
    </section>
  );
}
