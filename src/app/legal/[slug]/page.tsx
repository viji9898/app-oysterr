// File: app/book-a-call/page.tsx
"use client";
import React, { useState, useEffect } from "react";

const Legal = ({ slug = "terms-of-use" }) => {
  // Get current path from window.location or use the slug prop
  const [currentPath, setCurrentPath] = useState(`/legal/${slug}`);

  useEffect(() => {
    // Set the current path on mount
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const menuItems = [
    {
      text: "Terms of Use",
      href: "/legal/terms-of-use",
      slug: "terms-of-use",
    },
    {
      text: "Privacy Policy",
      href: "/legal/privacy-policy",
      slug: "privacy-policy",
    },
    {
      text: "Trial Terms And Conditions",
      href: "/legal/trial-terms-and-conditions",
      slug: "trial-terms-and-conditions",
    },
    // {
    //   text: "Withdrawal and Refund Policy",
    //   href: "/legal/withdrawal-and-refund-policy",
    //   slug: "withdrawal-and-refund-policy",
    // },
    {
      text: "Attributions & Credits",
      href: "/legal/attributions-and-credits",
      slug: "attributions-and-credits",
    },
    // {
    //   text: "Affiliate Program",
    //   href: "/legal/affiliate-program",
    //   slug: "affiliate-program",
    // },
  ];

  // Handle navigation
  const handleNavigation = (href: string) => {
    setCurrentPath(href);
    // You can implement custom navigation logic here
    // For example, using window.history.pushState for SPA behavior
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", href);
    }
  };

  // Content for different legal pages
  const getContent = () => {
    const path = currentPath.replace("/legal/", "");

    switch (path) {
      case "terms-of-use":
        return <TermsOfUseContent />;
      case "privacy-policy":
        return <PrivacyPolicyContent />;
      case "trial-terms-and-conditions":
        return <TrialTermsAndConditions />;
      case "withdrawal-and-refund-policy":
        return <WithdrawalRefundContent />;
      case "attributions-and-credits":
        return <AttributionsContent />;
      case "affiliate-program":
        return <AffiliateProgramContent />;
      default:
        return <TermsOfUseContent />;
    }
  };

  return (
    <div className="bg-white max-w-[1060px] items-center my-8 mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Menu - Fixed on desktop */}
          <div className="md:col-span-1">
            <div className="md:sticky md:top-8">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`text-base block w-full text-left ${
                        currentPath === item.href
                          ? "text-gray-900 font-medium"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      style={{ fontSize: "16px" }}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content - Scrollable */}
          <div className="md:col-span-3">{getContent()}</div>
        </div>
      </div>
    </div>
  );
};

// Content Components
const TermsOfUseContent = () => (
  <>
    <h1 className="text-3xl font-bold mb-4 text-gray-900">Terms of Use</h1>
    <p className="text-gray-600 mb-8">Effective Date: 11/05/2025</p>

    <div className="prose max-w-none">
      <p className="mb-6">
        Welcome to <strong>Oysterr Talent</strong> (“Oysterr”, “we”, “us”, or
        “our”). These Terms of Use (“Terms”) govern your use of the Oysterr
        Talent website, platform, and services (collectively, the “Services”).
        By accessing or using our Services, you agree to comply with and be
        bound by these Terms, along with our{" "}
        <a
          href="/legal/privacy-policy"
          className="text-blue-600 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Eligibility
      </h2>
      <p className="mb-6">
        You must be at least 18 years of age to access or use our Services. By
        using Oysterr Talent, you represent and warrant that you meet this
        requirement.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Services Provided
      </h2>
      <p className="mb-6">
        Oysterr Talent connects global companies with highly-skilled remote
        talent from Sri Lanka. Our services include talent sourcing, executive
        assistance, operations support, business development, and upskilling
        programs. We reserve the right to update or discontinue any service
        offering at our discretion.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        User Responsibilities
      </h2>
      <p className="mb-6">
        Clients must provide accurate job requirements and pay agreed-upon fees
        promptly. Talent must deliver tasks professionally and maintain
        integrity in representing their skills. Misuse of the platform may lead
        to suspension or termination.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Payment Terms
      </h2>
      <p className="mb-6">
        Payment terms for clients and talent engagements will be outlined in
        individual contracts. All fees are payable in accordance with those
        agreements. Oysterr reserves the right to adjust pricing with prior
        notice.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Confidentiality
      </h2>
      <p className="mb-6">
        All parties agree to maintain confidentiality of any non-public
        information shared in the course of an engagement through Oysterr
        Talent.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Intellectual Property
      </h2>
      <p className="mb-6">
        The content, branding, and materials on our platform are owned by
        Oysterr Talent or our partners. You may not use or reproduce any content
        without prior written permission.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Limitation of Liability
      </h2>
      <p className="mb-6">
        To the maximum extent permitted by law, Oysterr Talent is not liable for
        indirect, incidental, or consequential damages arising from your use of
        our Services.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Termination
      </h2>
      <p className="mb-6">
        We reserve the right to suspend or terminate your access to our Services
        if you violate these Terms. You may terminate your use by ceasing access
        at any time.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Governing Law
      </h2>
      <p className="mb-6">
        These Terms are governed by the laws of Sri Lanka. Any disputes shall be
        resolved in the courts of Colombo, Sri Lanka.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contact</h2>
      <p className="mb-6">
        If you have any questions about these Terms, please contact us at{" "}
        <a
          href="mailto:legal@oysterrtalent.com"
          className="text-blue-600 hover:underline"
        >
          legal@oysterrtalent.com
        </a>
        .
      </p>
    </div>
  </>
);

const PrivacyPolicyContent = () => (
  <>
    <h1 className="text-3xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
    <p className="text-gray-600 mb-8">Effective Date: 11/05/2025</p>

    <div className="prose max-w-none">
      <p className="mb-6">
        This Privacy Policy explains how <strong>Oysterr Talent</strong>{" "}
        (“Oysterr”, “we”, “us”, or “our”) collects, uses, and protects your
        personal data when you access or use our website, platform, and related
        services (“Services”).
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Information We Collect
      </h2>
      <p className="mb-6">
        We may collect the following types of personal information:
      </p>
      <ul className="mb-6 list-disc pl-6">
        <li>Full name, email address, and phone number</li>
        <li>Resume, LinkedIn URL, and other professional details</li>
        <li>Client company name and contact details</li>
        <li>Usage data such as browser type, IP address, and activity logs</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        How We Use Your Information
      </h2>
      <p className="mb-6">We use your data to:</p>
      <ul className="mb-6 list-disc pl-6">
        <li>Provide and improve our Services</li>
        <li>Match talent with client requirements</li>
        <li>
          Communicate updates, job opportunities, and important notifications
        </li>
        <li>Comply with legal and regulatory obligations</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Data Sharing and Disclosure
      </h2>
      <p className="mb-6">
        We do not sell your personal data. We may share your information with:
      </p>
      <ul className="mb-6 list-disc pl-6">
        <li>Clients, for the purpose of talent sourcing</li>
        <li>Our trusted partners and service providers under NDA</li>
        <li>Authorities when required by law</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Data Storage and Security
      </h2>
      <p className="mb-6">
        We store your data on secure servers with industry-standard encryption
        and access controls. While we strive to protect your information, no
        system is completely secure.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Your Rights
      </h2>
      <p className="mb-6">
        You may request to access, correct, update, or delete your personal data
        by contacting us at{" "}
        <a
          href="mailto:legal@oysterrtalent.com"
          className="text-blue-600 hover:underline"
        >
          legal@oysterrtalent.com
        </a>
        . We will respond in accordance with applicable laws.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Cookies</h2>
      <p className="mb-6">
        Our website may use cookies and similar technologies to enhance your
        browsing experience. You can control cookie settings via your browser.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Third-Party Links
      </h2>
      <p className="mb-6">
        Our platform may contain links to external sites. We are not responsible
        for the privacy practices of these third-party websites.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Policy Updates
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contact</h2>
      <p className="mb-6">
        For any privacy-related questions or requests, please contact us at{" "}
        <a
          href="mailto:legal@oysterrtalent.com"
          className="text-blue-600 hover:underline"
        >
          legal@oysterrtalent.com
        </a>
        .
      </p>
    </div>
  </>
);

const TrialTermsAndConditions = () => (
  <>
    <h1 className="text-3xl font-bold mb-4 text-gray-900">
      Trial Terms & Conditions
    </h1>
    <p className="text-gray-600 mb-8">Effective Date: 11/05/2025</p>

    <div className="prose max-w-none">
      <p className="mb-6">
        These Terms and Conditions (“Trial Terms”) govern the 2-week trial
        period offered by <strong>Oysterr Talent</strong> (“Oysterr”, “we”,
        “our”, or “us”) to new clients (“Client” or “you”) who enter into a
        3-month service agreement. These Trial Terms supplement the general
        Terms of Use and Service Agreement and shall prevail in case of any
        conflict related to the trial.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        1. Trial Duration & Eligibility
      </h2>
      <p className="mb-6">
        The trial period lasts for fourteen (14) calendar days, commencing from
        the official start date of service delivery. The trial is available to
        new clients only and applies to engagements with a minimum term of three
        (3) months.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        2. Agreement Requirement
      </h2>
      <p className="mb-6">
        Clients must execute a 3-month service agreement prior to the start of
        the trial. The agreement will outline scope, pricing, role
        specifications, and all commercial terms.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        3. No Payment During Trial
      </h2>
      <p className="mb-6">
        No payment is required during the trial period. Billing will only begin
        after the 14-day trial ends, contingent on continuation of the service
        beyond the trial window.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        4. Cancellation During Trial
      </h2>
      <p className="mb-6">
        The Client may terminate the service within the trial period by
        providing written notice before the end of Day 14. If such notice is not
        received by Oysterr, it will be deemed that the Client wishes to
        continue the service, and standard billing will begin on Day 15.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        5. Post-Trial Billing
      </h2>
      <p className="mb-6">
        Billing will commence on Day 15 of the engagement and will follow the
        payment schedule outlined in the service agreement. By default, billing
        is monthly unless otherwise agreed.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        6. Termination After Trial
      </h2>
      <p className="mb-6">
        If the Client chooses to terminate the service after the trial:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          Between Day 15 and the end of Month 1: Client is liable for one full
          month of service fees.
        </li>
        <li>
          After Month 1: Client must provide thirty (30) days’ written notice.
          Billing will continue through the notice period.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        7. Refund Policy
      </h2>
      <p className="mb-6">
        No payment is collected during the trial, and thus no refunds apply.
        After billing begins:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>No refunds will be issued for the current billing cycle.</li>
        <li>
          Clients may be eligible for a pro-rated refund only if prepaid beyond
          the notice period and service is discontinued early.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        8. Service Continuation Assumption
      </h2>
      <p className="mb-6">
        If no cancellation is communicated before the end of the trial period,
        the Client is deemed to have accepted the service and the associated
        terms, and the agreement enters into full effect with applicable
        billing.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">9. Contact</h2>
      <p className="mb-6">
        For questions regarding the trial or to submit written cancellation,
        please email us at{" "}
        <a
          href="mailto:hello@oysterrtalent.com"
          className="text-blue-600 hover:underline"
        >
          hello@oysterrtalent.com
        </a>
        .
      </p>
    </div>
  </>
);

const WithdrawalRefundContent = () => (
  <>
    <h1 className="text-3xl font-bold mb-4 text-gray-900">
      Withdrawal and Refund Policy
    </h1>
    <p className="text-gray-600 mb-8">Date of Publication: 12/09/2024</p>

    <div className="prose max-w-none">
      <p className="mb-6">
        This policy outlines the terms and conditions for withdrawals and
        refunds from Metana programs.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Withdrawal Period
      </h2>

      <p className="mb-6">
        Students may withdraw from their program within 14 days of enrollment
        and receive a full refund of all tuition paid, minus any non-refundable
        fees.
      </p>

      {/* Additional Withdrawal and Refund content would go here */}
    </div>
  </>
);

const AttributionsContent = () => (
  <>
    <h1 className="text-3xl font-bold mb-4 text-gray-900">
      Attributions & Credits
    </h1>
    <p className="text-gray-600 mb-8">Effective Date: 11/05/2025</p>

    <div className="prose max-w-none">
      <p className="mb-6">
        At <strong>Oysterr Talent</strong>, we believe in acknowledging the work
        and creativity of others. Our platform and brand were inspired in part
        by the thoughtful design and structure of{" "}
        <a
          href="https://metana.io"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Metana.io
        </a>
        , and we extend our sincere thanks to their team.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Fonts</h2>

      <p className="mb-2">
        <strong>Maven Pro</strong>
        <br />
        Maven Pro is used in our branding and visual materials. It is licensed
        under the SIL Open Font License (OFL), which permits commercial and
        non-commercial use, modification, and redistribution.
      </p>

      <p className="mb-6">
        <strong>Lexend Deca</strong>
        <br />
        Lexend Deca is used across our site for its modern and accessible look.
        It is also licensed under the SIL Open Font License (OFL).
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Illustrations
      </h2>

      <p className="mb-6">
        We use vibrant and engaging illustrations from{" "}
        <a
          href="https://storyset.com/"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storyset
        </a>
        , which are made freely available for commercial use with attribution.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Commitment to Creative Community
      </h2>

      <p className="mb-6">
        We appreciate and support the open-source and creative communities. By
        crediting these assets and inspirations, we hope to encourage
        responsible and respectful reuse of creative work.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contact Us</h2>

      <p className="mb-6">
        If you notice an asset on our platform that lacks attribution or you
        have questions about the resources we’ve used, please contact us at{" "}
        <a
          href="mailto:info@oysterrtalent.com"
          className="text-blue-600 hover:underline"
        >
          info@oysterrtalent.com
        </a>
        .
      </p>

      <p className="mb-6">
        Thank you to all the incredible designers, illustrators, and developers
        whose work enriches our platform.
      </p>
    </div>
  </>
);

const AffiliateProgramContent = () => (
  <>
    <h1 className="text-3xl font-bold mb-4 text-gray-900">Affiliate Program</h1>
    <p className="text-gray-600 mb-8">Date of Publication: 12/09/2024</p>

    <div className="prose max-w-none">
      <p className="mb-6">
        Welcome to the Metana Affiliate Program. This program allows partners to
        earn commissions by referring students to our courses.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
        Program Overview
      </h2>

      <p className="mb-6">
        As a Metana affiliate, you can earn competitive commissions for each
        student you refer who enrolls in one of our programs.
      </p>

      {/* Additional Affiliate Program content would go here */}
    </div>
  </>
);

export default Legal;
