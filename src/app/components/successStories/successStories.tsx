"use client";

import React from "react";
import Image from "next/image";
import Testimonials from "./testimonials";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ryan Finnigan",
    role: "Chief Executive Officer at Fintralogistics",
    country: "UK / UAE",
    countryCode: "UK",
    image: "/images/testimonialThumbnails/ryan-finnigan-avatar.jpg",

    quote: [
      "Oysterr has been a logistics lifesaver. They connected us with top-tier Sri Lankan pros who just get stuff done.",
      "Our operations now run like clockwork—costs down, efficiency up. It’s wild how smooth things are.",
      "Honestly, it’s the smartest way we’ve scaled without breaking the bank. Total game-changer.",
    ],
    videoThumbnail: "/images/testimonialThumbnails/ryan-finnigan-thumbnail.jpg",
    videoUrl: "https://player.vimeo.com/video/1082867106",
  },
  {
    id: 2,
    name: "Anu Jayawickrama",
    role: "Modeling Concrete Structures",
    country: "Australia",
    countryCode: "AU",
    image: "/images/testimonialThumbnails/anu-jayawickrama-avatar.png",
    quote: [
      "As the founder of a boutique design and architecture consultancy in Sydney, I wear a lot of hats. From managing client expectations to overseeing creative direction, there’s rarely time left for admin or operations. That’s where Oysterr has made a massive difference. They’ve taken ownership of everything from scheduling and invoicing to bookkeeping and reporting, giving me back the mental space to actually grow the business.",
      "What really surprised me is how proactive they are. Their business development support has helped us land new clients we wouldn't have reached otherwise. It’s not just outsourcing — it feels like having an integrated, behind-the-scenes team that truly understands how we work and what we need.",
    ],
  },
  {
    id: 3,
    name: "Katherine Samuelson",
    role: "Persona Trainer & Retreats",
    country: "UK",
    countryCode: "UK",
    image: "/images/testimonialThumbnails/katherine-samuelson-avatar.png",
    quote: [
      "Running a fitness app and organizing retreats means I'm always juggling a million things. Since working with Oysterr, my content workflow has been completely streamlined, and I finally have breathing room to focus on my clients.",
      "Their team handles everything from admin to content creation—videos, posts, newsletters—you name it. It’s like having a powerhouse backend team without the overhead. I honestly don’t know how I managed before.",
    ],
    videoThumbnail:
      "/images/testimonialThumbnails/katherine-samuelson-thumbnail.jpg",
    videoUrl: "https://player.vimeo.com/video/1082877107",
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
        <Testimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default SuccessStories;
