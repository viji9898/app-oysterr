// File: components/layout/Footer.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="mx-auto px-4 max-w-[1060px] my-8">
        {/* Top section with address and contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Address */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase mb-4">
              ADDRESS
            </h3>
            <p className="text-gray-900 font-medium mb-2">
              Soho Works Shoreditch
            </p>
            <p className="text-gray-900 font-medium mb-8">
              56 Shoreditch High St, London E1 6JJ, UK
            </p>

            {/* Newsletter subscription */}
            <div className="max-w-md">
              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <button className="bg-yellow-300 hover:bg-yellow-400 px-6 py-2 font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase mb-4">
              CONTACT US
            </h3>

            <div className="mb-8">
              <p className="text-gray-900 font-medium mb-2">Call us directly</p>
              <p className="text-gray-900 mb-4">
                (+44) 77 23 77 23 77 | (0208) 670 1517
              </p>
            </div>

            {/* <div className="mb-8">
              <p className="text-gray-900 font-medium mb-2">
                For questions about bootcamps, tuition and admissions:
              </p>
              <a
                href="mailto:admissions@metana.io"
                className="text-gray-900 hover:text-blue-600"
              >
                admissions@metana.io
              </a>
            </div> */}

            <div>
              <p className="text-gray-900 font-medium mb-2">
                For general inquiries, including press and partnership
                opportunities.
              </p>
              <a
                href="mailto:hello@oysterrTalent.com"
                className="text-gray-900 hover:text-blue-600"
              >
                hello@oysterrTalent.com
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company links */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase mb-6">
              COMPANY
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link
                href="/tuition"
                className="text-gray-700 hover:text-blue-600"
              >
                Tuition
              </Link>
              <Link
                href="/job-guarantee"
                className="text-gray-700 hover:text-blue-600"
              >
                Metana's Job Guarantee
              </Link>
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600">
                Jobs at Metana
              </Link>
              <Link href="/refer" className="text-gray-700 hover:text-blue-600">
                Refer a friend
              </Link>
              <Link
                href="/student-perks"
                className="text-gray-700 hover:text-blue-600"
              >
                Student Perks
              </Link>
              <Link
                href="/testimonials"
                className="text-gray-700 hover:text-blue-600"
              >
                Testimonials
              </Link>
              <Link
                href="/outcomes-report"
                className="text-gray-700 hover:text-blue-600"
              >
                2024 Outcomes Report
              </Link>
              <Link
                href="/lms-login"
                className="text-gray-700 hover:text-blue-600"
              >
                LMS login
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 border border-purple-300 rounded-full py-2 px-6 inline-block mt-4 text-center"
              >
                Still Unsure?
              </Link>
            </nav>
          </div>

          {/* Bootcamp links */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase mb-6">
              BOOTCAMP
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/bootcamps/coding"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Coding Bootcamps
              </Link>
              <Link
                href="/bootcamps/software-engineering"
                className="text-gray-700 hover:text-blue-600 pl-2"
              >
                - Software Engineering Bootcamp
              </Link>
              <Link
                href="/bootcamps/software-engineering-career"
                className="text-gray-700 hover:text-blue-600 pl-2"
              >
                - Software Engineering Career Accelerator
              </Link>

              <Link
                href="/bootcamps/web3"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Web3 Bootcamps
              </Link>
              <Link
                href="/bootcamps/solidity"
                className="text-gray-700 hover:text-blue-600 pl-2"
              >
                - Solidity Bootcamp
              </Link>
              <Link
                href="/bootcamps/web3-beginner"
                className="text-gray-700 hover:text-blue-600 pl-2"
              >
                - Web3 Beginner Bootcamp
              </Link>
              <Link
                href="/bootcamps/rust"
                className="text-gray-700 hover:text-blue-600 pl-2"
              >
                - Rust Bootcamp
              </Link>

              <Link
                href="/bootcamps/data-ai"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Data + AI bootcamps
              </Link>
              <Link
                href="/bootcamps/data-analytics"
                className="text-gray-700 hover:text-blue-600 pl-2"
              >
                - Data Analytics Bootcamp
              </Link>
              <Link
                href="/bootcamps/data-science"
                className="text-gray-700 hover:text-blue-600 pl-2"
              >
                - Data Science Bootcamp
              </Link>
              <Link
                href="/bootcamps/ai-ml"
                className="text-gray-700 hover:text-blue-600 pl-2"
              >
                - AI/ML Bootcamp
              </Link>

              <Link
                href="/bootcamps/ux-ui"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                UX/UI Design Bootcamp
              </Link>
              <Link
                href="/bootcamps/cybersecurity"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Cybersecurity Bootcamp
              </Link>
              <Link
                href="/bootcamps/jobcamp"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Jobcamp™ - Career Prep
              </Link>
            </nav>
          </div>

          {/* For businesses and legal links */}
          <div>
            <div className="mb-8">
              <h3 className="text-gray-500 text-sm font-medium uppercase mb-6">
                FOR BUSINESSES
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/business"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Business
                </Link>
                <Link
                  href="/business/hiring-partner"
                  className="text-gray-700 hover:text-blue-600"
                >
                  - Hiring Partner
                </Link>
                <Link
                  href="/business/upskill"
                  className="text-gray-700 hover:text-blue-600"
                >
                  - Upskill Your Team
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-gray-500 text-sm font-medium uppercase mb-6">
                LEGAL
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/terms"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Terms of Use
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/job-guarantee-policy"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Job Guarantee Policy
                </Link>
                <Link
                  href="/refund-policy"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Withdrawal and Refund Policy
                </Link>
                <Link
                  href="/credits"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Attributions & Credits
                </Link>
              </nav>
            </div>

            <div className="mt-8">
              <Image
                src="/images/carbon-neutral.svg"
                alt="Carbon Neutral"
                width={120}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* Bottom section with logo, disclaimer and social links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="mb-4">
                <Link href="/">
                  <Image
                    src="https://framerusercontent.com/images/8HskUPXIyNNIIjgzBDrugj5RME.png"
                    alt="Oysterr"
                    width={180}
                    height={50}
                  />
                </Link>
              </div>
              <p className="text-gray-600 text-sm max-w-2xl mb-2">
                Oysterr Talent connects global startups with exceptional remote
                professionals from Sri Lanka. We specialize in sourcing,
                onboarding, and managing talent across operations, admin, and
                business development—empowering teams to scale faster, leaner,
                and smarter.
              </p>
              <p className="text-gray-500 text-sm">
                © 2025 Oysterr Talent (Private) Limited
              </p>
            </div>

            <div className="flex space-x-4 items-start">
              {/* <a
                href="https://facebook.com/metanaio"
                aria-label="Facebook"
                className="text-gray-400 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
              {/* <a
                href="https://twitter.com/metanaio"
                aria-label="Twitter"
                className="text-gray-400 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a> */}
              <a
                href="https://www.linkedin.com/company/oysterr/"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* <a
                href="https://github.com/metanaio"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-gray-500 text-[12px]">
            <p>
              The information provided on this website is for general
              informational purposes only. While we strive to keep content
              accurate and up-to-date, Oysterr Talent makes no representations
              or warranties of any kind regarding the completeness or accuracy
              of the information. All services are subject to availability and
              formal engagement terms. Oysterr Talent does not accept liability
              for any loss or damage arising from the use of this website or its
              content.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
