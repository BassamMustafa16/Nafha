'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Sec2() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when section is visible
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          // Calculate parallax offset based on section's position relative to viewport
          const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
          const parallaxOffset = scrollProgress * 200; // Adjust multiplier for speed
          setOffsetY(parallaxOffset);
        }
      }
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative text-white overflow-hidden">
      {/* Parallax Image */}
      <div className="relative w-screen h-[100vh]">
        <div
          className="absolute inset-0 w-full h-[130vh] -top-[15vh]" // Extra height and negative top for parallax effect
          style={{
            transform: `translateY(${offsetY}px)`,
            willChange: 'transform',
          }}
        >
          <Image
            src="/images/sec 02.png"
            alt="sec 02"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="absolute px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col items-center gap-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full z-10">
        <h1 className="text-4xl text-center font-light tracking-wide">
          DISCOVER CREATIONS THAT SPEAK POWER, <br />
          PRECISION, AND PURE INDIVIDUALITY.
        </h1>
        {/* Button */}
        <button className="border border-white hover:bg-white hover:text-black py-3 px-10 text-xl w-fit cursor-pointer transition-all duration-300 backdrop-blur-sm">
          DISCOVER THE COLLECTION
        </button>
      </div>
    </section>
  );
}