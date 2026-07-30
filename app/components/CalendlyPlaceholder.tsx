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
          Pick a time that works for you.
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          This is a Calendly integration placeholder. Connect your scheduling
          link with{" "}
          <code className="rounded bg-black/40 px-1.5 py-0.5 text-orange-200">
            NEXT_PUBLIC_CALENDLY_URL
          </code>{" "}
          to embed bookings here.
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
          <div className="mt-6 flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-black/40 px-6 text-center">
            <p className="text-sm font-medium text-zinc-300">
              Calendly embed will appear here
            </p>
            <a
              className="mt-5 rounded-full bg-orange-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-200"
              href="#contact"
            >
              Or send a message instead
            </a>
          </div>
        )}
      </div>
    </Reveal>
  );
}
