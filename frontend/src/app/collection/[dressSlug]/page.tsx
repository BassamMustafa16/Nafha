import PagesHeader from "@/components/PagesHeader";
import { data } from "@/app/constants/dressesData";
import { notFound } from "next/navigation";

export default async function CollectionInnerPage({
  params,
}: {
  params: Promise<{ dressSlug: string }>;
}) {
  const { dressSlug } = await params;
  const dress = data.find((dress) => dress.slug === dressSlug);
  
  if (!dress) return notFound();
  
  return (
    <main>
      <PagesHeader
        image="inner-collection-header"
        heading="COLLECTIONS"
        text={dress.name}
      />
    </main>
  );
}