'use client';

import { useEffect, useRef, useState } from "react";

export default function Sec2Text() {
  const [opacity, setOpacity] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const elementCenter = rect.top + rect.height / 2;
        const progress = 1 - (elementCenter / windowHeight);
        // progress: 0 = bottom, 0.5 = middle, 1 = top

        let localOpacity = 1 - Math.abs(progress - 0.5) * 2;
        localOpacity = Math.max(0, Math.min(1, localOpacity));

        setOpacity(localOpacity);
      }
    };

    handleScroll(); 
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={textRef}
      className="flex flex-col items-center gap-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 z-10 h-screen text-white"
      style={{
        opacity,
        transition: 'opacity 0.1s',
      }}
    >
      <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-light tracking-wide">
        DISCOVER CREATIONS THAT SPEAK POWER, <br />
        PRECISION, AND PURE INDIVIDUALITY.
      </h1>
      <button className="border border-white hover:bg-white hover:text-black py-3 px-5 md:px-10 md:text-xl w-fit transition-all duration-300 backdrop-blur-sm">
        DISCOVER THE COLLECTION
      </button>
    </div>
  );
}
