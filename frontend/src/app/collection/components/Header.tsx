import Image from "next/image";

export default function Header() {
  return (
    <div className="relative">
      {/* Image */}
      <div className="relative w-full aspect-[1.5] md:aspect-[2] lg:aspect-[2.5] xl:aspect-[2.74]">
        <Image
          src="/images/collections-header.png"
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
          flex flex-col items-center gap-1 justify-center 
          text-white z-10
          font-light
          md:top-[77px] 
          md:h-[calc(100%-77px)] 
          md:gap-2
          lg:top-[110px] 
          lg:h-[calc(100%-110px)] 
        "
      >
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl">
          COLLECTIONS
        </h1>
        <p className="lg:text-lg xl:text-2xl">
          The Archive
        </p>
      </div>

      {/* Color overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
}
