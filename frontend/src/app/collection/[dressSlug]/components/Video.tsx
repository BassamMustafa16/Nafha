"use client";
import Image from "next/image";
import { useRef, useState } from "react";

type Dress = {
  name: string;
};

export default function Video({ name }: Dress) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={`/products/${name}/video.mp4`}
        muted
        loop
        controls={playing}
        className="w-full max-h-screen aspect-[16/9] object-cover"
      />

      {/* Dark overlay behind the play button */}
      {!playing && (
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      )}

      {/* Play button */}
      {!playing && (
        <button
          className="w-20 lg:w-30 aspect-square absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer z-10"
          onClick={handlePlay}
          aria-label="Play video"
        >
          <Image
            src="/icons/play.png"
            alt="Play icon"
            width={216}
            height={216}
          />
        </button>
      )}
    </div>
  );
}
