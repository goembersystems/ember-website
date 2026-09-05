import Reveal from "./Reveal";
import { LEADFLOW_PATH } from "../lib/siteConstants";

const HIGHLIGHTS = [
  "Built for contractors and home-service businesses",
  "Captures structured estimate requests",
  "Accepts project photos with the inquiry",
  "Organizes leads in a private dashboard",
  "Tracks statuses and follow-ups",
  "Install on an existing site — or bundle with a new Ember website",
] as const;

export default function LeadFlowHomeTeaser() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="leadflow">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-orange-300/20 bg-gradient-to-b from-orange-400/[0.09] to-white/[0.02]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-10">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                Product
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ember LeadFlow
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
                A lead and estimate system built for contractors — so website
                inquiries, photos, and follow-ups live in one place instead of
                texts, emails, and voicemails.
              </p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <li
                    className="flex gap-2.5 text-sm leading-6 text-zinc-300"
                    key={item}
                  >
                    <span aria-hidden="true" className="mt-0.5 text-orange-300">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-orange-300 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-orange-200 sm:w-auto"
                href={LEADFLOW_PATH}
              >
                Explore Ember LeadFlow
                <span aria-hidden="true" className="ml-1.5">
                  →
                </span>
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                From inquiry to job
              </p>
              <ol className="mt-4 space-y-4">
                {[
                  "Customer submits estimate details + photos",
                  "Business gets a clean lead notification",
                  "Lead lands in a private dashboard",
                  "Statuses and follow-ups stay organized",
                ].map((step, index) => (
                  <li className="flex gap-3 text-sm text-zinc-300" key={step}>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-400/15 text-xs font-semibold text-orange-300">
                      {index + 1}
                    </span>
                    <span className="pt-1 leading-6">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
