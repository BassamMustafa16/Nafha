import Image from "next/image";

export default function Grid() {
  const data = [
    {
      name: "Noir Reverie Gown",
      image: `/images/collection/Noir Reverie Gown.png`,
    },
    {
      name: "Emerald Enchantress Gown",
      image: "/images/collection/Emerald Enchantress Gown.png",
    },
    {
      name: "Ivory Muse Gown",
      image: "/images/collection/Ivory Muse Gown.png",
    },
    {
      name: "Golden Whimsy Off-Shoulder Gown",
      image: "/images/collection/Golden Whimsy Off-Shoulder Gown.png",
    },
    {
      name: "Emerald Allure Draped Gown",
      image: "/images/collection/Emerald Allure Draped Gown.png",
    },
    {
      name: "Satin Eclipse Gown",
      image: "/images/collection/Satin Eclipse Gown.png",
    },
    {
      name: "Sunlit Grace Draped Gown",
      image: "/images/collection/Sunlit Grace Draped Gown.png",
    },
    {
      name: "Sunlit Grace Draped",
      image: "/images/collection/Sunlit Grace Draped.png",
    },
  ];
  return (
    <section
      className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64
    w-full 
    grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
    >
      {data.map((dress) => (
        <div key={dress.name} className="relative rounded-md overflow-hidden">
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
      ))}
    </section>
  );
}
