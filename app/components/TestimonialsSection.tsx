import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Ember rebuilt our lead follow-up into something our team actually uses. Response times dropped and we stopped losing jobs in the inbox.",
    name: "Marcus Hale",
    role: "Owner, Hale Contracting",
  },
  {
    quote:
      "Clean design, clear communication, and a system that finally matched how we sell. It felt like hiring a product team, not just a vendor.",
    name: "Priya Nair",
    role: "Founder, Northline Services",
  },
  {
    quote:
      "They translated a messy spreadsheet workflow into a dashboard our managers trust every morning. Fast, thoughtful, and premium end to end.",
    name: "Daniel Ortiz",
    role: "Operations Lead, Summit Crew",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="testimonials">
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
            Client Testimonials
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trusted by teams who need software that ships.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Placeholder stories for now — replace these with real client wins as
            projects launch.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.map((item, index) => (
          <Reveal delayMs={index * 90} key={item.name}>
            <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-7">
              <blockquote className="flex-1 text-sm leading-7 text-zinc-300">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/8 pt-5">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {item.role}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
