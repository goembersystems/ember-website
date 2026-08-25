import { CONTACT_SECTION_ID } from "../lib/siteConstants";
import Reveal from "./Reveal";

export default function CalendlyPlaceholder() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();

  return (
    <Reveal>
      <div
        className="rounded-3xl border border-orange-300/20 bg-orange-400/[0.07] p-6 sm:p-8"
        id="consultation"
      >
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
          Book a Free Consultation
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Tell us what you&apos;re building.
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          Share your goals, timeline, and bottlenecks — we&apos;ll reply with
          next steps and whether Ember is the right fit.
        </p>

        {calendlyUrl ? (
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/50">
            <iframe
              className="h-[42rem] w-full"
              loading="lazy"
              src={calendlyUrl}
              title="Book a free consultation with Ember Systems"
            />
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              className="rounded-full bg-orange-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-200"
              href={`#${CONTACT_SECTION_ID}`}
            >
              Send a Message
            </a>
            <p className="text-sm text-zinc-500">
              Include as much detail as you can — goals, timeline, and current
              bottlenecks.
            </p>
          </div>
        )}
      </div>
    </Reveal>
  );
}
