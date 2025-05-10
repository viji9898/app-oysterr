"use client";

import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const form = event.currentTarget;
      const formData = new FormData(form);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
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
          <div className="flex">
            <div className="inline-flex items-center border border-gray-300 rounded-l bg-white px-2">
              <div className="flex items-center">
                <div className="w-4 h-3 bg-red-500 relative overflow-hidden mr-1 sm:mr-2">
                  <div className="absolute inset-0 bg-red-500"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-yellow-500 border-r-2 border-yellow-700"></div>
                </div>
                <span className="text-xs">▼</span>
              </div>
            </div>
            <input
              name="phone"
              type="tel"
              placeholder="Country Code + Number"
              required
              className="w-full p-2 border border-gray-300 rounded-r text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
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
          className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-2 sm:py-3 rounded font-semibold text-sm sm:text-base transition-colors"
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
