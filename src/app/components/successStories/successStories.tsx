"use client";

import React from "react";
import Image from "next/image";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ryan Finnigan",
    role: "Chief Executive Officer at Fintralogistics",
    country: "UK / UAE",
    countryCode: "UK",
    image: "https://metana.io/wp-content/uploads/2024/04/Mathieu-Bertin.jpeg",
    quote: [
      "Oysterr has been a logistics lifesaver. They connected us with top-tier Sri Lankan pros who just get stuff done.",
      "Our operations now run like clockwork—costs down, efficiency up. It’s wild how smooth things are.",
      "Honestly, it’s the smartest way we’ve scaled without breaking the bank. Total game-changer.",
    ],
    videoThumbnail: "https://metana.io/wp-content/uploads/2024/10/2.jpg",
    videoUrl: "https://player.vimeo.com/video/1081910456",
  },
  {
    id: 2,
    name: "Santiago Trujillo",
    role: "Developer Relations - Web3Js (Chainsafe)",
    country: "Colombia",
    countryCode: "CO",
    image: "https://metana.io/wp-content/uploads/2024/04/Mathieu-Bertin.jpeg",
    quote: [
      "I joined Metana back in February 2023 to level up my Blockchain skills, I had some basic knowledge of Solidity + proficient in Javascript, but after putting in around 20 hours a week for 3-4 months(you may require discipline), I've gained a ton of skills. Plus, I've had the chance to meet some amazing people, like the Metana team and the other students. In fact, I'm even working on projects with one of the Metana students right now.",
      "Metana brings you all the structure and resources to be able to go from beginner/medium to advanced regarding Solidity and Blockchain. I also got a job for DevRel in web3 even before finishing Metana bootcamp.",
    ],
  },
  {
    id: 3,
    name: "Sven Daneel",
    role: "Blockchain Engineer",
    country: "Switzerland",
    countryCode: "CH",
    image:
      "https://metana.io/wp-content/uploads/2024/03/Sven-Daneel%E2%80%8B.jpeg",
    quote: [
      "I'm currently enrolled in the Metana bootcamp. So far, it's been a very pleasurable experience. I would definitely recommend this course for people who might have some basic knowledge of Solidity or programming in general since the learning curve is quite steep and there's a lot of information packed into the different modules.",
      "The mentors are very knowledgeable about their subjects and can give you in-depth guidance about specific questions you have. These are the kinds of things I've experienced, so I would definitely join up if you want to become a Solidity expert and learn everything from security to the implementation of smart contracts.",
    ],
    videoThumbnail: "https://metana.io/wp-content/uploads/2024/10/1.jpg",
    videoUrl: "https://player.vimeo.com/video/1081910456",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1060px] mx-auto px-4">
        {/* Header */}
        <div className="mb-10 relative">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 font-semibold rounded-full mb-4">
            97.6% CUSTOMER SATISFACTION
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Customer <span className="text-blue-500">Success</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            With a 4.8/5 star rating on Course Report, and Switchup, we're one
            of the top Web3, data engineering and cybersecurity bootcamps.
          </p>
          {/* <a
              href="#"
              className="text-blue-600 font-medium flex items-center group"
            >
              Read more reviews
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
            </a> */}

          {/* Forbes badge */}
          {/* <div className="hidden md:block absolute right-4 top-4 w-40 h-40">
            <Image
              src="https://metana.io/wp-content/uploads/2024/12/Asset-77.png"
              alt="Forbes Best Coding Bootcamps"
              width={160}
              height={160}
            />
          </div> */}
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gray-50 rounded-xl overflow-hidden shadow-md ${
                testimonial.videoUrl
                  ? index % 2 === 0
                    ? "md:flex"
                    : "md:flex flex-row-reverse"
                  : ""
              }`}
            >
              {/* Video embed (if videoUrl exists) */}
              {testimonial.videoUrl && (
                <div className="md:w-2/5 bg-black">
                  <div className="relative aspect-video w-full h-full">
                    <iframe
                      src={testimonial.videoUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={`${testimonial.name}'s testimonial video`}
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Content */}
              <div
                className={`p-8 ${
                  testimonial.videoUrl ? "md:w-3/5" : "w-full"
                }`}
              >
                {/* Quote */}
                <div className="mb-6">
                  {testimonial.quote.map((paragraph, i) => (
                    <p key={i} className="text-gray-700 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} |{" "}
                      <span className="inline-flex items-center">
                        {testimonial.countryCode === "CA" && "🇨🇦"}
                        {testimonial.countryCode === "CO" && "🇨🇴"}
                        {testimonial.countryCode === "CH" && "🇨🇭"}
                        {testimonial.countryCode === "UK" && "🇬🇧"}{" "}
                        {testimonial.country}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
