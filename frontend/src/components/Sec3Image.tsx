"use client";
import { useState } from "react";
import Image from "next/image";

type ImageName = {
  imageName: string;
};

export default function Sec3Image({ imageName }: ImageName) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-screen group cursor-pointer"
      style={{ height: "100vh" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <video
          src={`/videos/${imageName.replace(".png", ".mp4")}`}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      ) : (
        <Image
          src={`/images/${imageName}`}
          alt={imageName}
          fill
          sizes="33.33vw"
          className="object-cover object-top-center"
        />
      )}

      <button className="border opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xl w-1/2 px-5 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
        Discover More
      </button>

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
    </div>
  );
}
