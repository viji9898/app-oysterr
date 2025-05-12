"use client"; // Only needed for Next.js App Router with client components

import { useEffect, useState } from "react";

const OfferDeadline: React.FC = () => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1); // Move to next month
    date.setDate(15); // Set to 15th
    const formatted = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    setFormattedDate(formatted);
  }, []);

  return (
    <span>
      <span className="bg-yellow-300 px-1 font-semibold">{formattedDate}</span>{" "}
      to get <span className="font-bold">20% OFF!</span>
    </span>
  );
};

export default OfferDeadline;
