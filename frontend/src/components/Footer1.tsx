import Image from "next/image";
import Link from "next/link";

export default function Footer1() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-white flex flex-col gap-10 py-10 ">
      {/* Logo */}
      <div className="relative w-[50vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw] aspect-[5.247]">
        <Image
          src="/full-logo.png"
          alt="Full Logo"
          fill
          sizes="70vw"
          className="object-contain"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 text-sm md:text-base xl:text-lg ">
        <p className="max-w-sm xl:max-w-md">
          Natha Thabet is a haute couture brand born from a deep reverence for
          bold femininity, sculptural elegance, and fearless self-expression.{" "}
        </p>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-15 ">
          <div className="flex flex-col gap-3 ">
            <h3 className="font-semibold mb-2">Site Map</h3>
            <Link href="/" className="hover:font-semibold">
              About Us
            </Link>
            <Link href="/" className="hover:font-semibold">
              Collection
            </Link>
            <Link href="/" className="hover:font-semibold">
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-2">Policies</h3>
            <Link href="/" className="hover:font-semibold">
              Press Features
            </Link>
            <Link href="/" className="hover:font-semibold">
              Terms & Policies
            </Link>
            <Link href="/" className="hover:font-semibold">
              Location
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-2">Social media</h3>
            <Link href="/" className="hover:font-semibold">
              Facebook
            </Link>
            <Link href="/" className="hover:font-semibold">
              Instagram
            </Link>
            <Link href="/" className="hover:font-semibold">
              Snapchat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
