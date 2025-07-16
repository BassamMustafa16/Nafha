import PagesHeader from "@/components/PagesHeader";
import GetInTouch from "./components/GetInTouch";
import ContactInfo from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <main>
      <PagesHeader
        image="contact-header"
        heading="CONTACT US"
        text="Have questions, requests, or feedback? We’re here to help you shine."
      />
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
      <GetInTouch />
      <ContactInfo />
      </div>
    </main>
  );
}
