import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row gap-5 items-center justify-center lg:text-xl ">
      <Link href="/">Home</Link>
      <Link href="/">About Us</Link>
      <Link href="/" className="">
        <div className="">
          <Image src="/logo.png" alt="Logo" width={256} height={60} />
        </div>
      </Link>
      <Link href="/">Collection</Link>
      <Link href="/">Contact Us</Link>
    </nav>
  );
}
