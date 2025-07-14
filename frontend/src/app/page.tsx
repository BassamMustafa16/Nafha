// Page.tsx
import Navbar from "@/components/Navbar";
import Sec1 from "@/components/Sec1";
import Sec2 from "@/components/Sec2";
import Sec3 from "@/components/Sec3";
import Sec4 from "@/components/Sec4";
import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Video from "@/components/Video";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Navbar />
        <Video />
      </div>
      <Sec1 />
      <Slider />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <footer>
        <Footer1 />
        <Footer2 />
      </footer>
    </div>
  );
}