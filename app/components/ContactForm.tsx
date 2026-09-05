"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT_PROJECT_TYPES } from "../lib/contactProjectTypes";
import {
  LEADFLOW_INTEREST_QUERY,
  LEADFLOW_PROJECT_TYPE,
} from "../lib/siteConstants";

type ContactFormProps = {
  defaultProjectType?: string;
};

export default function ContactForm({
  defaultProjectType,
}: ContactFormProps = {}) {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialProjectType = useMemo(() => {
    if (
      defaultProjectType &&
      CONTACT_PROJECT_TYPES.includes(
        defaultProjectType as (typeof CONTACT_PROJECT_TYPES)[number],
      )
    ) {
      return defaultProjectType;
    }

    const interest = searchParams.get("interest")?.trim().toLowerCase();
    if (interest === LEADFLOW_INTEREST_QUERY) {
      return LEADFLOW_PROJECT_TYPE;
    }

    return "";
  }, [defaultProjectType, searchParams]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const projectType = String(data.get("project-type") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !projectType || !message) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(
          result.error ?? "Could not send your message. Please try again.",
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (sendError) {
      setError(
        sendError instanceof Error
          ? sendError.message
          : "Could not send your message. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-orange-300/25 bg-orange-400/10 p-8 text-center backdrop-blur">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/20">
          <span className="text-xl text-orange-300">✓</span>
        </div>
        <h3 className="text-lg font-semibold text-white">Message sent</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Thanks for reaching out. We received your inquiry and will get back to
          you shortly.
        </p>
        <button
          className="mt-6 rounded-full border border-white/12 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-orange-300/30 hover:bg-orange-400/10"
          onClick={() => {
            setSubmitted(false);
            setError(null);
          }}
          type="button"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      aria-label="Contact form"
      className="space-y-5"
      onSubmit={(event) => void handleSubmit(event)}
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
            disabled={isSending}
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
            disabled={isSending}
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
          defaultValue={initialProjectType}
          disabled={isSending}
          id="project-type"
          key={initialProjectType || "empty"}
          name="project-type"
          required
        >
          <option disabled value="">
            Select a project type
          </option>
          {CONTACT_PROJECT_TYPES.map((type) => (
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
          disabled={isSending}
          id="message"
          name="message"
          placeholder="Tell us about your project, goals, and timeline..."
          required
        />
      </div>

      {error && (
        <p className="text-sm text-orange-200" role="alert">
          {error}
        </p>
      )}

      <button
        className="w-full rounded-full bg-orange-300 px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-orange-400/20 transition hover:-translate-y-0.5 hover:bg-orange-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
        disabled={isSending}
        type="submit"
      >
        {isSending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
