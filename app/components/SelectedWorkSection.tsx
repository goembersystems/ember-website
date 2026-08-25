import { CONTACT_SECTION_ID, J316_CONTRACTING_URL } from "../lib/siteConstants";
import Reveal from "./Reveal";

const CAPABILITIES = [
  "Web Development",
  "Lead Capture",
  "Responsive Design",
  "Ongoing Management",
] as const;

export default function SelectedWorkSection() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="portfolio">
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Real projects, built to last.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            A look at the websites and systems Ember Systems designs, builds,
            and maintains for growing businesses.
          </p>
        </div>
      </Reveal>

      <Reveal delayMs={80}>
        <article className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur transition duration-500 hover:border-orange-300/25">
          <div className="relative flex min-h-44 items-end bg-gradient-to-br from-orange-500/25 via-orange-900/20 to-black p-6 sm:min-h-52 sm:p-8">
            <div className="pointer-events-none absolute inset-0 opacity-40 transition duration-700 group-hover:opacity-70">
              <div className="absolute -right-8 top-4 h-28 w-28 rounded-full bg-orange-300/20 blur-2xl" />
            </div>
            <div className="relative space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange-200/80">
                Construction Company Website
              </p>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                J3:16 Contracting
              </h3>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              Designed, built, and maintained a modern website for J3:16
              Contracting, helping the company showcase its construction
              services and project work while giving potential customers a
              simple way to request an estimate.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {CAPABILITIES.map((label) => (
                <span
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-300"
                  key={label}
                >
                  {label}
                </span>
              ))}
            </div>

            <a
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-200"
              href={J316_CONTRACTING_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Live Website
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </Reveal>

      <Reveal delayMs={160}>
        <div className="mt-12 rounded-3xl border border-orange-300/20 bg-orange-400/[0.07] p-8 text-center sm:p-10">
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Have a process that takes too much time?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-zinc-400">
            Let&apos;s see what we can automate.
          </p>
          <a
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-orange-100"
            href={`#${CONTACT_SECTION_ID}`}
          >
            Start a Project
          </a>
        </div>
      </Reveal>
    </section>
  );
}
