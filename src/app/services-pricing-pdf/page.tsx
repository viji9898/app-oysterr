// File: app/services-pricing-pdf/page.tsx

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Services Pricing PDF | Your Company",
  description: "Download our services pricing in PDF format",
};

export default function ServicesPricingPdfPage() {
  return (
    <div className="container mx-auto py-12 px-4 ">
      <h1 className="text-3xl font-bold mb-6">Services Pricing PDF</h1>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          Download Our Pricing Information
        </h2>
        <p className="mb-6">
          Thank you for your interest in our services. You can download our
          complete pricing guide using the button below.
        </p>

        {/* This would be the actual download button for the PDF */}
        <a
          href="/pdfs/services-pricing.pdf"
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Download PDF
        </a>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            href="/"
            className="text-blue-600 hover:underline flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
