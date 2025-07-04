import Image from "next/image";
import Link from "next/link";

export default function Sec5() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-white flex flex-row justify-between items-center">
      {/* Logo */}
      <div className="relative w-[25vw] h-[10vw]">
        <Image
          src="/full-logo.png"
          alt="Full Logo"
          fill
          sizes="30vw"
          className="object-cover"
        />
      </div>

      {/* Links */}
      <div className="flex gap-6 lg:text-xl">
        <Link href="/" className="hover:font-semibold">About Us</Link>
        <Link href="/" className="hover:font-semibold">Collection</Link>
        <Link href="/" className="hover:font-semibold">Contact Us</Link>
      </div>
    </div>
  );
}
