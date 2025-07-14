"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showNavs, setShowNavs] = useState(false);

  return (
    <nav className="relative md:absolute top-0 left-0 flex flex-col md:flex-row w-full  xl:gap-10 items-center justify-center lg:text-xl bg-transparent text-black md:text-white z-10 py-5">
      {/* Mobile Nav */}
      <div className="flex flex-row justify-between px-4 items-center w-full md:hidden">
        <Link href="/" className="w-1/2">
          <div className="relative w-full aspect-[5.57]">
            <Image src="/logo black cut.png" alt="Logo" fill sizes="33vw" />
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
        <div className="flex flex-col gap-5 items-center py-5">
          <Link href="/" className="hover:font-semibold">
            Home
          </Link>
          <Link href="/" className="hover:font-semibold">
            About Us
          </Link>
          <Link href="/" className="hidden md:flex">
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
        </div>
      </div>
    </nav>
  );
}
