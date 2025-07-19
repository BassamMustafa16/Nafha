// Improved Video Component with better mobile handling
"use client";
import Image from "next/image";
import { useRef, useState } from "react";

type Dress = {
  name: string;
};

export default function Video({ name }: Dress) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <section className="container mx-auto px-4 lg:px-8">
      <div className="relative aspect-video lg:aspect-[16/10] bg-gray-100 overflow-hidden">
        <video
          ref={videoRef}
          src={`/products/${name}/video.mp4`}
          muted
          loop
          controls={playing}
          onLoadedData={handleLoadedData}
          className="w-full h-full object-cover"
          poster={`/products/${name}/video-poster.jpg`} // Add poster image
        />

        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-500">Loading...</div>
          </div>
        )}

        {/* Overlay and play button */}
        {!playing && !isLoading && (
          <>
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" />
            <button
              className="absolute inset-0 flex items-center justify-center group"
              onClick={handlePlay}
              aria-label="Play video"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                <Image
                  src="/icons/play.png"
                  alt="Play"
                  width={32}
                  height={32}
                  className="ml-1" // Slight offset to center the play icon visually
                />
              </div>
            </button>
          </>
        )}
      </div>
    </section>
  );
}
