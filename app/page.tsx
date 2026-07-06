export default function Home() {
  const offerings = [
    {
      title: "AI Automation",
      description:
        "Intelligent workflows that handle repetitive tasks so your team can focus on high-value work.",
    },
    {
      title: "Custom Software",
      description:
        "Purpose-built tools tailored to your operations, customers, and growth goals.",
    },
    {
      title: "Business Websites",
      description:
        "Fast, modern sites designed to convert visitors and represent your brand with confidence.",
    },
    {
      title: "Internal Dashboards",
      description:
        "Real-time visibility into the metrics and workflows that drive your business forward.",
    },
    {
      title: "Workflow Automation",
      description:
        "Connected systems that eliminate manual handoffs and keep operations running smoothly.",
    },
  ];

  const steps = [
    {
      title: "Discover",
      description:
        "We learn your goals, map bottlenecks, and define the highest-impact opportunities to pursue.",
    },
    {
      title: "Build",
      description:
        "We design and develop a focused solution with clean UX, reliable foundations, and room to scale.",
    },
    {
      title: "Launch",
      description:
        "We ship, refine, and support your product so it delivers value from day one and beyond.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-amber-400/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_100%,64px_64px,64px_64px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
          <a href="#" className="flex items-center gap-3" aria-label="Ember Systems">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-orange-700 shadow-lg shadow-orange-500/25">
              <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
              Ember Systems
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#process">
              Process
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            className="shrink-0 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-100 sm:px-5 sm:py-3"
            href="#contact"
          >
            Start a Project
          </a>
        </div>
      </header>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <section className="flex min-h-[calc(100vh-5rem)] items-center py-20 text-center sm:py-28">
          <div className="mx-auto max-w-4xl animate-fade-up">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-400/10 px-4 py-2 text-sm text-orange-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.9)]" />
              Premium software for modern businesses
            </div>

            <h1 className="text-balance bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-4xl font-semibold tracking-[-0.05em] text-transparent sm:text-6xl lg:text-7xl">
              Build Smarter. Automate More. Grow Faster.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Custom software, AI automation, dashboards, and modern websites
              built to help businesses save time, reduce repetitive work, and
              grow faster.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                className="group rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-orange-500/15 transition hover:-translate-y-0.5 hover:bg-orange-100"
                href="#contact"
              >
                Start a Project
                <span className="ml-1.5 inline-block transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-300/30 hover:bg-orange-400/10"
                href="#services"
              >
                See What We Build
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
              What We Build
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Systems that save time and drive growth.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, index) => (
              <article
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-orange-300/25 hover:bg-orange-400/[0.06] lg:last:col-span-1"
                key={item.title}
              >
                <span className="mb-6 text-xs font-medium tracking-widest text-orange-300/70">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
                <div className="mt-6 h-px w-10 bg-gradient-to-r from-orange-400/80 to-transparent transition group-hover:w-16" />
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="scroll-mt-24 py-20 sm:py-28">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-12">
            <div className="mb-12 max-w-xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                How We Work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                From idea to launch in three clear steps.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  className="relative rounded-2xl border border-white/8 bg-black/40 p-6"
                  key={step.title}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400/15 text-sm font-semibold text-orange-300">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-zinc-400">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
          <div className="relative overflow-hidden rounded-3xl border border-orange-300/20 bg-gradient-to-br from-orange-500/15 via-white/[0.04] to-transparent px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to build smarter?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-zinc-400">
              Tell us about your project and we&apos;ll help you turn ideas into
              software that moves your business forward.
            </p>
            <a
              className="mt-8 inline-flex rounded-full bg-orange-300 px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-orange-400/20 transition hover:-translate-y-0.5 hover:bg-orange-200"
              href="mailto:hello@goembersystems.com"
            >
              Start a Project
            </a>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-10 text-sm text-zinc-500 sm:flex-row">
          <p>Ember Systems © 2026</p>
          <a
            className="transition hover:text-orange-300"
            href="https://goembersystems.com"
          >
            goembersystems.com
          </a>
        </footer>
      </div>
    </main>
  );
}
