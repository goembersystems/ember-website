import Reveal from "./Reveal";

const BADGES = [
  "Secure-by-default builds",
  "Mobile-first experiences",
  "Fast performance focus",
  "Transparent project estimates",
  "Direct founder communication",
  "Post-launch support options",
];

export default function TrustBadges() {
  return (
    <section aria-label="Trust signals" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 sm:px-10">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
            Built on trust
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {BADGES.map((badge) => (
              <span
                className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium tracking-wide text-zinc-300 sm:text-sm"
                key={badge}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
