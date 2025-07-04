import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row gap-8 xl:gap-10 items-center justify-center lg:text-xl ">
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
