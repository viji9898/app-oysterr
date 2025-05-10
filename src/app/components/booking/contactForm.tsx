"use client";

import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = `${formData.get("firstName") || ""} ${
      formData.get("lastName") || ""
    }`.trim();
    const email = formData.get("email") || "";

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (res.status === 200) {
        const redirectUrl = `https://www.videoask.com/fr25vozij?hideplay&contact_name=${encodeURIComponent(
          fullName
        )}&contact_email=${encodeURIComponent(email.toString())}`;

        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 2000); // 2-second delay
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e: any) {
      setStatus("error");
      setError(e.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full md:max-w-xl bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <form
        name="contact"
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-4"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              name="firstName"
              type="text"
              required
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              name="lastName"
              type="text"
              required
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <div className="flex gap-2">
            <input
              name="countryCode"
              type="text"
              placeholder="+44"
              required
              className="w-1/3 p-2 border border-gray-300 rounded text-sm"
            />
            <input
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              required
              className="w-2/3 p-2 border border-gray-300 rounded text-sm"
            />
          </div>
        </div>

        <div>
          <label className="flex items-start">
            <input
              type="checkbox"
              name="consentToMarketing"
              className="mt-1 mr-2"
            />
            <span className="text-xs text-gray-700">
              I consent to marketing calls and text messages, including those
              made with autodialed or artificial voice messages. Message and
              data rates may apply. Unsubscribe anytime per our Privacy Policy.
              Consent is not a condition of purchase.
            </span>
          </label>
        </div>

        <button
          className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-2 sm:py-3 rounded font-semibold text-sm sm:text-base transition-colors cursor-pointer"
          type="submit"
          disabled={status === "pending"}
        >
          {status === "pending" ? "Sending..." : "Send"}
        </button>

        {status === "ok" && (
          <div className="text-green-600 text-sm font-medium">
            Submitted successfully!
          </div>
        )}
        {status === "error" && (
          <div className="text-red-600 text-sm font-medium">Error: {error}</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
