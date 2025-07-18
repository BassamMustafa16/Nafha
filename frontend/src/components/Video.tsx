"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Video() {
  const [videoSrc, setVideoSrc] = useState("/videos/sec 01 video.mp4");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVideoSrc("/videos/sec-01-mobile.mp4");
      } else {
        setVideoSrc("/videos/sec 01 video.mp4");
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full aspect-[0.673] md:aspect-auto md:h-[100vh]">
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        className="w-full md:h-[100vh] object-cover"
      />
      <div className="flex flex-col gap-5 text-white w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-30 text-center items-center">
        <h1 className="md:text-2xl lg:text-4xl leading-7 md:leading-10 lg:leading-15">
          LUXURY IN EVERY STITCH.
          <br />
          BOLD IN EVERY LOOK. ICONIC BY DESIGN.
        </h1>
        <Link href="/collection">
          <button className="border border-white hover:bg-white hover:text-black py-2 md:py-3 px-3 md:px-10 md:text-xl w-fit transition-all duration-300 backdrop-blur-sm">
            DISCOVER MORE
          </button>
        </Link>
      </div>
    </section>
  );
}
