// Page.tsx
import Sec1 from "@/components/Sec1";
import Sec2 from "@/components/Sec2";
import Sec3 from "@/components/Sec3";
import Sec4 from "@/components/Sec4";
import Video from "@/components/Video";
import Slider from "@/components/Slider";

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
