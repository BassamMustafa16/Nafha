// Improved Sec1 Component - Better responsive design
import Image from "next/image";
import Link from "next/link";

type Dress = {
  name: string;
  description?: string;
  slug: string;
};

export default function Sec1({ name, description, slug }: Dress) {
  return (
    <section className="mx-auto px-4 lg:px-0 lg:pl-8 xl:pl-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-0 lg:pt-8">
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-wide">
              {name}
            </h1>

            {description && (
              <div className="space-y-4 text-gray-600">
                {description.split("\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg lg:text-xl leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link href={`/${slug}`}>
            <button className="group border border-gray-900 px-8 py-4 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wider transition-all duration-300 hover:bg-gray-900 hover:text-white">
              <span className="relative">
                Request Dress
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[3/4] lg:aspect-[4/5] self-start">
          <Image
            src={`/products/${name}/hero.png`}
            alt={`${name} hero image`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
