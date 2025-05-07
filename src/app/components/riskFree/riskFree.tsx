"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const RiskFree = () => {
  return (
    <section className="py-16 mx-4">
      <div className="max-w-[1060px] mx-auto px-4 border-6 border-lime-400 rounded-2xl relative overflow-hidden">
        <div className="py-12 px-6 md:px-12 lg:grid lg:grid-cols-5 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="lg:col-span-2 mb-10 lg:mb-0">
            <div className="max-w-md mx-auto lg:mx-0">
              <Image
                src="https://metana.io/wp-content/uploads/2022/11/Job-Gurentee.png.webp"
                alt="100% Guaranteed Tuition Refund"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-3">
            <div className="inline-block mb-4 px-6 py-2 text-xs font-semibold text-blue-900 bg-white border border-blue-900 rounded-full">
              SUCCESS - OR YOUR MONEY BACK, GUARANTEED.
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              Oysterr{" "}
              <span className="bg-lime-300 inline-block px-1">Guarantees</span>{" "}
              success
            </h2>

            <h3 className="text-base font-bold text-blue-900 mb-6">
              Risk Free 2-Week Refund Guarantee
            </h3>

            <div className="text-gray-700 space-y-4 mb-8">
              <p>
                With our job guarantee, you're guaranteed a new job in web3—or
                you'll get a full tuition refund. We're so confident that our
                programs provide a direct path to a high-paying job that we
                offer the following guarantee:
              </p>

              <p>
                If you qualify for our 100% Tuition Refund Guarantee, fulfill
                the requirements, and still don't get job offers paying $50,000
                a year (or $4,166 a month) within 180 days after graduation,
                you'll get a full refund.
              </p>

              <p>
                We also offer a hassle-free two-week refund policy. If you're
                not satisfied with your purchase for any reason, you can request
                a refund, no questions asked.
              </p>
            </div>

            <Link
              href="/job-guarantee"
              className="inline-flex items-center text-blue-600 font-semibold group"
            >
              Learn more
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskFree;
