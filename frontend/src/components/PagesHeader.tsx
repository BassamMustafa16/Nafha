import Image from "next/image";
type PagesHeaderProps = {
  image: string;
  heading: string;
  text: string;
};
export default function PagesHeader({
  image,
  heading,
  text,
}: PagesHeaderProps) {
  return (
    <header className="relative">
      {/* Image */}
      <div className="relative w-full aspect-[1.5] md:aspect-[2] lg:aspect-[2.5] xl:aspect-[2.74]">
        <Image
          src={`/${image}.png`}
          alt="Nafha Thabet brand header background"
          fill
          sizes="100vw"
          className="object-cover object-center"
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
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-4xl">
          {heading}
        </h2>
        <p className="lg:text-lg xl:text-2xl text-center">{text}</p>
      </div>

      {/* Color overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </header>
  );
}
