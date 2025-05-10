import React from "react";

const FAQSection: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto mt-16 text-left">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <details key={index} className="group bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer text-lg font-medium text-gray-800 group-open:mb-2">
              {item.question}
            </summary>
            <p className="text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: "What is Oysterr?",
    answer:
      "Oysterr is a talent solutions provider that connects businesses with vetted professionals worldwide across executive assistance, operations, marketing, finance, and software engineering roles. Our mission is to empower businesses with access to top-tier global talent through flexible and scalable services.",
  },
  {
    question: "How does the Oysterr talent matching process work?",
    answer:
      "We begin with a discovery call to understand your unique needs and team dynamics. Then, we match you with talent that aligns with your specific goals and culture. Our process ensures that each professional we recommend has been thoroughly vetted to meet our high standards.",
  },
  {
    question: "What types of roles can Oysterr provide?",
    answer:
      "Oysterr offers a range of roles, including Executive Assistants, Operations Managers, Marketing and Creative Specialists, Accountants, and Software Engineers. Our talent pool includes experts in various fields and industries, so we can find the right fit for most business functions.",
  },
  {
    question: "Can I hire part-time or for projects?",
    answer:
      "Yes! We offer flexible engagement models to suit your needs, including part-time, full-time, and project-based options. This flexibility allows you to scale your team according to your business demands.",
  },
  {
    question: "What makes Oysterr different?",
    answer:
      "Oysterr goes beyond staffing by providing a tailored approach, emphasizing a seamless integration of talent into your business. Our focus is on long-term partnerships, high-quality service, and supporting client success through each stage of growth.",
  },
  {
    question: "What if I’m not satisfied with the talent?",
    answer:
      "Client satisfaction is our priority. If, for any reason, you feel that a professional doesn’t meet your expectations, we will work with you to resolve the issue and provide a suitable replacement as needed.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing varies based on the role, level of experience, and engagement type (part-time, full-time, or project-based). We offer competitive rates and can tailor a solution to fit your budget. For a personalized quote, please contact us.",
  },
  {
    question: "What is the onboarding process like?",
    answer:
      "Our onboarding process is designed for smooth integration. We facilitate introductions, provide relevant information, and help ensure that your new team member understands your objectives. Throughout the onboarding, we’re available to address any questions or adjustments.",
  },
  {
    question: "Is there post-onboarding support?",
    answer:
      "Absolutely! Oysterr provides ongoing support to ensure the success of the talent we place with you. We offer resources, guidance, and regular check-ins to ensure alignment with your goals.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy. Simply contact us for a discovery call, where we’ll discuss your needs, answer any questions, and help you find the best solution to drive your business forward.",
  },
];

export default FAQSection;
//
