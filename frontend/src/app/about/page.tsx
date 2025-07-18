import { websiteUrl, websitePreview } from "../constants/metaData";
export const metadata = {
  title: "About Nafha Thabet | Redefining Couture Through Bold Femininity",
  description:
    "Learn about Nafha Thabet — a haute couture brand built on bold femininity, sculptural elegance, and empowering fashion that tells every woman’s story.",
  keywords: [
    "Nafha Thabet",
    "about couture brand",
    "fashion designer",
    "bold femininity",
    "couture fashion",
    "luxury dresses",
    "haute couture",
  ],
  openGraph: {
    title: "About Nafha Thabet | Redefining Couture Through Bold Femininity",
    description:
      "Nafha Thabet celebrates fearless self-expression, individuality, and sculptural couture. Discover the vision and values behind the brand.",
    url: `${websiteUrl}about`,
    siteName: "Nafha Thabet",
    images: [
      {
        url: `${websiteUrl}${websitePreview}`,
        width: 1200,
        height: 630,
        alt: "About Nafha Thabet – Haute Couture Brand",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nafha Thabet | Redefining Couture Through Bold Femininity",
    description:
      "Explore the story of Nafha Thabet, a haute couture label focused on sculptural elegance, empowerment, and fearless individuality.",
    images: [`${websiteUrl}${websitePreview}`],
  },
  metadataBase: new URL(websiteUrl),
  alternates: {
    canonical: "/about",
  },
};

import PagesHeader from "@/components/PagesHeader";
import Content from "./components/Content";

export default function AboutPage() {
  return (
    <>
      <PagesHeader
        image="images/about-header"
        heading="ABOUT US"
        text="Crafted for Icons Made to Stand Alone"
      />
      <main>
        <Content />
      </main>
    </>
  );
}
