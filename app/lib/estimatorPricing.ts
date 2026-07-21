export type ProjectTypeId =
  | "business-website"
  | "website-redesign"
  | "ai-automation"
  | "internal-dashboard"
  | "custom-software"
  | "not-sure";

export type ScopeId = "small" | "medium" | "large";

export type FeatureId =
  | "contact-forms"
  | "online-booking"
  | "customer-login"
  | "payments"
  | "dashboard-reporting"
  | "ai-chatbot"
  | "integrations"
  | "maintenance";

export type TimelineId = "asap" | "1-2-months" | "3-6-months" | "flexible";

export type PriceRange = {
  min: number;
  max: number;
  openEnded?: boolean;
};

export const PROJECT_TYPES: { id: ProjectTypeId; label: string }[] = [
  { id: "business-website", label: "Business website" },
  { id: "website-redesign", label: "Website redesign" },
  { id: "ai-automation", label: "AI automation" },
  { id: "internal-dashboard", label: "Internal dashboard" },
  { id: "custom-software", label: "Custom software" },
  { id: "not-sure", label: "Not sure yet" },
];

export const SCOPES: { id: ScopeId; label: string }[] = [
  { id: "small", label: "Small and focused" },
  { id: "medium", label: "Medium business project" },
  { id: "large", label: "Large or complex system" },
];

export const FEATURES: { id: FeatureId; label: string }[] = [
  { id: "contact-forms", label: "Contact or lead forms" },
  { id: "online-booking", label: "Online booking" },
  { id: "customer-login", label: "Customer login" },
  { id: "payments", label: "Payments" },
  { id: "dashboard-reporting", label: "Dashboard or reporting" },
  { id: "ai-chatbot", label: "AI chatbot or assistant" },
  { id: "integrations", label: "Third-party integrations" },
  { id: "maintenance", label: "Ongoing maintenance" },
];

export const TIMELINES: { id: TimelineId; label: string }[] = [
  { id: "asap", label: "As soon as possible" },
  { id: "1-2-months", label: "Within 1–2 months" },
  { id: "3-6-months", label: "Within 3–6 months" },
  { id: "flexible", label: "Flexible" },
];

/** Base starting ranges by project type and scope. Easy to edit later. */
export const BASE_RANGES: Record<
  Exclude<ProjectTypeId, "not-sure">,
  Record<ScopeId, PriceRange>
> = {
  "business-website": {
    small: { min: 750, max: 1500 },
    medium: { min: 1500, max: 3500 },
    large: { min: 3500, max: 7500, openEnded: true },
  },
  "website-redesign": {
    small: { min: 600, max: 1200 },
    medium: { min: 1200, max: 3000 },
    large: { min: 3000, max: 6000, openEnded: true },
  },
  "ai-automation": {
    small: { min: 1000, max: 2500 },
    medium: { min: 2500, max: 6000 },
    large: { min: 6000, max: 15000, openEnded: true },
  },
  "internal-dashboard": {
    small: { min: 1500, max: 3500 },
    medium: { min: 3500, max: 8000 },
    large: { min: 8000, max: 20000, openEnded: true },
  },
  "custom-software": {
    small: { min: 2500, max: 6000 },
    medium: { min: 6000, max: 15000 },
    large: { min: 15000, max: 40000, openEnded: true },
  },
};

/** Modest add-ons per feature — intentional ranges, not false precision. */
export const FEATURE_ADDONS: Record<FeatureId, PriceRange> = {
  "contact-forms": { min: 150, max: 400 },
  "online-booking": { min: 300, max: 700 },
  "customer-login": { min: 400, max: 900 },
  payments: { min: 400, max: 1000 },
  "dashboard-reporting": { min: 500, max: 1200 },
  "ai-chatbot": { min: 600, max: 1500 },
  integrations: { min: 350, max: 1000 },
  maintenance: { min: 200, max: 500 },
};

export type EstimateInput = {
  projectType: ProjectTypeId;
  scope: ScopeId;
  features: FeatureId[];
  timeline: TimelineId;
};

