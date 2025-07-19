import Image from "next/image";
type Dress = {
  name: string;
  description?: string;
};
export default function Sec1({ name, description }: Dress) {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-fit max-h-screen gap-10 md:gap-0">
      {/* Text */}
      <section className="flex flex-col gap-5 xl:gap-8 justify-center px-4 md:px-8 lg:px-16 xl:pl-32 2xl:pl-64 md:py-10 h-fit flex-1 ">
        <h1 className="text-xl lg:text-3xl xl:text-4xl">{name}</h1>
        {description?.split("\n").map((paragraph, i) => (
          <p key={i} className="text-sm lg:text-lg xl:text-2xl">
            {paragraph}
          </p>
        ))}

        {/* Button */}
        <button className="border py-3 px-5 text-sm lg:text-lg xl:text-2xl w-fit hover:bg-black hover:text-white transition-all duration-300">
          Request Dress
        </button>
      </section>

      {/* Image */}
      <div className="w-full md:aspect-[0.75] lg:aspect-[0.8] xl:aspect-[0.85] 2xl:aspect-[0.9] max-h-screen flex-1">
        <Image
          src={`/products/${name}/hero.png`}
          alt="Hero Image"
          width={1200}
          height={1200}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
