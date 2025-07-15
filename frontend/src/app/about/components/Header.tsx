import Image from "next/image";

export default function Header() {
  return (
    <div className="relative">
      {/* Image */}
      <div className="relative w-full aspect-[1.5] md:aspect-[2] lg:aspect-[2.5] xl:aspect-[2.74]">
        <Image
          src="/images/about-header.png"
          alt="Header"
          fill
          sizes="100vw"
          className="object-cover object-left-top"
        />
      </div>

      {/* Text */}
      <div
        className="
          absolute inset-0 md:left-0 md:right-0 
          md:top-[77px] 
          lg:top-[110px] 
          md:h-[calc(100%-77px)] 
          lg:h-[calc(100%-110px)] 
          flex flex-col items-center justify-center 
          text-white z-10
          font-extralight
        "
      >
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl">ABOUT US</h1>
        <p className="lg:text-lg xl:text-2xl">Crafted for Icons Made to Stand Alone</p>
      </div>

      {/* Color overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
}
