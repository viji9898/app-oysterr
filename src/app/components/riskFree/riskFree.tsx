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
                src="/images/risk-free-guaranteed-01.png"
                alt="100% Guaranteed Risk Free"
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
                With Oysterr Talent, you're guaranteed a high-performing remote
                hire—or you get your money back. We’re confident our talent will
                exceed your expectations, so we back it with the following:
              </p>

              <p>
                If your hire doesn’t deliver within the first 30 days, we’ll
                replace them free of charge or refund you in full. No long-term
                contracts. No risk.
              </p>

              <p>
                We also offer a simple, no-questions-asked 14-day refund policy.
              </p>
              <p>
                Hiring shouldn’t be hard. With Oysterr, it isn’t. Our job is to
                make your team better—guaranteed.
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
