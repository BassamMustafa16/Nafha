"use client";

import { FormEvent } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add icon to FontAwesome library
library.add(faCircleChevronDown);

export default function ReqForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
          required
        />
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
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="phoneInput"
          className="text-[#555555] text-xs lg:text-base xl:text-lg"
        >
          Phone<span className="text-red-500">*</span>
        </label>
        <input
          id="phoneInput"
          type="tel"
          name="phone"
          placeholder="Type your phone"
          className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2"
          required
        />
      </div>

      {/* Sizes */}
      <div className="space-y-6 lg:flex lg:flex-row lg:gap-5">
        {/* Size */}
        <div className="flex flex-col gap-2 lg:flex-1 relative">
          <label
            htmlFor="sizeInput"
            className="text-[#555555] text-xs lg:text-base xl:text-lg"
          >
            Size<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="sizeInput"
              name="size"
              className="appearance-none w-full border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 pr-10"
              required
            >
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <FontAwesomeIcon
              icon={["fas", "circle-chevron-down"]}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Length */}
        <div className="flex flex-col gap-2 lg:flex-1">
          <label
            htmlFor="lengthInput"
            className="text-[#555555] text-xs lg:text-base xl:text-lg"
          >
            Length<span className="text-red-500">*</span>
          </label>
          <input
            id="lengthInput"
            type="number"
            name="length"
            min={0}
            max={500}
            placeholder="Cm"
            className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2"
            required
          />
        </div>

        {/* Custom Measurements */}
        <div className="flex flex-col gap-2 lg:flex-2">
          <label
            htmlFor="customInput"
            className="text-[#555555] text-xs lg:text-base xl:text-lg flex flex-row justify-between"
          >
            <span>Custom Measurements</span>
            <span className="text-[#8a8989]">Optional Detailed</span>
          </label>
          <input
            id="customInput"
            type="text"
            name="custom"
            className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="messageInput"
          className="text-[#555555] text-xs lg:text-base xl:text-lg"
        >
          Anything Else We Should Know?
        </label>
        <textarea
          id="messageInput"
          name="message"
          placeholder="Enter your message"
          className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 resize-y"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="border py-3 px-10 lg:text-xl w-fit hover:bg-black hover:text-white transition-all duration-300"
      >
        Submit
      </button>
    </form>
  );
}
