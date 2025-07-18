import { websiteUrl, websitePreview } from "../constants/metaData";
export const metadata = {
  title: "Contact Us | Nafha",
  description:
    "Have questions, requests, or feedback? We’re here to help you shine. Reach Nafha via email, phone, or our contact form.",
  openGraph: {
    title: "Contact Us | Nafha",
    description:
      "Have questions, requests, or feedback? We’re here to help you shine. Reach Nafha via email, phone, or our contact form.",
    url: `${websiteUrl}contact`,
    images: [
      {
        url: `${websiteUrl}${websitePreview}`,
        width: 1200,
        height: 630,
        alt: "Contact Nafha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Nafha",
    description:
      "Have questions or feedback? Let’s make your dream look a reality.",
    images: [`${websiteUrl}${websitePreview}`],
  },
};

import PagesHeader from "@/components/PagesHeader";
import GetInTouch from "./components/GetInTouch";
import ContactInfo from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <PagesHeader
        image="images/contact-header"
        heading="CONTACT US"
        text="Have questions, requests, or feedback? We’re here to help you shine."
      />
      <main>
        <section
          aria-labelledby="contact-form-heading"
          className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between"
        >
          <GetInTouch />
          <ContactInfo />
        </section>
      </main>
    </>
  );
}
