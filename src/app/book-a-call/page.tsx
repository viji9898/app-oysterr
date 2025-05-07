// File: app/book-a-call/page.tsx

import React from "react";
import SpringPromoBookingForm from "../components/booking/SpringPromoBookingForm";

export const metadata = {
  title: "Book a Call - Spring Career Kickstart | Your Company",
  description: "Schedule a consultation call and get 20% OFF before April 26th",
};

export default function BookACallPage() {
  return (
    <div className="container mx-auto py-12 px-4 mt-[80px]">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Schedule Your Free Consultation
        </h1>
        <p className="text-lg text-gray-600">
          Take the first step toward your new career journey. Our expert
          advisors are ready to help you explore your options.
        </p>
      </div>

      <SpringPromoBookingForm />

      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          What to Expect on Your Call
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">
              1
            </div>
            <h3 className="font-bold text-lg mb-2">Career Assessment</h3>
            <p className="text-gray-600">
              We'll discuss your background, skills, and career goals to
              understand where you want to go.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">
              2
            </div>
            <h3 className="font-bold text-lg mb-2">Program Exploration</h3>
            <p className="text-gray-600">
              Learn about our bootcamps and how our curriculum is designed to
              prepare you for in-demand roles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">
              3
            </div>
            <h3 className="font-bold text-lg mb-2">Custom Roadmap</h3>
            <p className="text-gray-600">
              Get personalized recommendations and next steps to help you
              achieve your career goals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-8">
          Here are some common questions about our consultation calls.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-4 text-left">
          <h3 className="font-bold text-lg mb-2">
            How long is the consultation call?
          </h3>
          <p className="text-gray-600">
            Our initial consultation calls typically last 30-45 minutes, giving
            us enough time to understand your goals and answer your questions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-4 text-left">
          <h3 className="font-bold text-lg mb-2">
            Is there any obligation after the call?
          </h3>
          <p className="text-gray-600">
            No, the consultation is completely free with no obligation. It's an
            opportunity for you to learn more about our programs and decide if
            they're right for you.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-4 text-left">
          <h3 className="font-bold text-lg mb-2">
            How do I claim the 20% discount?
          </h3>
          <p className="text-gray-600">
            The discount will be automatically applied to your account if you
            enroll in any of our programs after your consultation call, provided
            you book before April 26th.
          </p>
        </div>
      </div>
    </div>
  );
}
