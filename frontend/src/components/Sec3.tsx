import Sec3Image from "./Sec3Image";

const images = ["sec 03 01.png", "sec 03 02.png", "sec 03 03.png"];

export default function Sec3() {
  return (
    <section className="flex flex-col md:flex-row z-20">
      {images.map((name) => (
        <Sec3Image key={name} imageName={name} />
      ))}
    </section>
  );
}
