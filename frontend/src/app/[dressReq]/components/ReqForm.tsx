"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add icon to FontAwesome library
library.add(faCircleChevronDown);

interface FormData {
  name: string;
  email: string;
  phone: string;
  size: string;
  length: string;
  custom: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export default function ReqForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    size: "",
    length: "",
    custom: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">(
    ""
  );

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Basic validation for required fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.size.trim() ||
      !formData.length.trim()
    ) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data: ApiResponse = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          size: "",
          length: "",
          custom: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
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
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Type your name"
            className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Type your e-mail"
            className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Type your phone"
            className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
                value={formData.size}
                onChange={handleInputChange}
                className="appearance-none w-full border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
              value={formData.length}
              onChange={handleInputChange}
              min={0}
              max={500}
              placeholder="Cm"
              className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
              value={formData.custom}
              onChange={handleInputChange}
              className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="border py-3 px-10 lg:text-xl w-fit hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {"Request submitted successfully! We'll get back to you soon."}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Failed to submit request. Please try again or contact us directly.
        </div>
      )}
    </div>
  );
}
