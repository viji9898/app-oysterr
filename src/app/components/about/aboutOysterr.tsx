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
          Be Metana Certified
        </h2>
        <p className="text-gray-700 text-lg text-center mb-16">
          Metana's skills certifications are a set of free certification tests
          open to all developers. Designed to help you grow your career,
          Metana’s skills certifications are a recognizable way to showcase your
          technical knowledge to your network, your peers, and potential
          employers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Stand out from the crowd
            </h3>
            <p className="text-gray-600">
              Get certified in technical skills by taking the Metana’s Skills
              Certification Test
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Standardized Assessment
            </h3>
            <p className="text-gray-600">
              Assessments are organized around specific skills and are carefully
              curated based on years of recruiting data from 2000+ companies
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Enrich your profile
            </h3>
            <p className="text-gray-600">
              Upon successfully clearing an assessment, you can promote yourself
              using the Metana's certificate to peers and employers
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
