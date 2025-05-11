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

      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          What to Expect on Your Call with Oysterr
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">
              1
            </div>
            <h3 className="font-bold text-lg mb-2">Your Needs</h3>
            <p className="text-gray-600">
              We’ll learn about your team, challenges, and what support you’re
              looking for.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">
              2
            </div>
            <h3 className="font-bold text-lg mb-2">How Oysterr Helps</h3>
            <p className="text-gray-600">
              We’ll walk you through how our remote talent model works and share
              examples.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">
              3
            </div>
            <h3 className="font-bold text-lg mb-2">Next Steps</h3>
            <p className="text-gray-600">
              We’ll discuss if there’s a fit and outline what working together
              could look like.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
