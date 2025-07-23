import ContactForm from "./ContactForm";

export default function GetInTouch() {
  return (
    <div className="flex flex-col gap-5 px-4 md:px-8 lg:pl-16 xl:pl-32 2xl:pl-64 pt-10 lg:pt-15">
      <h1 className="text-2xl lg:text-4xl xl:text-5xl">Get in touch</h1>
      <p className="text-sm lg:text-lg xl:text-2xl">
        Your dream look is one message away.<br className="hidden lg:block" />Let’s make it happen.
      </p>
      <ContactForm />
    </div>
  );
}
