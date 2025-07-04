import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-4 bg-white ">
      <div className="max-w-[1060px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase text-sm font-bold text-green-700 bg-green-100 inline-block px-3 py-1 rounded-md mb-3">
            Remote Talent
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            Reliable. <span className="bg-lime-300 px-1"> Fast.</span>Flexible.
          </h1>
          <h2 className="text-lg bg-blue-300 inline-block px-2 py-1 font-semibold mb-4">
            Scale fast without the hiring headache.
          </h2>
          <p className="text-gray-700 mb-6">
            Oysterr Talent matches you with top-tier remote professionals in
            sales, operations, and executive support. They're pre-vetted,
            startup-ready, and trained to deliver{" "}
            <strong>impact—onboarded </strong>in days, not weeks.
          </p>

          <ul className="space-y-2 text-sm text-gray-800 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span> Flexible,
              scalable, and cost-effective
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span> Guaranteed
              performance or your money back
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-xl mr-2">✓</span> Dedicated
              support and seamless onboarding
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#contact-us"
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-lg"
            >
              Book a call
            </a>
            {/* <a
              href="#"
              className="text-blue-700 underline flex items-center gap-2"
            >
              Services & Pricing PDF
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z" />
              </svg>
            </a> */}
          </div>
        </div>
        {/* Right Content with Image */}
        <div className="relative shrink-0">
          {/* Rotating Circle Behind Image */}
          <div className="absolute inset-0 flex items-center justify-center z-0 ">
            <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border-2 border-blue-500 opacity-20 animate-spin-slow"></div>
          </div>

          {/* Rocking 3/4 Circle Behind Image */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="rocking-circle"></div>
          </div>

          {/* Image */}
          <img
            src="/images/hero/hero-picture-01.png"
            alt="Student testimonial"
            className="w-[1000px] md:w-[2000px] relative z-10"
          />
        </div>
        <div className="relative">
          {/* <Image
            src="https://metana.io/wp-content/uploads/2023/11/Santiago-2-1.webp"
            alt="Instructor"
            width={791}
            height={914}
            className="w-full max-w-sm mx-auto rounded-lg"
          /> */}
          {/* <a
            href="https://www.forbes.com/advisor/education/bootcamps/best-coding-bootcamps-with-job-guarantee/#metana_software_engineering_bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://metana.io/wp-content/uploads/2024/12/Asset-77.png"
              alt="Forbes Award"
              width={439}
              height={419}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32"
            />
          </a> */}
        </div>
      </div>
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-medium">
          <div className="rounded-xl bg-white shadow-md py-6 px-4 w-full">
            <h5 className="text-[#0F172A] text-lg font-extrabold mb-1">85%</h5>
            <p className="text-[#4ADE80] font-semibold">Candiate match rate</p>
          </div>
          <div className="rounded-xl bg-white shadow-md py-6 px-4 w-full">
            <h5 className="text-[#0F172A] text-lg font-extrabold mb-1">78</h5>
            <p className="text-[#4ADE80] font-semibold">Oysterrs</p>
          </div>
          <div className="rounded-xl bg-white shadow-md py-6 px-4 w-full">
            <h5 className="text-[#0F172A] text-lg font-extrabold mb-1">5</h5>
            <p className="text-[#4ADE80] font-semibold">Time Zones</p>
          </div>
          <div className="rounded-xl bg-white shadow-md py-6 px-4 w-full">
            <h5 className="text-[#0F172A] text-lg font-extrabold mb-1">
              4.8 Star
            </h5>
            <p className="text-[#4ADE80] font-semibold">Satisfaction Score</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
