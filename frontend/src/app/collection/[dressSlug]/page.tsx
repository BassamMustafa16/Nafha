import PagesHeader from "@/components/PagesHeader";
import { data } from "@/app/constants/dressesData";
import { notFound } from "next/navigation";

type Props = {
  params: {
    dressSlug: string;
  };
};

export default function CollectionInnerPage({ params }: Props) {
  const { dressSlug } = params;
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
