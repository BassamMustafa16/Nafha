import Image from "next/image";
type Dress = {
  name: string;
  description?: string;
};
export default function Sec1({ name, description }: Dress) {
  return (
    <div className="flex flex-col md:flex-row gap-10 ">
      {/* Text */}
      <section className="flex flex-col gap-5 xl:gap-10 justify-center px-4 md:px-8 lg:px-16 xl:pl-32 2xl:pl-64 mt-10 md:mt-0">
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
      <div className="w-full h-auto max-h-screen">
        <Image
          src={`/products/${name}/hero.png`}
          alt="Hero Image"
          width={756}
          height={1133}
          className="w-full h-auto object-contain object-bottom"
        />
      </div>
    </div>
  );
}
