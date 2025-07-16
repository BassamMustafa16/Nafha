"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showNavs, setShowNavs] = useState(false);
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <nav
      className={`w-ful top-0 left-0 flex flex-col bg-transparent text-black z-10 py-5 items-center justify-center
        md:absolute md:w-fit md:left-1/2 md:-translate-x-1/2 md:px-10 md:flex-row md:text-white md:py-0
        lg:text-xl
        xl:gap-10 xl:px-20
        ${!isHomePage && "md:border-b"}`}
    >
      {/* Mobile Nav */}
      <div className="flex flex-row justify-between px-4 items-center w-full md:hidden">
        <Link href="/" className="w-[140]">
          <div className="relative w-full">
            <Image
              src="/logo black cut.png"
              alt="Logo"
              width={256}
              height={60}
              className="w-full h-auto"
            />
          </div>
        </Link>
        <button
          className="w-6 aspect-square"
          onClick={() => setShowNavs(!showNavs)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Rolling collapse wrapper */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out origin-top transform
          ${showNavs ? "max-h-[500px]" : "max-h-0"}
          md:max-h-none`}
      >
        {/* Desktop Nav */}
        <div className="flex flex-col md:flex-row gap-5 items-center py-5 md:py-0 xl:text-2xl">
          <Link href="/" className="hover:font-semibold">
            Home
          </Link>
          <Link href="/about" className="hover:font-semibold">
            About
          </Link>
          <Link href="/" className="hidden md:flex">
            <div className="md:w-[180px] lg:w-[256px]">
              <Image
                src="/logo.png"
                alt="Logo"
                width={256}
                height={60}
                className="w-full h-auto"
              />
            </div>
          </Link>
          <Link href="/collection" className="hover:font-semibold">
            Collection
          </Link>
          <Link href="/contact" className="hover:font-semibold">
            Contact&nbsp;Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
