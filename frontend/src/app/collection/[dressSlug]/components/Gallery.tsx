// Unified Gallery Component - Works on all devices
"use client";
import Image from "next/image";
import { useState } from "react";

type Dress = {
  name: string;
};

export default function Gallery({ name }: Dress) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = ["01", "02", "03"];

  return (
    <section className="container mx-auto px-4 lg:px-8">
      {/* Mobile: Horizontal scroll */}
      <div className="lg:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative flex-none w-64 aspect-[3/4] cursor-pointer"
              onClick={() => setSelectedImage(`/products/${name}/${image}.jpg`)}
            >
              <Image
                src={`/products/${name}/${image}.jpg`}
                alt={`${name} image ${i + 1}`}
                fill
                sizes="256px"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        {images.map((image, i) => (
          <div
            key={i}
            className="relative aspect-[3/4] group cursor-pointer"
            onClick={() => setSelectedImage(`/products/${name}/${image}.jpg`)}
          >
            <Image
              src={`/products/${name}/${image}.jpg`}
              alt={`${name} image ${i + 1}`}
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={800}
              height={1200}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
