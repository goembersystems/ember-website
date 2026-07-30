import Reveal from "./Reveal";

const REASONS = [
  {
    title: "Strategy before code",
    description:
      "We start with the business outcome — then design the smallest system that can deliver it cleanly.",
  },
  {
    title: "Premium craft, practical delivery",
    description:
      "Polished interfaces and reliable engineering without bloated timelines or unnecessary complexity.",
  },
  {
    title: "Built for operators",
    description:
      "Tools that fit how real teams work: contractors, service companies, founders, and growing staffs.",
  },
  {
    title: "Clear communication",
    description:
      "You always know what’s shipping next, why it matters, and how it moves the business forward.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="why-ember">
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
            Why Choose Ember Systems
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A premium partner for serious operators.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            We combine product taste, automation expertise, and calm execution —
            so your software feels intentional, not improvised.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {REASONS.map((reason, index) => (
          <Reveal delayMs={index * 80} key={reason.title}>
            <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-orange-300/25 hover:bg-orange-400/[0.05] sm:p-7">
              <span className="text-xs font-medium tracking-widest text-orange-300/70">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {reason.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
