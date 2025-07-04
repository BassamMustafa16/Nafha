import Image from "next/image";

export default function Header() {
  return (
    <div
      className="relative w-screen"
      style={{ height: "calc(100vh - 110px)" }}
    >
      <Image
        src="/images/header.jpg"
        alt="Hero"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );
}
