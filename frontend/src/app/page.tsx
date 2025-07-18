// Page.tsx
import { websiteUrl, websitePreview } from "./constants/metaData";
import Sec1 from "@/components/Sec1";
import Sec2 from "@/components/Sec2";
import Sec3 from "@/components/Sec3";
import Sec4 from "@/components/Sec4";
import Video from "@/components/Video";
import Slider from "@/components/Slider";

export const metadata = {
  title:
    "Nafha Thabet | Soirée Collection – Bold Couture Gowns for Unforgettable Moments",
  description:
    "Step into Nafha Thabet’s Soirée Collection – a world of bold couture gowns crafted with luxury, individuality, and fearless femininity. Discover dramatic silhouettes, intricate details, and timeless elegance.",
  keywords: [
    "couture gowns",
    "Nafha Thabet",
    "Soirée Collection",
    "luxury dresses",
    "fashion designer",
    "evening wear",
    "haute couture",
  ],
  openGraph: {
    title: "Nafha Thabet | Soirée Collection – Bold Couture Gowns",
    description:
      "Explore dramatic silhouettes and bold femininity with Nafha Thabet’s Soirée Collection. Where every stitch speaks luxury and individuality.",
    url: websiteUrl,
    siteName: "Nafha Thabet",
    images: [
      {
        url: `${websiteUrl}${websitePreview}`, // Update this path
        width: 1200,
        height: 630,
        alt: "Soirée Collection Couture Gown",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nafha Thabet | Soirée Collection – Bold Couture Gowns",
    description:
      "Discover couture evening gowns crafted to turn heads – Nafha Thabet’s Soirée Collection is made for unforgettable entrances.",
    images: [`${websiteUrl}${websitePreview}`],
  },
  metadataBase: new URL(websiteUrl),
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Video />
      <Sec1 />
      <Slider />
      <Sec2 />
      <Sec3 />
      <Sec4 />
    </main>
  );
}
