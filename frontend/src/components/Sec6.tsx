import Image from "next/image";
import Link from "next/link";

export default function Sec6() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-10 flex flex-row justify-between items-center">
      {/* Links */}
      <div className="flex flex-row gap-5">
        <Link href="\">Press Features</Link>
        <Link href="\">Terms & Policies</Link>
        <Link href="\">Location</Link>
      </div>

      {/* Icons */}
      <div className="flex flex-row gap-5">
        <Link href="\">
          <Image
            src="/icons/facebook.png"
            alt="Facebook"
            width={10}
            height={10}
          />
        </Link>
        <Link href="\">
          <Image
            src="/icons/instagram.png"
            alt="Instagram"
            width={23}
            height={6}
          />
        </Link>
        <Link href="\">
          <Image src="/icons/tiktok.png" alt="Tikotok" width={8} height={6} />
        </Link>
      </div>
    </div>
  );
}
