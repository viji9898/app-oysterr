import React from "react";

const AboutOysterr = () => {
  return (
    <section className=" bg-white" id="Metana-Certified">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="mb-4 text-center">
          <span className="text-xs uppercase font-bold px-4 py-1 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full">
            About Us
          </span>
        </div>
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-6">
          Get Matched by Oysterr
        </h2>
        <p className="text-gray-700 text-lg text-center mb-16">
          Oysterr Talent connects fast-growing companies with world-class remote
          professionals across executive support, operations, and sales. Built
          for startups and scale-ups, our fully managed hiring service helps you
          unlock exceptional talent without the overhead. Whether you're hiring
          your first assistant or scaling your sales team, Oysterr simplifies
          the process—sourcing, training, and supporting talent so you can focus
          on growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Stand out with world-class talent
            </h3>
            <p className="text-gray-600">
              We handpick top performers trained in startup operations,
              executive assistance, and sales—ready to make an impact from day
              one.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Streamlined Hiring Process
            </h3>
            <p className="text-gray-600">
              From screening to onboarding, we handle it all. Every candidate
              goes through our rigorous vetting and training programs built from
              real startup experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Start Building Your Dream Team
            </h3>
            <p className="text-gray-600">
              It doesn’t matter if you're Series A or solo—Oysterr helps you
              grow faster by giving you access to the kind of talent typically
              reserved for the big leagues. Let’s get started. You could have
              your first hire in as little as 7 days.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Choose your course and explore a new career path
          </h3>
          <p className="text-gray-600 text-lg">
            Experience the same great outcome no matter which bootcamp you
            choose. Want a new career? Let’s do it, in as little as 4 months.
            You’ll learn the tools, skills, and insights to get the job you
            want—all with an expert team of humans supporting your journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutOysterr;
