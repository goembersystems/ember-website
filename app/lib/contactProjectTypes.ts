import { LEADFLOW_PROJECT_TYPE } from "./siteConstants";

export const CONTACT_PROJECT_TYPES = [
  "AI Automation",
  "Custom Website",
  "Internal Dashboard",
  "Custom Software",
  "Lead Capture System",
  LEADFLOW_PROJECT_TYPE,
  "Other",
] as const;

export type ContactProjectType = (typeof CONTACT_PROJECT_TYPES)[number];

export const CONTACT_PROJECT_TYPE_SET = new Set<string>(CONTACT_PROJECT_TYPES);
