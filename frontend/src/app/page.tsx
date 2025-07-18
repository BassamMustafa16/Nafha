// Page.tsx
import Sec1 from "@/components/Sec1";
import Sec2 from "@/components/Sec2";
import Sec3 from "@/components/Sec3";
import Sec4 from "@/components/Sec4";
import Video from "@/components/Video";
import Slider from "@/components/Slider";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soirée Collection | Modern Couture & Timeless Elegance</title>
        <meta
          name="description"
          content="Explore our Soirée Collection - a celebration of modern opulence and timeless femininity, featuring couture gowns designed for unforgettable entrances."
        />
        <meta
          name="keywords"
          content="Soirée Collection, couture, gown, fashion designer, elegant dresses, modern couture"
        />
        {/* Open Graph data */}
        <meta
          property="og:title"
          content="Soirée Collection | Modern Couture & Timeless Elegance"
        />
        <meta
          property="og:description"
          content="Explore the Soirée Collection, a range of couture gowns with intricate designs, perfect for making an unforgettable entrance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourfashionbrand.com/" />
        <meta
          property="og:image"
          content="https://www.yourfashionbrand.com/preview-image.jpg"
        />
        {/* Canonical link */}
        <link rel="canonical" href="https://www.yourfashionbrand.com/" />
      </Head>

      <main className="flex flex-col">
        <Video />
        <Sec1 />
        <Slider />
        <Sec2 />
        <Sec3 />
        <Sec4 />
      </main>
    </>
  );
}
