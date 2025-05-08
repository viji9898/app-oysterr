"use client";

import { motion } from "framer-motion";

const wordsLine1 = [
  "Build your dream team – risk free.",
  "Hire elite remote talent, fast.",
  "Remote pros for high-growth teams.",
  "Scale your ops without the overhead.",
];

const wordsLine2 = [
  "We find, train, and manage talent.",
  "Your next hire in 7 days.",
  "Startup-ready talent, on demand.",
  "Executive assistants. Sales. Operations.",
];

export default function WordScroll() {
  return (
    <div className="overflow-hidden text-white py-8 space-y-6">
      {/* Top scroll: L→R */}
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {wordsLine1.concat(wordsLine1).map((text, idx) => (
          <h2
            key={`line1-${idx}`}
            className="text-[125px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-200"
          >
            <strong>{text}</strong>
          </h2>
        ))}
      </motion.div>

      {/* Bottom scroll: R→L */}
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {wordsLine2.concat(wordsLine2).map((text, idx) => (
          <h2
            key={`line2-${idx}`}
            className="text-[125px] font-bold text-transparent"
            style={{
              WebkitTextStroke: "2px #4f46e5", // Indigo-600
              color: "transparent",
            }}
          >
            {text}
          </h2>
        ))}
      </motion.div>
    </div>
  );
}
