import Image from "next/image";
import HeroSection from "./components/Hero";
import WordScroll from "./components/WordScroll";
import SpringPromoBookingForm from "./components/booking/SpringPromoBookingForm";
import SuccessStories from "./components/successStories/successStories";
import RiskFree from "./components/riskFree/riskFree";
import TalentExperience from "./components/talentExperience/TalentExperience";
import Pricing from "./components/pricing/Pricing";
import AboutOysterr from "./components/about/aboutOysterr";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <div className="mt-[80px]">
      {/* Top sections without gradient */}
      {/* <HeroSection /> */}
      <Hero />
      <TalentExperience />
      <AboutOysterr />
      <RiskFree />
      <Pricing />
      <SuccessStories />
      <WordScroll />
      {/* Sections with gradient background */}
      <div className="relative">
        {/* Gradient background - light blue to white */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-blue-100 to-white -z-10"></div>

        {/* Triangle shape divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-24"
          >
            <path fill="white" d="M738,99l262-93V0H0v5.6L738,99z"></path>
          </svg>
        </div>

        {/* Content sections that will have the gradient background */}
        <div className="pt-20">
          <SpringPromoBookingForm />

          {/* Add any other sections that should have the gradient background */}
        </div>
      </div>
    </div>
  );
}
