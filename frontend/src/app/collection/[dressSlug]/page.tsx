import PagesHeader from "@/components/PagesHeader";
import { data } from "@/app/constants/dressesData";
import { notFound } from "next/navigation";
import Sec1 from "./components/Sec1";
import Video from "./components/Video";
import Gallery from "./components/Gallery";
import Slider from "./components/Slider";

export default async function CollectionInnerPage({
  params,
}: {
  params: Promise<{ dressSlug: string }>;
}) {
  const { dressSlug } = await params;
  const dress = data.find((dress) => dress.slug === dressSlug);

  if (!dress) return notFound();

  return (
    <main className="flex flex-col gap-10 md:gap-0">
      <PagesHeader
        image={`products/${dress.name}/header`}
        heading="COLLECTIONS"
        text={dress.name}
      />
      <Sec1 name={dress.name} description={dress.description} />
      <Video name={dress.name} />
      <Gallery name={dress.name} />
      <Slider name={dress.name} />
    </main>
  );
}
