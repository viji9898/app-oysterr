// components/ScrollIndicator.js
"use client";

import { useEffect, useState } from "react";
import ".././ScrollIndicator.css"; // Adjust the path as necessary

export default function ScrollIndicator() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollLeft / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lqd-top-scrol-ind">
      <span className="lqd-scrl-indc-inner">
        <span className="lqd-scrl-indc-line">
          <span
            className="lqd-scrl-indc-el"
            style={{
              transform: `scaleX(${scrollWidth / 100})`,
              transformOrigin: "left",
            }}
          ></span>
        </span>
      </span>
    </div>
  );
}
