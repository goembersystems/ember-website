import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "../components/ContactForm";
import EmberLogo from "../components/EmberLogo";
import LeadFlowDemoDashboard from "../components/leadflow/LeadFlowDemoDashboard";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import {
  CONTACT_SECTION_ID,
  J316_CONTRACTING_URL,
  LEADFLOW_INTEREST_QUERY,
  LEADFLOW_PATH,
  LEADFLOW_PROJECT_TYPE,
} from "../lib/siteConstants";

export const metadata: Metadata = {
  title: "Ember LeadFlow | Contractor Lead & Estimate System",
  description:
    "Ember LeadFlow is a lead and estimate system built for contractors and home-service businesses — capture website inquiries, photos, and follow-ups in one private dashboard.",
  alternates: {
    canonical: LEADFLOW_PATH,
  },
  keywords: [
    "contractor lead management",
    "contractor estimate system",
    "home service lead management",
    "contractor website lead system",
    "Oregon contractor website automation",
    "Ember LeadFlow",
    "Ember Systems",
  ],
  openGraph: {
    title: "Ember LeadFlow | Contractor Lead & Estimate System",
    description:
      "Turn website inquiries into organized jobs. LeadFlow captures estimate requests, photos, and follow-ups for contractors and home-service businesses.",
    url: LEADFLOW_PATH,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember LeadFlow | Contractor Lead & Estimate System",
    description:
      "A lead and estimate system built for contractors and home-service businesses.",
  },
};

const PROBLEMS = [
  {
    title: "Leads scattered everywhere",
    description:
      "Estimate requests land in texts, emails, voicemails, and sticky notes — with no single place to manage them.",
  },
  {
    title: "Missing project details",
    description:
      "Half-finished inquiries force more phone tag before you can even start an estimate.",
  },
  {
    title: "Photos arrive separately",
    description:
      "Customers send job photos through whatever channel is convenient — and they get lost.",
  },
  {
    title: "Forgotten follow-ups",
    description:
      "Without a clear next-step date, warm leads cool off while you are busy on the job site.",
  },
  {
    title: "No visible pipeline",
    description:
      "It is hard to see what is new, what needs an estimate, and what is already scheduled.",
  },
  {
    title: "Endless phone tag",
    description:
      "Incomplete intake means more back-and-forth before you know the real scope of work.",
  },
] as const;

const STEPS = [
  {
    title: "Customer submits an estimate request",
    description:
      "A multi-step form on your site captures the inquiry in a structured way.",
  },
  {
    title: "LeadFlow collects the details that matter",
    description:
      "Project type, budget range, timeline, location, description, and customer photos.",
  },
  {
    title: "Everyone gets notified",
    description:
      "Your business receives the lead. The customer receives an automatic confirmation email.",
  },
  {
    title: "The lead lands in a private dashboard",
    description:
      "Search, filter, and open each inquiry with the context you need to respond.",
  },
  {
    title: "Manage it through completion",
    description:
      "Update status, priority, notes, last-contact and next-follow-up dates from inquiry to finished job.",
  },
] as const;

const FEATURES = [
  {
    title: "Smart estimate forms",
    description:
      "Multi-step intake for project type, budget, timeline, address, and description.",
  },
  {
    title: "Photo uploads",
    description:
      "Customers attach job photos with the request so you see the site before the first call.",
  },
  {
    title: "Private dashboard",
    description:
      "Password-protected admin access to review and manage every lead in one place.",
  },
  {
    title: "Lead pipeline",
    description:
      "Statuses from New through Contacted, Estimate Sent, Scheduled, and Completed.",
  },
  {
    title: "Follow-up tracking",
    description:
      "Track last-contact and next-follow-up dates so nothing slips through the cracks.",
  },
  {
    title: "Customer email templates",
    description:
      "Send manual customer emails from simple templates without rewriting the same reply.",
  },
  {
    title: "Lead search & filter",
    description:
      "Find leads quickly by status, priority, or the details you already captured.",
  },
  {
    title: "Business notifications",
    description:
      "Get notified when a new estimate request comes in so you can respond faster.",
  },
  {
    title: "Mobile-friendly management",
    description:
      "Review leads and update status from the phone when you are between jobs.",
  },
  {
    title: "Secure access",
    description:
      "Private lead storage with persistent photo storage and password-protected admin entry.",
  },
] as const;

const AUDIENCES = [
  "General contractors",
  "Remodelers",
  "Plumbers",
  "HVAC",
  "Electricians",
  "Painters",
  "Landscapers",
  "Excavators",
  "Concrete contractors",
  "Fence & deck companies",
  "Roofing",
  "Garage door companies",
  "Tree services",
  "Other home-service businesses",
] as const;

