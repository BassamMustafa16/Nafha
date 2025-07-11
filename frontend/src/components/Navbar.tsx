import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 flex flex-row w-full gap-8 xl:gap-10 items-center justify-center lg:text-xl bg-transparent text-white z-10">
      <Link href="/" className="hover:font-semibold">
        Home
      </Link>
      <Link href="/" className="hover:font-semibold">
        About Us
      </Link>
      <Link href="/" className="hover:font-semibold">
        <Image
          src="/logo.png"
          alt="Logo"
          width={256}
          height={60}
          style={{ height: "auto" }}
        />
      </Link>

      <Link href="/" className="hover:font-semibold">
        Collection
      </Link>
      <Link href="/" className="hover:font-semibold">
        Contact Us
      </Link>
    </nav>
  );
}
