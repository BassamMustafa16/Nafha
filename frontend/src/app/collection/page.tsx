import PagesHeader from "@/components/PagesHeader";
import Grid from "./components/Grid";

export default function CollectionsPage() {
  return (
    <main className="flex flex-col gap-10 lg:gap-20 lg:mb-20">
      <PagesHeader
        image="collection-header"
        heading="COLLECTIONS"
        text="The Archive"
      />
      <section className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <p className="text-center text-sm md:text-base lg:text-lg xl:text-2xl">
          A curated showcase of couture and ready-to-wear creations. Every
          design tells a story of precision, emotion, and elevated
          individuality.
        </p>
      </section>
      <Grid />
    </main>
  );
}
