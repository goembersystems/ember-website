"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

const STATS: Stat[] = [
  { label: "Projects completed", value: 48, suffix: "+" },
  { label: "Average response time", value: 2, suffix: " hrs", prefix: "<" },
  { label: "Customer satisfaction", value: 98, suffix: "%" },
];

function AnimatedNumber({
  value,
  decimals = 0,
  active,
}: {
  value: number;
  decimals?: number;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(value * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <>{display.toFixed(decimals)}</>;
}

export default function AnimatedStats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Ember Systems at a glance"
      className="scroll-mt-24 border-y border-white/10 py-14 sm:py-16"
      ref={ref}
    >
      <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
        {STATS.map((stat) => (
          <div className="text-center sm:text-left" key={stat.label}>
            <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {stat.prefix}
              <AnimatedNumber
                active={active}
                decimals={stat.decimals}
                value={stat.value}
              />
              {stat.suffix}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
