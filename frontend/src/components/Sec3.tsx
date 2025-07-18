import Sec3Element from "./Sec3element";

const elements = [
  { image: "sec 03 01.png", slug: "emerald-allure-draped-gown" },
  { image: "sec 03 02.png", slug: "noir-reverie-gown" },
  { image: "sec 03 03.png", slug: "ivory-muse-gown" },
];

export default function Sec3() {
  return (
    <section className="flex flex-col md:flex-row md:justify-center z-20 bg-[#E7E7E7]">
      {elements.map((element, i) => (
        <Sec3Element key={i} imageName={element.image} slug={element.slug} />
      ))}
    </section>
  );
}
