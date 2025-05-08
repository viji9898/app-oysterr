"use client";

import React from "react";
import Image from "next/image";

// Company logos data
const companies = [
  {
    name: "Google",
    logo: "https://metana.io/wp-content/uploads/2023/04/Google-Logo.png",
  },
  {
    name: "IBM",
    logo: "https://metana.io/wp-content/uploads/2023/04/IBM-Logo.png",
  },
  // {
  //   name: "Nike",
  //   logo: "https://metana.io/wp-content/uploads/2023/04/Logo_NIKE.png",
  // },

  {
    name: "Algorand",
    logo: "https://metana.io/wp-content/uploads/2023/10/algorand_full_logo_black.png",
  },

  {
    name: "Microsoft",
    logo: "https://metana.io/wp-content/uploads/2023/08/Microsoft_logo_2012.svg.webp",
  },
  {
    name: "ING",
    logo: "https://metana.io/wp-content/uploads/2023/10/ING-France.png",
  },
  {
    name: "Swisstonik",
    logo: "https://metana.io/wp-content/uploads/2023/10/Swisstonkc.png",
  },

  {
    name: "Halborn",
    logo: "https://metana.io/wp-content/uploads/2023/10/Halborn-Logo-.png",
  },
  {
    name: "Crimson Education",
    logo: "https://metana.io/wp-content/uploads/2023/10/Crimson-Education.jpeg",
  },
  {
    name: "Barclays",
    logo: "https://metana.io/wp-content/uploads/2023/10/Barclays-Bank-Logo-300x169.png",
  },
  {
    name: "Commonwealth Bank",
    logo: "https://metana.io/wp-content/uploads/2023/10/commonwealthbank.png",
  },
  {
    name: "DiSTI",
    logo: "https://metana.io/wp-content/uploads/2023/10/DiSTI-logo.png",
  },

  {
    name: "AWS",
    logo: "https://metana.io/wp-content/uploads/2023/10/AWS-logo.png",
  },
  {
    name: "Consensys",
    logo: "https://metana.io/wp-content/uploads/2023/10/Consensys-Logo.webp",
  },

  {
    name: "Polygon",
    logo: "https://metana.io/wp-content/uploads/2023/10/Polygon_blockchain_logo.png",
  },
  {
    name: "McKinsey",
    logo: "https://metana.io/wp-content/uploads/2023/05/mckinsey-company_owler_20190728_090718_original.png",
  },
  {
    name: "Binance",
    logo: "https://metana.io/wp-content/uploads/2023/10/1024px-Binance_logo.svg.png",
  },
  {
    name: "Coinbase",
    logo: "https://metana.io/wp-content/uploads/2023/10/Coinbase-Logo-1.png",
  },
  {
    name: "ChainSafe",
    logo: "https://metana.io/wp-content/uploads/2023/12/Chain-Safe-Logo.png",
  },
];

const TalentExperience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Talent with Experience From{" "}
            <span className="bg-lime-300 inline-block px-1">top companies</span>{" "}
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-1 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 px-4"
            >
              <div className="relative h-full w-full">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="transition-all duration-300 hover:scale-110 filter  hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-gray-700 space-y-4 mb-8">
          <p>
            Our talent pool have worked with some of the biggest names in the
            industry, including Google, Amazon, and Microsoft. They bring a
            wealth of experience and knowledge to the table, ensuring that you
            receive the best possible training and support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TalentExperience;
