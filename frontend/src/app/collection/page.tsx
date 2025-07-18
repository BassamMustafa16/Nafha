import { websiteUrl, websitePreview } from "../constants/metaData";

export const metadata = {
  title: "Collections | Nafha Thabet",
  description:
    "A curated showcase of couture and ready-to-wear creations. Each design in our archive tells a story of precision, emotion, and individuality.",
  openGraph: {
    title: "Collections | Nafha Thabet",
    description:
      "A curated archive of couture creations that celebrate individuality, craftsmanship, and sculptural beauty.",
    url: `${websiteUrl}collections`,
    siteName: "Nafha Thabet",
    images: [
      {
        url: `${websiteUrl}${websitePreview}`,
        width: 1200,
        height: 630,
        alt: "Nafha Thabet – Couture Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collections | Nafha Thabet",
    description:
      "Explore the full archive of couture and ready-to-wear fashion by Nafha Thabet.",
    images: [`${websiteUrl}${websitePreview}`],
  },
  alternates: {
    canonical: `${websiteUrl}collections`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

import PagesHeader from "@/components/PagesHeader";
import Grid from "./components/Grid";

export default function CollectionsPage() {
  return (
    <>
      <PagesHeader
        image="images/collection-header"
        heading="COLLECTIONS"
        text="The Archive"
      />
      <main className="flex flex-col gap-10 lg:gap-20 lg:mb-20">
        <section className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <p className="text-center text-sm md:text-base lg:text-lg xl:text-2xl">
            A curated showcase of couture and ready-to-wear creations. Every
            design tells a story of precision, emotion, and elevated
            individuality.
          </p>
        </section>
        <Grid />
      </main>
    </>
  );
}
