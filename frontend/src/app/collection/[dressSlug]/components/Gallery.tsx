import Image from "next/image";
type Dress = {
  name: string;
};
export default function Gallery({ name }: Dress) {
  return (
    <div className="md:flex flex-row gap-2 hidden">
      {["01", "hero", "02"].map((image, i) => (
        <section key={i} className="w-full h-auto max-h-screen">
          <Image
            src={`/products/${name}/${image}.png`}
            alt="Hero Image"
            width={756}
            height={1133}
            className="w-full h-auto"
          />
        </section>
      ))}
    </div>
  );
}
