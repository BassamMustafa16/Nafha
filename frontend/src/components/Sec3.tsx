import Image from "next/image";
export default function Sec3() {
  return (
    <div className="flex flex-row">
      {/* Image */}
      <div
        className="relative w-screen group cursor-pointer"
        style={{ height: "calc(100vh - 0px)" }}
      >
        <Image
          src="/images/sec 03 01.png"
          alt="sec 03 01.png"
          fill
          sizes="33.33vw"
          className="object-cover object-top-center"
        />
        <button className="border opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xl w-1/2 px-5 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
          Discover More
        </button>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      </div>
      {/* Image */}
      <div
        className="relative w-screen group cursor-pointer"
        style={{ height: "calc(100vh - 0px)" }}
      >
        <Image
          src="/images/sec 03 02.png"
          alt="sec 03 02.png"
          fill
          sizes="33.33vw"
          className="object-cover object-top-center"
        />
        <button className="border opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xl w-1/2 px-5 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
          Discover More
        </button>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      </div>
      {/* Image */}
      <div
        className="relative w-screen group cursor-pointer"
        style={{ height: "calc(100vh - 0px)" }}
      >
        <Image
          src="/images/sec 03 03.png"
          alt="sec 03 03.png"
          fill
          sizes="33.33vw"
          className="object-cover object-top-center"
        />
        <button className="border opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xl w-1/2 px-5 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
          Discover More
        </button>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      </div>
    </div>
  );
}
