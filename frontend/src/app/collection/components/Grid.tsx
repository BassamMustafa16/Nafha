import Image from "next/image";
import Link from "next/link";
import { data } from "@/app/constants/dressesData";

export default function Grid() {
  return (
    <section
      className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64
    w-full 
    grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
    >
      {data.map((dress) => (
        <Link key={dress.name} href={`/collection/${dress.slug}`}>
          <div className="relative rounded-md overflow-hidden">
            {/* Image */}
            <div className="">
              <Image
                src={dress.image}
                alt={dress.name}
                width={424}
                height={614}
              />
            </div>

            {/* Name */}
            <div className="absolute lg:text-lg xl:text-xl text-white w-full text-center top-13/16 px-3 left-1/2 -translate-x-1/2">
              <p>{dress.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
