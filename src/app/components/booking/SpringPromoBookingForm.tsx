"use client";

// components/booking/SpringPromoBookingForm.tsx
import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import OfferDeadline from "./OfferDeadline";

const SpringPromoBookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consentToMarketing: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would send the data to your API
    console.log("Form submitted:", formData);

    // Simulate API request
    setTimeout(() => {
      window.location.href = "/thank-you"; // Redirect to thank you page
    }, 1000);
  };

  return (
    <div className="mx-auto my-4 px-4 sm:px-6 md:px-8 max-w-[1040px]">
      <div className="bg-green-50 rounded-xl overflow-hidden h-full shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left Column - Promotion Content */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Team Profile Images */}
            <div className="flex mb-4">
              <div className="h-12 sm:h-14 w-12 sm:w-14 rounded-full border-4 border-lime-400 overflow-hidden z-30 relative">
                <Image
                  src="https://metana.io/wp-content/uploads/2024/12/Metana-Team-PFP-shevin-2.png"
                  alt="Team member"
                  width={30}
                  height={30}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-12 sm:h-14 w-12 sm:w-14 rounded-full border-4 border-lime-400 overflow-hidden -ml-3 z-20 relative">
                <Image
                  src="https://metana.io/wp-content/uploads/2024/12/T03HW9TLR5J-U03SYLP68RJ-ee5d61293711-192.jpeg"
                  alt="Team member"
                  width={30}
                  height={30}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="h-12 sm:h-14 w-12 sm:w-14 rounded-full border-4 border-lime-400 overflow-hidden -ml-3 z-10 relative">
                <Image
                  src="https://metana.io/wp-content/uploads/2024/12/Ounvin.jpg"
                  alt="Team member"
                  width={30}
                  height={30}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Spring Career Kickstart Banner */}
            <div className="bg-gray-800 text-white px-3 py-1 sm:px-4 sm:py-2 inline-block mb-3 sm:mb-4">
              <h3 className="text-sm sm:text-base md:text-lg font-bold">
                Remote Hiring Kickstart
              </h3>
            </div>

            {/* Main Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Book a call before{" "}
              <span>
                <OfferDeadline />
              </span>{" "}
            </h2>

            {/* Benefits List */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <div className="flex items-center">
                <div className="bg-gray-800 rounded-full p-1 mr-2 sm:mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-medium text-black">
                  Guaranteed talent replacement
                </h3>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-800 rounded-full p-1 mr-2 sm:mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-medium text-black">
                  Vetted professionals trained for startups
                </h3>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-800 rounded-full p-1 mr-2 sm:mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-medium text-black">
                  On-demand client success support
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white h-full p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="h-full flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-medium text-xs sm:text-sm mb-1"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-medium text-xs sm:text-sm mb-1"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>

              <div className="mb-3 sm:mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium text-xs sm:text-sm mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                />
              </div>

              <div className="mb-3 sm:mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium text-xs sm:text-sm mb-1"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <div className="inline-flex items-center border border-gray-300 rounded-l bg-white px-2">
                    <div className="flex items-center">
                      <div className="w-4 h-3 bg-red-500 relative overflow-hidden mr-1 sm:mr-2">
                        {/* Sri Lanka flag - simplified version */}
                        <div className="absolute inset-0 bg-red-500"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-yellow-500 border-r-2 border-yellow-700"></div>
                      </div>
                      <span className="text-xs">▼</span>
                    </div>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Country Code + Phone Number"
                    className="w-full p-2 border border-gray-300 rounded-r text-sm"
                  />
                </div>
              </div>

              <div className="mb-3 sm:mb-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="consentToMarketing"
                    checked={formData.consentToMarketing}
                    onChange={handleInputChange}
                    className="mt-1 mr-2"
                  />
                  <span className="text-xs text-gray-700">
                    I consent to marketing calls and text messages, including
                    those made with an autodialed or artificial voice messages.
                    Message and data rates may apply. Unsubscribe anytime per
                    our Privacy Policy. Consent is not a condition of purchase.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-auto w-full bg-indigo-900 hover:bg-indigo-800 text-white py-2 sm:py-3 rounded font-semibold text-sm sm:text-base transition-colors"
              >
                {isSubmitting ? "Processing..." : "Continue"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringPromoBookingForm;
