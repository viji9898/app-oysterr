import React from "react";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const options = [
    {
      title: "Shell Package",
      price: "$2,399",
      subtitle: "Per Month",
      features: [
        "2 to 3 years of experience",
        "Junior Executives (Marketing, Finance, Operations, HR Managers, Product Managers, Personal Assistants, Design)",
        "Past experience from - KPMG, Ogilvy, Stax NYC",
      ],
      logos: [
        // "https://oyster.wickyanalysis.com/wp-content/uploads/2025/03/pngwing.com-17-1.png",
        "https://oyster.wickyanalysis.com/wp-content/uploads/2025/03/og6399o47c-ogilvy-logo-ogilvy-logo-1.png",
        "https://oyster.wickyanalysis.com/wp-content/uploads/2025/03/Staxlogo-blue1-640w-e1741248566626.png",
      ],
      highlighted: false,
    },
    {
      title: "Pearl Package",
      price: "$3,699",
      subtitle: "Per Month",
      features: [
        "3 to 4 years of experience",
        "Mid Level Executives (Marketing, Finance, Operations, HR Managers, Product Managers, Personal Assistant, Jr Software Engineer)",
        "Past experience from - PWC, MullenLowe, Unilever, Virtusa, IFS",
      ],
      logos: [
        "https://oyster.wickyanalysis.com/wp-content/uploads/2025/03/kisspng-john-wiley-sons-publishing-nyse-jw-a-logo-5af70addcee226.9560129015261396138474.png",
        "https://oyster.wickyanalysis.com/wp-content/uploads/2025/03/Sysco_LABS_Logo_Blue.png",
      ],
      highlighted: true, // Highlight the center column
    },
    {
      title: "Oysterr Package",
      price: "$4,399+",
      subtitle: "Per Month",
      features: [
        "5+ years of experience",
        "Senior Executives (Marketing, Finance, Operations, HR Managers, Product Managers, Personal Assistant, Software Engineer)",
        "Past experience from - Wiley, Sysco Labs, Leo Burnett, McKinsey",
      ],
      logos: [
        "https://oyster.wickyanalysis.com/wp-content/uploads/2025/03/782px-Logo-pwc-e1741248974920.png",
        "https://oyster.wickyanalysis.com/wp-content/uploads/2025/03/mullenlowe-400x278-1-e1741249082327.png",
        "https://oyster.wickyanalysis.com/wp-content/uploads/2025/03/pngwing.com-2-e1741249132775.png",
      ],

      highlighted: false,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-[1060px] mx-auto px-4">
      <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to-r from-teal-400 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
          Your Remote Team
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-2">
          Flexibility You Want
        </h1>
        <h2 className="text-3xl md:text-2xl font-bold text-indigo-900 mb-4">
          Human support you need
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          With Metana's bootcamp, you can upskill for a new career without
          quitting your job. You're not alone—we're here for you from enrollment
          to graduation and beyond! Learn on your terms with dedicated pros by
          your side.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {options.map((option, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden border ${
              option.highlighted
                ? "border-teal-500 ring-2 ring-teal-300 bg-teal-50 shadow-lg scale-105 transform"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <div
              className={`p-6 ${
                option.highlighted ? "bg-teal-100" : "bg-gray-50"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {option.title}
              </h3>
              <h4 className="text-2xl font-bold text-gray-800 mt-2">
                {option.price}
              </h4>
              <p className="text-sm text-gray-500">{option.subtitle}</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                        <CheckCircle size={20} className="text-white" />
                      </div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Logos Section */}
            {option.logos && (
              <div className="p-6 flex justify-center gap-4">
                {option.logos.map((logo, logoIndex) => (
                  <img
                    key={logoIndex}
                    src={logo}
                    alt={`Logo ${logoIndex + 1}`}
                    className="h-[44px] w-auto object-contain"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
