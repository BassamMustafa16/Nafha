"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">(
    ""
  );

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch(
        `/api/contact`,
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5 lg:gap-8 xl:gap-10 max-w-sm lg:max-w-md">
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
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            className="border border-[#D6D6D6] text-sm lg:text-lg xl:text-xl rounded-md px-3 py-2 resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="text-white bg-black px-5 lg:px-8 py-2 lg:py-3 text-sm lg:text-lg xl:text-xl w-fit disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors duration-200"
        >
          {isSubmitting ? "Sending..." : "Book a Private Consultation"}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {"Message sent successfully! We'll get back to you soon."}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Failed to send message. Please try again or contact us directly.
        </div>
      )}
    </div>
  );
}
