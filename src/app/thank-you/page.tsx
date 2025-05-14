// app/thank-you/page.tsx
"use client";

import SuccessStories from "../components/successStories/successStories";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-white px-4 pb-20">
      <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto pt-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          <span
            className="px-2 rounded"
            style={{
              backgroundColor: "oklch(0.897 0.196 126.665)",
              color: "oklch(0.379 0.146 265.522)",
              display: "inline",
            }}
          >
            Thank You!
          </span>
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Your message has been received. We’ll be in touch shortly.
        </p>
        {/* <a
          href="/"
          className="inline-block mt-4 px-6 py-2 text-grey rounded transition"
          style={{
            backgroundColor: "oklch(0.897 0.196 126.665)",
          }}
        >
          Return Home
        </a> */}
      </div>

      {/* Divider and Success Stories Section */}
      <div className="max-w-5xl mx-auto mt-16 px-4">
        <hr className="border-t border-gray-200 mb-12" />
        <SuccessStories />
      </div>
    </main>
  );
};

export default ThankYou;
