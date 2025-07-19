import Image from "next/image";
type Dress = {
  name: string;
};
export default function Gallery({ name }: Dress) {
  return (
    <div className="md:flex flex-row gap-2 hidden">
      {["01", "hero", "02"].map((image, i) => (
        <section key={i} className="relative w-full aspect-[0.667] max-h-screen">
          <Image
            src={`/products/${name}/${image}.jpg`}
            alt="Hero Image"
            fill
            sizes="33vw"
            className="w-full object-cover object-center"
          />
        </section>
      ))}
    </div>
  );
}
