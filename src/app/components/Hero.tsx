"use client";

import React, { useState, useEffect } from "react";

const badges = ["PAs", "EAs", "SALES", "FINANCE", "HR", "MARKETING"];

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 14,
    minutes: 36,
    seconds: 32,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0)
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0)
          return {
            ...prev,
            days: days - 10,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-[rgb(233, 233, 233))] text-black rounded-3xl overflow-hidden mx-4 md:mx-auto max-w-[1352px] md:max-h-[614px] min-h-screen md:min-h-[614px]">
      {/* Content */}

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-14 gap-12 h-full">
        {/* Left Content */}

        <div className="max-w-2xl text-center md:text-left">
          <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
            {badges.map((badge) => (
              <span
                key={badge}
                className="border border-black px-3 py-1 text-[12px] rounded font-medium bg-white/10"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="text-[42px]  font-bold leading-tight">
            <span className="relative inline-block">
              Unlock Global Talent.
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500" />
            </span>{" "}
            Drive Your Business Forward.
          </h1>

          <p className="mt-5 text-[18px]  text-gray-700 max-w-lg mx-auto md:mx-0">
            Unlock 20% Off – Limited Time Only! Schedule Your Call Before July
            20th to Claim the Offer.
          </p>

          {/* Counter */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-2xl font-bold text-green-600">{value}</div>
                <div className="text-sm text-gray-600 uppercase">{unit}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded hover:bg-red-600 transition">
              Ready to Scale?
            </button>
            <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded hover:bg-red-600 transition">
              Discover Your Plan
            </button>
          </div>
        </div>

        {/* Right Content with Image */}
        <div className="relative shrink-0">
          {/* Rotating Circle Behind Image */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border-2 border-red-500 opacity-20 animate-spin-slow"></div>
          </div>

          {/* Rocking 3/4 Circle Behind Image */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="rocking-circle"></div>
          </div>

          {/* Image */}
          <img
            src="https://oyster.wickyanalysis.com/wp-content/uploads/2025/02/image-1-2.png"
            alt="Student testimonial"
            className="w-[260px] md:w-[400px] relative z-10"
          />
        </div>
        <br></br>
        <br></br>
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 text-center">
          <p>
            We connect you with elite global talent to scale your business fast
            and fuel <strong>explosive growth</strong>
            <span className="text-red-500 font-bold">e</span>.
          </p>
        </div> */}
      </div>
      {/* Footer Text */}
    </div>
  );
}
