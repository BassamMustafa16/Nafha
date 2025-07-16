import PagesHeader from "@/components/PagesHeader";
import Content from "./components/Content";

export default function AboutPage() {
  return (
    <main>
      <PagesHeader
        image="about-header"
        heading="ABOUT US"
        text="Crafted for Icons Made to Stand Alone"
      />
      <Content />
    </main>
  );
}
