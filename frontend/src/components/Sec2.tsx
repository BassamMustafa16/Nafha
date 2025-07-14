import Image from "next/image";

export default function Sec2() {
  return (
    <section
      className="sticky top-0 h-screen" // removed overflow-hidden
      style={{ zIndex: 1 }}
    >
      {/* Sticky Parallax Image */}
      <div className="w-full h-screen border-red">
        <div className="absolute inset-0 h-screen">
          <Image
            src="/images/sec 02.png"
            alt="sec 02"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
