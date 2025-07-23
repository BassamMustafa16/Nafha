export default function ContactForm() {
  return (
    <form className="flex flex-col gap-5 lg:gap-8 xl:gap-10 max-w-sm lg:max-w-md">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="nameInput"
          className="text-[#555555] text-xs lg:text-base xl:text-lg"
        >
          Name<span className="text-red-500">*</span>
        </label>
        <input
          id="nameInput"
          type="text"
          name="name"
          placeholder="Type your name"
          className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2"
        ></input>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="emailInput"
          className="text-[#555555] text-xs lg:text-base xl:text-lg"
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          id="emailInput"
          type="email"
          name="email"
          placeholder="Type your e-mail"
          className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2"
        ></input>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="messageInput"
          className="text-[#555555] text-xs lg:text-base xl:text-lg"
        >
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          id="messageInput"
          name="message"
          placeholder="Enter your message"
          className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 resize-y"
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="text-white bg-black px-5 lg:px-8 py-2 lg:py-3 text-sm lg:text-lg xl:text-xl w-fit"
      >
        Book a Private Consultation
      </button>
    </form>
  );
}
