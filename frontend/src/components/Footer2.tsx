import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer2() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-10 flex flex-row justify-between items-center">
      {/* Links */}
      <div className="flex flex-row gap-5">
        <Link href="\" className="hover:font-semibold">Press Features</Link>
        <Link href="\" className="hover:font-semibold">Terms & Policies</Link>
        <Link href="\" className="hover:font-semibold">Location</Link>
      </div>

      {/* Icons */}
      <div className="flex flex-row gap-5">
        <Link href="/">
          <FontAwesomeIcon
            icon={["fab", "facebook-f"]}
            className="w-5 aspect-square"
          />
        </Link>
        <Link href="/">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className="w-5 aspect-square"
          />
        </Link>
        <Link href="/">
          <FontAwesomeIcon
            icon={["fab", "tiktok"]}
            className="w-5 aspect-square"
          />
        </Link>
      </div>
    </div>
  );
}
