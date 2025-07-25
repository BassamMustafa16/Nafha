import { Metadata } from "next";
import { websiteUrl, websitePreview } from "@/app/constants/metaData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dressReq: string }>; // Changed: params is now a Promise
}): Promise<Metadata> {
  const { dressReq } = await params; // Changed: await the params
  const dress = data.find((dress) => dress.slug === dressReq);

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
import ReqForm from "./components/ReqForm";

// Updated Main Layout with consistent spacing and better structure
export default async function DressReqPage({
  params,
}: {
  params: Promise<{ dressReq: string }>;
}) {
  const { dressReq } = await params;
  const dress = data.find((dress) => dress.slug === dressReq);

  if (!dress) return notFound();

  return (
    <main className="min-h-screen space-y-6 lg:space-y-10 xl:space-y-12">
      {/* Header - Full width, no spacing issues */}
      <PagesHeader
        image={`products/${dress.name}/header`}
        heading="COLLECTIONS"
        text={dress.name}
      />

      {/* Content sections with consistent spacing */}
      <div className="space-y-6 lg:space-y-10 px-4 md:px-0 max-w-[425px] lg:max-w-[700px] xl:max-w-[800px] mx-auto">
        <div className="space-y-2">
          <h1 className="text-xl lg:text-3xl xl:text-4xl">
            Let’s Create Your Dream Dress
          </h1>
          <p className="text-sm lg:text-lg xl:text-xl">
            Describe what you want, and we’ll make it happen.
          </p>
        </div>
        <ReqForm />
      </div>
    </main>
  );
}
