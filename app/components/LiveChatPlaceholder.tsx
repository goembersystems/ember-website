"use client";

import { useState } from "react";

export default function LiveChatPlaceholder() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-[65] sm:bottom-8 sm:left-8">
      {open && (
        <div className="mb-3 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl shadow-black/50 backdrop-blur">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white">Ember Systems</p>
              <p className="mt-1 text-xs text-zinc-500">Live chat coming soon</p>
            </div>
            <button
              aria-label="Close chat"
              className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-zinc-400 transition hover:text-white"
              onClick={() => setOpen(false)}
              type="button"
            >
              ✕
            </button>
          </div>
          <p className="rounded-xl border border-white/8 bg-white/[0.03] p-3 text-sm leading-6 text-zinc-400">
            Prefer to talk now? Book a free consultation or send a message —
            this chat widget is a placeholder for a future live chat
            integration.
          </p>
          <a
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-orange-300 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-200"
            href="#consultation"
            onClick={() => setOpen(false)}
          >
            Book a Free Consultation
          </a>
        </div>
      )}

      <button
        aria-expanded={open}
        aria-label="Open live chat placeholder"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-300/30 bg-orange-300 text-black shadow-lg shadow-orange-500/25 transition hover:bg-orange-200"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span aria-hidden="true" className="text-lg">
          {open ? "✕" : "💬"}
        </span>
      </button>
    </div>
  );
}
