"use client";

import { useEffect, useState } from "react";
import { CONTACT_SECTION_ID } from "../lib/siteConstants";

export default function StickyConsultationButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      aria-label="Book a free consultation"
      className={`fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-orange-300 px-5 py-3 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(251,146,60,0.35)] transition-all duration-300 hover:bg-orange-200 sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      href={`#${CONTACT_SECTION_ID}`}
    >
      Book a Free Consultation
    </a>
  );
}
