"use client";

import { useState } from "react";

const STATUSES = [
  "New",
  "Contacted",
  "Estimate Sent",
  "Scheduled",
  "Completed",
] as const;

type Status = (typeof STATUSES)[number];

const SAMPLE_STATS = [
  { label: "Total Leads", value: "24" },
  { label: "New Leads", value: "6" },
  { label: "Estimates Sent", value: "9" },
  { label: "Scheduled Jobs", value: "5" },
  { label: "Potential Revenue", value: "$48k" },
] as const;

export default function LeadFlowDemoDashboard() {
  const [status, setStatus] = useState<Status>("New");
  const [priority, setPriority] = useState("High");

  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-b from-zinc-950 via-black to-black sm:rounded-3xl">
      <div className="flex flex-col gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
        <div className="min-w-0">
          <p className="text-base font-semibold text-white sm:text-lg">
            Interactive LeadFlow Demo
          </p>
          <p className="mt-1 text-sm leading-6 text-zinc-400">
            Sample data — explore how the system works.
          </p>
        </div>
        <span className="w-fit shrink-0 rounded-full border border-orange-300/30 bg-orange-400/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-orange-100">
          Sample data only
        </span>
      </div>

      <div className="border-b border-dashed border-orange-300/20 bg-orange-400/[0.06] px-4 py-3 sm:px-6">
        <p className="text-sm leading-6 text-orange-100/90">
          All leads, stats, and revenue numbers below are fictional examples for
          demonstration — not real customer or business data.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 border-b border-white/10 p-3 sm:grid-cols-3 sm:gap-3 sm:p-5 lg:grid-cols-5">
        {SAMPLE_STATS.map((stat) => (
          <div
            className="rounded-2xl border border-white/8 bg-black/50 px-3 py-3 sm:px-4"
            key={stat.label}
          >
            <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-500 sm:tracking-[0.16em]">
              {stat.label}
            </p>
            <p className="mt-1.5 text-lg font-semibold tracking-tight text-white sm:mt-2 sm:text-xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wide text-zinc-600">
              Sample
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 p-3 sm:gap-5 sm:p-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                Sample lead
              </p>
              <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                Kitchen remodel inquiry
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Jordan Miles · Portland metro · Sample customer
              </p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
              ID · LF-1042
            </span>
          </div>

          <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                Service
              </dt>
              <dd className="mt-1 text-zinc-200">Kitchen Remodel</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                Budget range
              </dt>
              <dd className="mt-1 text-zinc-200">$15k – $25k</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                Timeline
              </dt>
              <dd className="mt-1 text-zinc-200">Within 60 days</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                Location
              </dt>
              <dd className="mt-1 text-zinc-200">Sample City, OR</dd>
            </div>
          </dl>

          <p className="mt-5 text-sm leading-6 text-zinc-400">
            Looking for a full kitchen refresh including cabinets, countertops,
            and flooring. Attached three reference photos with the estimate
            request.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Photo 1", "Photo 2", "Photo 3"].map((label) => (
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.03] text-[10px] uppercase tracking-wide text-zinc-500 sm:h-16 sm:w-16"
                key={label}
              >
                {label}
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-5">
            <label
              className="block text-xs uppercase tracking-[0.14em] text-zinc-500"
              htmlFor="demo-status"
            >
              Status
            </label>
            <select
              className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-black/50 px-3 py-3 text-sm text-white outline-none transition focus:border-orange-300/40"
              id="demo-status"
              onChange={(event) => setStatus(event.target.value as Status)}
              value={status}
            >
              {STATUSES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <label
              className="mt-4 block text-xs uppercase tracking-[0.14em] text-zinc-500"
              htmlFor="demo-priority"
            >
              Priority
            </label>
            <select
              className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-black/50 px-3 py-3 text-sm text-white outline-none transition focus:border-orange-300/40"
              id="demo-priority"
              onChange={(event) => setPriority(event.target.value)}
              value={priority}
            >
              {["Low", "Medium", "High"].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                  Last contact
                </p>
                <p className="mt-1 text-sm text-zinc-300">Mar 12, 2026</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                  Next follow-up
                </p>
                <p className="mt-1 text-sm text-zinc-300">Mar 15, 2026</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
              Internal notes
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Sample note: customer prefers evening calls. Waiting on cabinet
              preference before sending estimate.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Call", "Text", "Email"].map((action) => (
                <button
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-orange-300/30 hover:text-white"
                  key={action}
                  type="button"
                >
                  {action}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-zinc-600">
              Demo controls only — actions do not send messages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
