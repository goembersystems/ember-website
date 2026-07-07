"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "AI Automation",
  "Custom Website",
  "Internal Dashboard",
  "Custom Software",
  "Lead Capture System",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-orange-300/25 bg-orange-400/10 p-8 text-center backdrop-blur">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/20">
          <span className="text-xl text-orange-300">✓</span>
        </div>
        <h3 className="text-lg font-semibold text-white">Message received</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Thanks for reaching out. We&apos;ll review your project details and get
          back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-sm font-medium text-zinc-300"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-300/40 focus:ring-2 focus:ring-orange-400/20"
            id="name"
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-zinc-300"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-300/40 focus:ring-2 focus:ring-orange-400/20"
            id="email"
            name="email"
            placeholder="you@company.com"
            required
            type="email"
          />
        </div>
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-zinc-300"
          htmlFor="project-type"
        >
          Project type
        </label>
        <select
          className="w-full appearance-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-300/40 focus:ring-2 focus:ring-orange-400/20"
          defaultValue=""
          id="project-type"
          name="project-type"
          required
        >
          <option disabled value="">
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-zinc-300"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="min-h-32 w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-300/40 focus:ring-2 focus:ring-orange-400/20"
          id="message"
          name="message"
          placeholder="Tell us about your project, goals, and timeline..."
          required
        />
      </div>

      <button
        className="w-full rounded-full bg-orange-300 px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-orange-400/20 transition hover:-translate-y-0.5 hover:bg-orange-200 sm:w-auto"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
