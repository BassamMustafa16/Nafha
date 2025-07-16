export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 bg-black text-white px-4 md:px-8 lg:pr-16 xl:pr-32 2xl:pr-64 py-10 lg:pt-15">
      <h1 className="text-2xl lg:text-4xl xl:text-5xl">Contact info</h1>
      <p className="text-sm lg:text-lg xl:text-xl">Feel free to reach us</p>
      <p className="text-sm lg:text-lg xl:text-xl">
        Location: 123st, Riyadh, Saudi Arabia.
      </p>
      <p className="text-sm lg:text-lg xl:text-xl">
        Phone:{" "}
        <a
          href="tel:+966501234567"
          className="underline underline-offset-4 hover:text-gray-300"
        >
          +966 50 123 4567
        </a>
      </p>
      <p className="text-sm lg:text-lg xl:text-xl">
        Email:{" "}
        <a
          href="mailto:info@nafha.com"
          className="underline underline-offset-4 hover:text-gray-300"
        >
          info@nafha.com
        </a>
      </p>
    </div>
  );
}
