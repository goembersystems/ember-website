"use client";

import { FormEvent, useId, useMemo, useState } from "react";
import {
  FEATURES,
  PROJECT_TYPES,
  SCOPES,
  TIMELINES,
  buildEstimateMailto,
  calculateEstimate,
  type FeatureId,
  type ProjectTypeId,
  type ScopeId,
  type TimelineId,
} from "../lib/estimatorPricing";

const TOTAL_STEPS = 5;

type Step = 1 | 2 | 3 | 4 | 5 | "results";

const optionBase =
  "w-full rounded-2xl border px-4 py-3.5 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40";
const optionIdle =
  "border-white/10 bg-black/30 text-zinc-300 hover:border-orange-300/25 hover:bg-orange-400/[0.06]";
const optionActive =
  "border-orange-300/40 bg-orange-400/10 text-white shadow-[inset_0_0_0_1px_rgba(253,186,116,0.15)]";

export default function ProjectEstimator() {
  const formId = useId();
  const [step, setStep] = useState<Step>(1);
  const [projectType, setProjectType] = useState<ProjectTypeId | null>(null);
  const [scope, setScope] = useState<ScopeId | null>(null);
  const [features, setFeatures] = useState<FeatureId[]>([]);
  const [timeline, setTimeline] = useState<TimelineId | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState<string | null>(null);

  const progressStep = step === "results" ? TOTAL_STEPS : step;
  const progressPercent = (progressStep / TOTAL_STEPS) * 100;

  const estimate = useMemo(() => {
    if (!projectType || !scope || !timeline) return null;
    return calculateEstimate({
      projectType,
      scope,
      features,
      timeline,
    });
  }, [projectType, scope, features, timeline]);

  function toggleFeature(id: FeatureId) {
    setFeatures((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function goBack() {
    setError(null);
    if (step === "results") {
      setStep(5);
      return;
    }
    if (step > 1) {
      setStep((step - 1) as Step);
    }
  }

  function goContinue() {
    setError(null);

    if (step === 1) {
      if (!projectType) {
        setError("Select a project type to continue.");
        return;
      }
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!scope) {
        setError("Select a project scope to continue.");
        return;
      }
      setStep(3);
      return;
    }

    if (step === 3) {
      setStep(4);
      return;
    }

    if (step === 4) {
      if (!timeline) {
        setError("Select a timeline to continue.");
        return;
      }
      setStep(5);
    }
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }

    if (!projectType || !scope || !timeline) {
      setError("Please complete the earlier steps first.");
      return;
    }

    setStep("results");
  }

  function startConversation() {
    if (!estimate) return;
    window.location.href = buildEstimateMailto({
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      estimate,
    });
  }

  function adjustAnswers() {
    setError(null);
    setStep(1);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:p-8 lg:p-10">
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between gap-4 text-sm">
          <p className="font-medium text-zinc-300">
            {step === "results"
              ? "Your estimate"
              : `Step ${step} of ${TOTAL_STEPS}`}
          </p>
          <p className="text-zinc-500">
            {Math.round(progressPercent)}% complete
          </p>
        </div>
        <div
          aria-hidden="true"
          className="h-1.5 overflow-hidden rounded-full bg-white/10"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-300 transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div
        aria-live="polite"
        className="min-h-[22rem] transition-opacity duration-300"
        key={String(step)}
      >
        {step === 1 && (
          <fieldset>
            <legend className="mb-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              What are you building?
            </legend>
            <p className="mb-6 text-sm leading-6 text-zinc-400">
              Choose the option that best matches your project.
            </p>
            <div className="grid gap-3 sm:grid-cols-2" role="radiogroup">
              {PROJECT_TYPES.map((option) => {
                const selected = projectType === option.id;
                return (
                  <button
                    aria-checked={selected}
                    className={`${optionBase} ${selected ? optionActive : optionIdle}`}
                    key={option.id}
                    onClick={() => setProjectType(option.id)}
                    role="radio"
                    type="button"
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="mb-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              How big is the project?
            </legend>
            <p className="mb-6 text-sm leading-6 text-zinc-400">
              Scope helps us frame a realistic starting range.
            </p>
            <div className="grid gap-3" role="radiogroup">
              {SCOPES.map((option) => {
                const selected = scope === option.id;
                return (
                  <button
                    aria-checked={selected}
                    className={`${optionBase} ${selected ? optionActive : optionIdle}`}
                    key={option.id}
                    onClick={() => setScope(option.id)}
                    role="radio"
                    type="button"
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset>
            <legend className="mb-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Which features matter most?
            </legend>
            <p className="mb-6 text-sm leading-6 text-zinc-400">
              Select all that apply. You can skip this if you&apos;re still
              exploring.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {FEATURES.map((option) => {
                const selected = features.includes(option.id);
                return (
                  <button
                    aria-pressed={selected}
                    className={`${optionBase} ${selected ? optionActive : optionIdle}`}
                    key={option.id}
                    onClick={() => toggleFeature(option.id)}
                    type="button"
                  >
                    <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded border border-white/20 text-[10px]">
                      {selected ? "✓" : ""}
                    </span>
                    {option.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {step === 4 && (
          <fieldset>
            <legend className="mb-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              When do you want to get started?
            </legend>
            <p className="mb-6 text-sm leading-6 text-zinc-400">
              Your preferred window helps shape a planning timeline.
            </p>
            <div className="grid gap-3" role="radiogroup">
              {TIMELINES.map((option) => {
                const selected = timeline === option.id;
                return (
                  <button
                    aria-checked={selected}
                    className={`${optionBase} ${selected ? optionActive : optionIdle}`}
                    key={option.id}
                    onClick={() => setTimeline(option.id)}
                    role="radio"
                    type="button"
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {step === 5 && (
          <form id={`${formId}-contact`} onSubmit={handleContactSubmit}>
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Where should we send the estimate?
            </h3>
            <p className="mb-6 text-sm leading-6 text-zinc-400">
              We&apos;ll use this to open a conversation with your project
              details included.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  className="mb-2 block text-sm font-medium text-zinc-300"
                  htmlFor={`${formId}-name`}
                >
                  Name
                </label>
                <input
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-300/40 focus:ring-2 focus:ring-orange-400/20"
                  id={`${formId}-name`}
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  required
                  type="text"
                  value={name}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  className="mb-2 block text-sm font-medium text-zinc-300"
                  htmlFor={`${formId}-email`}
                >
                  Email
                </label>
                <input
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-300/40 focus:ring-2 focus:ring-orange-400/20"
                  id={`${formId}-email`}
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                  type="email"
                  value={email}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  className="mb-2 block text-sm font-medium text-zinc-300"
                  htmlFor={`${formId}-company`}
                >
                  Company{" "}
                  <span className="font-normal text-zinc-500">(optional)</span>
                </label>
                <input
                  autoComplete="organization"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-orange-300/40 focus:ring-2 focus:ring-orange-400/20"
                  id={`${formId}-company`}
                  name="company"
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="Company name"
                  type="text"
                  value={company}
                />
              </div>
            </div>
          </form>
        )}

        {step === "results" && estimate && (
          <div>
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Your planning estimate
            </h3>
            <p className="mb-8 text-sm leading-6 text-zinc-400">
              Based on the answers you shared — a transparent starting range,
              not a binding quote.
            </p>

            <div className="mb-6 rounded-2xl border border-orange-300/25 bg-orange-400/10 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
                Estimated starting range
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {estimate.rangeLabel}
              </p>
              <p className="mt-3 text-sm text-zinc-300">
                Estimated timeline:{" "}
                <span className="font-medium text-white">
                  {estimate.timelineLabel}
                </span>
              </p>
            </div>

            <dl className="mb-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Project type
                </dt>
                <dd className="mt-2 text-sm text-white">
                  {estimate.projectTypeLabel}
                </dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Scope
                </dt>
                <dd className="mt-2 text-sm text-white">{estimate.scopeLabel}</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Selected features
                </dt>
                <dd className="mt-2 text-sm text-white">
                  {estimate.featureLabels.length > 0
                    ? estimate.featureLabels.join(", ")
                    : "None selected"}
                </dd>
              </div>
            </dl>

            <p className="mb-8 rounded-xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-400">
              This is an early planning estimate, not a binding quote. Final
              pricing depends on project details and technical requirements.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                className="rounded-full bg-orange-300 px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-orange-400/20 transition hover:-translate-y-0.5 hover:bg-orange-200"
                onClick={startConversation}
                type="button"
              >
                Start a Conversation
              </button>
              <button
                className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-orange-300/30 hover:bg-orange-400/10"
                onClick={adjustAnswers}
                type="button"
              >
                Adjust Answers
              </button>
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-6 text-sm text-orange-200" role="alert">
          {error}
        </p>
      )}

      {step !== "results" && (
        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
          <button
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={step === 1}
            onClick={goBack}
            type="button"
          >
            Back
          </button>

          {step === 5 ? (
            <button
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-orange-100"
              form={`${formId}-contact`}
              type="submit"
            >
              See My Estimate
            </button>
          ) : (
            <button
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-orange-100"
              onClick={goContinue}
              type="button"
            >
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  );
}
