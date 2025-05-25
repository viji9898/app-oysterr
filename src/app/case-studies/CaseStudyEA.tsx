import React from "react";

const CaseStudyEA = () => {
  const metrics = [
    {
      metric: "CEO Deep Work Hours/Week",
      before: "6 hrs",
      after: "18 hrs",
      delta: "+200%",
    },
    {
      metric: "Follow-up Time Lag (avg)",
      before: "4 days",
      after: "<24 hrs",
      delta: "-85%",
    },
    {
      metric: "Missed Opportunities (Qtrly)",
      before: "3–5",
      after: "0–1",
      delta: "~70% ↓",
    },
    {
      metric: "Operational Efficiency Rating",
      before: "5.6/10",
      after: "9.2/10",
      delta: "+64%",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Case Study: The Impact of a High-Performance Executive Assistant
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Client Profile</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>
            <strong>Role:</strong> CEO & Founder
          </li>
          <li>
            <strong>Industry:</strong> Creative Agency / Startup
          </li>
          <li>
            <strong>Team Size:</strong> 10–25
          </li>
          <li>
            <strong>Pain Points:</strong> Admin overload, missed follow-ups, no
            time for strategy
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Objective</h2>
        <p className="mt-2 text-gray-600">
          Delegate essential but non-strategic work to a trusted EA so the
          founder can focus on growth, clients, and strategy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Tasks Delegated</h2>
        <ul className="space-y-6 mt-4 text-gray-600">
          <li>
            <strong>Calendar Management:</strong> The EA restructured the CEO's
            calendar to introduce 3-hour deep work blocks every morning, shifted
            meetings to specific days/times, and managed all rescheduling. This
            preserved focus time and eliminated back-and-forth emails.{" "}
            <em>
              Result: Over 12 hours/week of uninterrupted strategic time
              reclaimed.
            </em>
          </li>
          <li>
            <strong>Inbox Filtering:</strong> The EA set up filters, managed
            folders, and responded to low-priority emails directly using
            templated responses. They flagged only the high-impact or urgent
            threads for CEO review.{" "}
            <em>Result: 80% drop in daily inbox clutter.</em>
          </li>
          <li>
            <strong>Meeting Prep:</strong> Created concise briefing documents
            with attendee bios, agenda points, past communications, and key
            objectives. Shared meeting summaries and action points post-call.{" "}
            <em>
              Result: More productive, shorter meetings with clear takeaways.
            </em>
          </li>
          <li>
            <strong>Recruitment:</strong> Posted jobs, screened applicants using
            keyword filters and AI tools, coordinated interviews, and gathered
            feedback from hiring managers. Managed candidate communications
            professionally.{" "}
            <em>
              Result: Time-to-hire reduced by 40% and founder involvement
              minimized to final interview only.
            </em>
          </li>
          <li>
            <strong>Ops & Vendors:</strong> Maintained a vendor list with
            renewal dates, negotiated with SaaS providers and service vendors,
            flagged overages, and cancelled unused tools.{" "}
            <em>
              Result: Monthly recurring expenses optimized, yielding 8% savings.
            </em>
          </li>
          <li>
            <strong>Task Tracking:</strong> The EA used Notion to track and
            assign founder tasks, set internal deadlines, follow up on status,
            and surface blockers. They ran weekly updates for priority projects.{" "}
            <em>
              Result: Increased team accountability and reduced lag on
              high-priority items.
            </em>
          </li>
          <li>
            <strong>Travel Planning:</strong> Booked all business travel,
            including optimized flights, hotels close to meeting venues, and
            arranged local transportation. Created travel packets with calendar
            blocks, maps, and booking details.{" "}
            <em>Result: CEO could focus on meetings, not logistics.</em>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700">
          Quantified Outcomes
        </h2>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-2 px-4 border">Metric</th>
                <th className="text-left py-2 px-4 border">Before EA</th>
                <th className="text-left py-2 px-4 border">After EA</th>
                <th className="text-left py-2 px-4 border">Delta</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((row, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2 px-4 border text-gray-700 font-medium">
                    {row.metric}
                  </td>
                  <td className="py-2 px-4 border text-gray-600">
                    {row.before}
                  </td>
                  <td className="py-2 px-4 border text-gray-600">
                    {row.after}
                  </td>
                  <td className="py-2 px-4 border text-gray-600">
                    {row.delta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Testimonial</h2>
        <blockquote className="mt-2 italic text-gray-600 border-l-4 border-blue-400 pl-4">
          “Having my EA handle everything from emails to internal ops gave me
          back my brain. I’m finally doing the work only I can do — and doing it
          well.”
          <br />
          <span className="block mt-2 font-medium">
            &mdash; Founder, Creative Tech Startup
          </span>
        </blockquote>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700">Conclusion</h2>
        <p className="mt-2 text-gray-600">
          A world-class EA isn’t just a support role — they’re a productivity
          multiplier. They empower leaders to scale themselves and the business.
        </p>
      </section>
    </div>
  );
};

export default CaseStudyEA;
