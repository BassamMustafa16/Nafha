import { Metadata } from "next";
import { websiteUrl, websitePreview } from "@/app/constants/metaData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dressSlug: string }>; // Changed: params is now a Promise
}): Promise<Metadata> {
  const { dressSlug } = await params; // Changed: await the params
  const dress = data.find((dress) => dress.slug === dressSlug);

  if (!dress) {
    return {
      title: "Dress not found",
    };
  }

  return {
    title: dress.name,
    description:
      dress.description?.split("\n")[0] ||
      "Explore our exclusive dress collection.",
    openGraph: {
      title: dress.name,
      description: dress.description?.split("\n")[0] || "",
      url: `${websiteUrl}collections/${dress.slug}`,
      images: [
        {
          url: `${websiteUrl}${websitePreview}`,
          width: 756,
          height: 1133,
          alt: dress.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dress.name,
      description: dress.description?.split("\n")[0] || "",
      images: [`${websiteUrl}${websitePreview}`],
    },
  };
}

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
    <main className="flex flex-col gap-6 md:gap-0 relative"> {/* Reduce gap and add relative positioning */}
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