const PACKAGES = [
  {
    name: "LeadFlow",
    tagline: "For businesses that already have a website",
    description:
      "Structured estimate intake, private lead dashboard, notifications, and follow-up workflow — built around how your crew actually works.",
    includes: [
      "Multi-step estimate request form",
      "Photo uploads & private storage",
      "Lead dashboard with pipeline statuses",
      "Business + customer email notifications",
      "Follow-up dates, notes, and priority",
    ],
  },
  {
    name: "Website + LeadFlow",
    tagline: "For businesses that need both",
    description:
      "A modern contractor website paired with LeadFlow so marketing and lead management work as one system from day one.",
    includes: [
      "Custom business website",
      "Estimate request integrated on-site",
      "Full LeadFlow dashboard & workflow",
      "Launch support and handoff",
      "Optional hosting, support, and automation",
    ],
  },
] as const;

const contactWithInterest = `/?interest=${LEADFLOW_INTEREST_QUERY}#${CONTACT_SECTION_ID}`;

export default function LeadFlowPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-amber-400/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_100%,64px_64px,64px_64px]" />
      </div>

      <SiteHeader variant="leadflow" />

      <div className="relative mx-auto w-full max-w-7xl overflow-x-hidden px-5 sm:px-8 lg:px-12">
        {/* Hero */}
        <section className="flex min-h-[calc(100vh-5rem)] items-center py-16 sm:py-28">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-400/10 px-4 py-2 text-sm text-orange-100 backdrop-blur sm:mb-8">
              <span className="h-2 w-2 animate-soft-float rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.9)]" />
              Ember LeadFlow
            </div>

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-orange-300/90 sm:text-sm sm:tracking-[0.22em]">
              Built for contractors &amp; home-service businesses
            </p>

            <h1 className="text-balance bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-transparent sm:text-5xl sm:leading-none lg:text-6xl">
              Turn website inquiries into organized jobs.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:mt-7 sm:text-lg sm:leading-8">
              Ember LeadFlow gives contractors one place to capture estimate
              requests, photos, customer details, and follow-ups — without
              digging through texts, emails, and voicemails.
            </p>

            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                className="group inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-orange-500/15 transition hover:-translate-y-0.5 hover:bg-orange-100 sm:w-auto sm:px-7"
                href="#demo"
              >
                See LeadFlow in Action
                <span className="ml-1.5 inline-block transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300/30 hover:bg-orange-400/10 sm:w-auto sm:px-7"
                href="#how-it-works"
              >
                View How It Works
              </a>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="scroll-mt-24 pb-8 sm:pb-12" id="positioning">
          <Reveal>
            <div className="rounded-3xl border border-orange-300/20 bg-orange-400/[0.07] px-6 py-8 text-center sm:px-10 sm:py-10">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Built around your business.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-7 text-zinc-300 sm:text-base">
                Ember connects LeadFlow to your website and configures the
                estimate intake, project fields, lead stages, and follow-up
                workflow around the way your company actually works — not a
                generic off-the-shelf CRM.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Problem */}
        <section className="scroll-mt-24 py-20 sm:py-28" id="problem">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                The Problem
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Stop losing estimate requests in the noise.
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-400">
                Most contractors do not need another generic CRM. They need a
                clear path from website inquiry to completed job.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((item, index) => (
              <Reveal delayMs={index * 60} key={item.title}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:border-orange-300/25 sm:p-6">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="scroll-mt-24 py-20 sm:py-28" id="how-it-works">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur sm:p-8 lg:p-12">
              <div className="mb-8 max-w-2xl sm:mb-12">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                  How It Works
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  From estimate request to finished job.
                </h2>
              </div>

              <ol className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-5">
                {STEPS.map((step, index) => (
                  <li
                    className="relative rounded-2xl border border-white/8 bg-black/40 p-4 sm:p-5"
                    key={step.title}
                  >
                    <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-400/15 text-sm font-semibold text-orange-300">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </section>

        {/* Features */}
        <section className="scroll-mt-24 py-20 sm:py-28" id="features">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                Features
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Everything you need to run the inquiry — not a bloated CRM.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <Reveal delayMs={(index % 3) * 70} key={feature.title}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-orange-300/25 hover:bg-orange-400/[0.06] sm:p-6">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
                    {feature.description}
                  </p>
                  <div className="mt-6 h-px w-10 bg-gradient-to-r from-orange-400/80 to-transparent transition group-hover:w-16" />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Audiences */}
        <section className="scroll-mt-24 py-16 sm:py-20" id="who-its-for">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 sm:px-10">
              <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                Built for
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {AUDIENCES.map((item) => (
                  <span
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-300 sm:px-4 sm:py-2 sm:text-sm"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Case study */}
        <section className="scroll-mt-24 py-20 sm:py-28" id="case-study">
          <Reveal>
            <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
              <div className="relative flex min-h-40 items-end bg-gradient-to-br from-orange-500/25 via-orange-900/20 to-black p-6 sm:min-h-48 sm:p-8">
                <div className="pointer-events-none absolute inset-0 opacity-40">
                  <div className="absolute -right-8 top-4 h-28 w-28 rounded-full bg-orange-300/20 blur-2xl" />
                </div>
                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange-200/80">
                    Real-world implementation
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                    First built for J3:16 Contracting
                  </h2>
                </div>
              </div>

              <div className="space-y-5 p-5 sm:p-8">
                <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                  Originally built for J3:16 Contracting, LeadFlow replaced a
                  basic website inquiry process with structured estimate intake
                  and a private lead-management dashboard.
                </p>
                <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                  The production system demonstrates the core LeadFlow workflow
                  in a real contractor business — without inventing results we
                  cannot prove.
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Website estimate intake",
                    "Customer and project information",
                    "Photo uploads",
                    "Lead organization",
                    "Status tracking",
                    "Follow-up information",
                    "Customer email workflow",
                  ].map((item) => (
                    <li
                      className="flex gap-2.5 text-sm text-zinc-300"
                      key={item}
                    >
                      <span aria-hidden="true" className="text-orange-300">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-200 sm:w-auto"
                  href={J316_CONTRACTING_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit J3:16 Contracting
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </Reveal>
        </section>

        {/* Visual demo */}
        <section className="scroll-mt-24 py-20 sm:py-28" id="demo">
          <Reveal>
            <div className="mb-8 max-w-3xl sm:mb-10">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                Product Demo
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Interactive LeadFlow Demo
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-400">
                Sample data — explore how the system works. Stats, leads, and
                revenue figures below are fictional examples for demonstration
                only — not real customer information.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="rounded-[1.75rem] border border-orange-300/25 bg-gradient-to-b from-orange-400/[0.08] to-transparent p-1.5 shadow-[0_0_60px_rgba(251,146,60,0.12)] sm:p-2">
              <LeadFlowDemoDashboard />
            </div>
          </Reveal>
        </section>

        {/* Packages */}
        <section className="scroll-mt-24 py-20 sm:py-28" id="packages">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                Packages
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Built around your business — not a one-size plan.
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-400">
                Pricing is scoped to your workflows, website needs, and
                integrations. Optional ongoing hosting, support, and automation
                are available after launch.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {PACKAGES.map((pkg, index) => (
              <Reveal delayMs={index * 90} key={pkg.name}>
                <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur sm:p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
                    {pkg.name}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                    {pkg.tagline}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {pkg.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.includes.map((item) => (
                      <li
                        className="flex gap-3 text-sm text-zinc-300"
                        key={item}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 text-orange-300"
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-sm font-semibold text-white">
                    Custom quote · starting project based on scope
                  </p>
                  <a
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-orange-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-200 sm:w-auto"
                    href={`#${CONTACT_SECTION_ID}`}
                  >
                    Request a quote
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA + contact */}
        <section className="scroll-mt-24 py-20 sm:py-28" id={CONTACT_SECTION_ID}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Reveal>
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                  Next Step
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Let&apos;s build LeadFlow around your business.
                </h2>
                <p className="mt-4 max-w-md text-base leading-7 text-zinc-400">
                  Ember can combine your website, estimate intake, lead
                  organization, and follow-up workflow into one custom system —
                  configured for how your company actually works. This is an
                  implementation project, not a self-serve software subscription.
                </p>
                <a
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-orange-100 sm:w-auto"
                  href="#leadflow-contact-form"
                >
                  Talk to Ember
                </a>
                <p className="mt-6 text-sm text-zinc-500">
                  Prefer the main contact page?{" "}
                  <a
                    className="text-orange-300 transition hover:text-orange-200"
                    href={contactWithInterest}
                  >
                    Open the Ember contact form
                  </a>{" "}
                  with LeadFlow already selected.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur sm:p-8"
                id="leadflow-contact-form"
              >
                <Suspense
                  fallback={
                    <div className="min-h-64 animate-pulse rounded-2xl bg-white/[0.04]" />
                  }
                >
                  <ContactForm defaultProjectType={LEADFLOW_PROJECT_TYPE} />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-white/10 py-12">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <Link aria-label="Ember Systems home" className="inline-block" href="/">
                <EmberLogo variant="lockup" />
              </Link>
              <p className="mt-3 text-sm text-zinc-500">
                Ember LeadFlow · Contractor lead &amp; estimate system
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-zinc-500 sm:items-end">
              <div className="flex flex-wrap gap-4">
                <Link className="transition hover:text-orange-300" href="/">
                  Home
                </Link>
                <a className="transition hover:text-orange-300" href="#demo">
                  Demo
                </a>
                <a
                  className="transition hover:text-orange-300"
                  href={`#${CONTACT_SECTION_ID}`}
                >
                  Contact
                </a>
              </div>
              <p>© 2026 Ember Systems. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
