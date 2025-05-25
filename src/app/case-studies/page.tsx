// File: app/book-a-call/page.tsx

import React from "react";
import SpringPromoBookingForm from "../components/booking/SpringPromoBookingForm";
import FAQSection from "../book-a-call/FaqSection";
import CaseStudyEA from "./CaseStudyEA";

export const metadata = {
  title: "Book a Call - Spring Career Kickstart | Your Company",
  description: "Schedule a consultation call and get 20% OFF before April 26th",
};

export default function BookACallPage() {
  return (
    <div className="container mx-auto py-12 px-4 mt-[5px]">
      {/* <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Schedule Your Free Consultation
        </h1>
        <p className="text-lg text-gray-600">
          Take the first step toward your new career journey. Our expert
          advisors are ready to help you explore your options.
        </p>
      </div> */}

      <CaseStudyEA />
    </div>
  );
}
