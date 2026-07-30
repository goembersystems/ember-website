"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setHiding(true), 450);
    const removeTimer = window.setTimeout(() => setGone(true), 900);
    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ${
        hiding ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-pulse rounded-full bg-gradient-to-br from-orange-300 to-orange-600 shadow-[0_0_40px_rgba(251,146,60,0.45)]" />
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
          Ember Systems
        </p>
      </div>
    </div>
  );
}
