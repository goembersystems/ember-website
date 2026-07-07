import ContactForm from "./components/ContactForm";

export default function Home() {
  const solutions = [
    {
      title: "AI Chatbots",
      description:
        "Smart assistants that answer questions, qualify leads, and support customers around the clock.",
    },
    {
      title: "Business Automation",
      description:
        "Automated workflows that eliminate repetitive tasks and keep your operations running smoothly.",
    },
    {
      title: "Custom Websites",
      description:
        "Fast, modern websites built to convert visitors and position your business as a premium brand.",
    },
    {
      title: "Internal Dashboards",
      description:
        "Centralized dashboards that give your team real-time visibility into the metrics that matter.",
    },
    {
      title: "Lead Capture Systems",
      description:
        "Forms, funnels, and follow-up flows designed to turn traffic into qualified opportunities.",
    },
    {
      title: "Custom Software",
      description:
        "Purpose-built tools tailored to your workflows, customers, and long-term growth goals.",
    },
  ];

  const audiences = [
    {
      title: "Contractors",
      description:
        "Streamline estimates, follow-ups, and job tracking with tools built for the field.",
    },
    {
      title: "Small businesses",
      description:
        "Replace spreadsheets and manual work with systems that save hours every week.",
    },
    {
      title: "Local service companies",
      description:
        "Capture more leads, respond faster, and deliver a polished client experience.",
    },
    {
      title: "Startups",
      description:
        "Launch faster with lean, scalable software that grows alongside your business.",
    },
    {
      title: "Teams drowning in repetitive work",
      description:
        "Automate the busywork so your team can focus on clients, sales, and growth.",
    },
  ];

  const projects = [
    {
      title: "Contractor Lead Dashboard",
      category: "Dashboard",
      description:
        "A centralized hub for tracking inbound leads, follow-up status, and conversion metrics.",
    },
    {
      title: "AI Estimate Assistant",
      category: "AI Automation",
      description:
        "An intelligent tool that helps contractors generate faster, more consistent project estimates.",
    },
    {
      title: "Website Launch System",
      category: "Website",
      description:
        "A repeatable launch framework for building and deploying high-converting business websites.",
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

          <nav className="hidden items-center gap-7 text-sm text-zinc-400 lg:flex">
            <a className="transition hover:text-white" href="#solutions">
              Solutions
            </a>
            <a className="transition hover:text-white" href="#who-we-help">
              Who We Help
            </a>
            <a className="transition hover:text-white" href="#portfolio">
              Portfolio
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
              AI automation & custom software for growing businesses
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
                href="#solutions"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>

        <section id="solutions" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
              Featured Solutions
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Software that sells, automates, and scales.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              From AI chatbots to custom dashboards, we build the systems that
              help businesses win more work and waste less time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, index) => (
              <article
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-orange-300/25 hover:bg-orange-400/[0.06]"
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

        <section id="who-we-help" className="scroll-mt-24 py-20 sm:py-28">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-12">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                Who We Help
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for teams that need leverage, not more busywork.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map((item) => (
                <article
                  className="rounded-2xl border border-white/8 bg-black/40 p-6"
                  key={item.title}
                >
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
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

        <section id="portfolio" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
              Portfolio / Demo Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Real systems we&apos;re building for modern businesses.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              A sample of the kinds of products Ember Systems delivers — from
              lead dashboards to AI-powered tools and launch-ready websites.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur transition hover:-translate-y-1 hover:border-orange-300/25"
                key={project.title}
              >
                <div className="flex h-40 items-end bg-gradient-to-br from-orange-500/20 via-orange-900/20 to-black p-6">
                  <span className="rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-200">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
                    {project.description}
                  </p>
                  <span className="mt-6 text-sm font-medium text-orange-300/80 transition group-hover:text-orange-300">
                    Demo project →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to build smarter?
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-zinc-400">
                Tell us what you&apos;re trying to build. Whether you need AI
                automation, a new website, or a custom dashboard, we&apos;ll help
                you map the right next step.
              </p>

              <div className="mt-8 space-y-3 text-sm text-zinc-500">
                <p>
                  <span className="text-zinc-400">Email:</span>{" "}
                  <a
                    className="text-orange-300 transition hover:text-orange-200"
                    href="mailto:hello@goembersystems.com"
                  >
                    hello@goembersystems.com
                  </a>
                </p>
                <p>
                  <span className="text-zinc-400">Website:</span>{" "}
                  <a
                    className="text-orange-300 transition hover:text-orange-200"
                    href="https://goembersystems.com"
                  >
                    goembersystems.com
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-12">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-base font-semibold text-white">Ember Systems</p>
              <p className="mt-1 text-sm text-zinc-500">
                AI • Automation • Software
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-zinc-500 sm:items-end">
              <a
                className="transition hover:text-orange-300"
                href="https://goembersystems.com"
              >
                goembersystems.com
              </a>
              <p>© 2026 Ember Systems. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
