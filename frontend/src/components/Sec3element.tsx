"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type ImageName = {
  imageName: string;
  slug: string;
};

export default function Sec3Element({ imageName, slug }: ImageName) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay video on hover
  useEffect(() => {
    if (hovered && videoRef.current) {
      videoRef.current.currentTime = 0; // restart video
      videoRef.current.play();
    } else if (!hovered && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered]);

  return (
    <div
      className="relative group cursor-pointer w-full max-h-screen aspect-[0.6]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Always render image */}
      <Image
        src={`/images/${imageName}`}
        alt={imageName}
        fill
        sizes="100vw"
        className="object-cover object-top-center transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      />

      {/* Preloaded hidden video, shown on hover */}
      <video
        ref={videoRef}
        src={`/videos/${imageName.replace(".png", ".mp4")}`}
        muted
        loop
        preload="auto"
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      />

      {/* Button & overlay */}
      <Link href={`/collection/${slug}`}>
        <button className="border border-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-white md:text-xl w-1/2 px-3 py-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hover:bg-white hover:text-black backdrop-blur-sm">
          Discover More
        </button>
      </Link>
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
    </div>
  );
}
