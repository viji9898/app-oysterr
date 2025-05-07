"use client";

import { motion } from "framer-motion";

const wordsLine1 = [
  "Get hired – or your money back, guaranteed.",
  "Join the #1 bootcamp for developers.",
  "Scale your business with elite talent.",
  "Tech skills that pay the bills.",
];

const wordsLine2 = [
  "We build your team – globally.",
  "Hire fast, hire smart.",
  "Upskill. Get noticed.",
  "Grow with top remote talent.",
];

export default function WordScroll() {
  return (
    <div className="overflow-hidden text-white py-8 space-y-6">
      {/* Top scroll: L→R */}
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {wordsLine1.concat(wordsLine1).map((text, idx) => (
          <h2
            key={`line1-${idx}`}
            className="text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-200"
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
            className="text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-200"
          >
            {text}
          </h2>
        ))}
      </motion.div>
    </div>
  );
}
