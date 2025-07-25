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

// Updated Main Layout with consistent spacing and better structure
export default async function CollectionInnerPage({
  params,
}: {
  params: Promise<{ dressSlug: string }>;
}) {
  const { dressSlug } = await params;
  const dress = data.find((dress) => dress.slug === dressSlug);

  if (!dress) return notFound();

  return (
    <main className="min-h-screen">
      {/* Header - Full width, no spacing issues */}
      <PagesHeader
        image={`products/${dress.name}/header`}
        heading="COLLECTIONS"
        text={dress.name}
      />

      {/* Content sections with consistent spacing */}
      <div className="space-y-12 lg:space-y-16">
        <Sec1
          name={dress.name}
          description={dress.description}
          slug={dress.slug}
        />
        <Video name={dress.name} />
        <Gallery name={dress.name} />
      </div>
    </main>
  );
}