export type EstimateResult = {
  kind: "range" | "consult";
  rangeLabel: string;
  timelineLabel: string;
  projectTypeLabel: string;
  scopeLabel: string;
  featureLabels: string[];
  timelinePreferenceLabel: string;
  min?: number;
  max?: number;
  openEnded?: boolean;
};

function formatMoney(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

/** Round to nearest $50 so estimates feel intentional, not exact. */
function roundEstimate(amount: number): number {
  return Math.round(amount / 50) * 50;
}

function labelForProjectType(id: ProjectTypeId): string {
  return PROJECT_TYPES.find((item) => item.id === id)?.label ?? id;
}

function labelForScope(id: ScopeId): string {
  return SCOPES.find((item) => item.id === id)?.label ?? id;
}

function labelForFeature(id: FeatureId): string {
  return FEATURES.find((item) => item.id === id)?.label ?? id;
}

function labelForTimeline(id: TimelineId): string {
  return TIMELINES.find((item) => item.id === id)?.label ?? id;
}

/**
 * Maps scope + preferred start window into a planning timeline band.
 * Transparent heuristic — not a binding schedule.
 */
export function estimateTimelineBand(
  scope: ScopeId,
  timeline: TimelineId,
): string {
  if (timeline === "flexible") {
    return "Flexible — we’ll align around your priorities";
  }

  const bands: Record<ScopeId, Record<Exclude<TimelineId, "flexible">, string>> =
    {
      small: {
        asap: "About 2–4 weeks",
        "1-2-months": "About 3–6 weeks",
        "3-6-months": "About 1–2 months",
      },
      medium: {
        asap: "About 4–8 weeks",
        "1-2-months": "About 6–10 weeks",
        "3-6-months": "About 2–3 months",
      },
      large: {
        asap: "About 8–14 weeks",
        "1-2-months": "About 3–4 months",
        "3-6-months": "About 4–6 months",
      },
    };

  return bands[scope][timeline];
}

export function formatPriceRange(range: PriceRange): string {
  const min = formatMoney(roundEstimate(range.min));
  const max = formatMoney(roundEstimate(range.max));
  return range.openEnded ? `${min}–${max}+` : `${min}–${max}`;
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const projectTypeLabel = labelForProjectType(input.projectType);
  const scopeLabel = labelForScope(input.scope);
  const featureLabels = input.features.map(labelForFeature);
  const timelinePreferenceLabel = labelForTimeline(input.timeline);
  const timelineLabel = estimateTimelineBand(input.scope, input.timeline);

  if (input.projectType === "not-sure") {
    return {
      kind: "consult",
      rangeLabel: "Let’s talk through your idea.",
      timelineLabel,
      projectTypeLabel,
      scopeLabel,
      featureLabels,
      timelinePreferenceLabel,
    };
  }

  const base = BASE_RANGES[input.projectType][input.scope];
  let min = base.min;
  let max = base.max;

  for (const feature of input.features) {
    const addon = FEATURE_ADDONS[feature];
    min += addon.min;
    max += addon.max;
  }

  const range: PriceRange = {
    min: roundEstimate(min),
    max: roundEstimate(max),
    openEnded: base.openEnded,
  };

  return {
    kind: "range",
    rangeLabel: formatPriceRange(range),
    timelineLabel,
    projectTypeLabel,
    scopeLabel,
    featureLabels,
    timelinePreferenceLabel,
    min: range.min,
    max: range.max,
    openEnded: range.openEnded,
  };
}

export function buildEstimateMailto(params: {
  name: string;
  email: string;
  company: string;
  estimate: EstimateResult;
}): string {
  const { name, email, company, estimate } = params;
  const subject = "New Ember Systems Project Estimate";
  const body = [
    "New project estimate from the Ember Systems website:",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company.trim() || "—"}`,
    "",
    `Project type: ${estimate.projectTypeLabel}`,
    `Scope: ${estimate.scopeLabel}`,
    `Selected features: ${
      estimate.featureLabels.length > 0
        ? estimate.featureLabels.join(", ")
        : "None selected"
    }`,
    `Timeline preference: ${estimate.timelinePreferenceLabel}`,
    `Estimated planning timeline: ${estimate.timelineLabel}`,
    `Estimated starting range: ${estimate.rangeLabel}`,
  ].join("\n");

  return `mailto:thatonehondarider@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
