const COMPANY_NAME = "Ember Systems";
const COMPANY_SITE = "goembersystems.com";
const COMPANY_SITE_URL = "https://goembersystems.com";

export const LEAD_INBOX = "thatonehondarider@gmail.com";

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function resolveFromEmail(): string | null {
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  return from || null;
}

function displayValue(value: string, fallback = "—"): string {
  const trimmed = value.trim();
  return trimmed || fallback;
}

function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#a1a1aa;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid #3f3f46;color:#fafafa;font-size:15px;font-weight:600;vertical-align:top;word-break:break-word;">${escapeHtml(value)}</td>
    </tr>`;
}

function sectionCard(title: string, rowsHtml: string): string {
  return `
    <div style="margin:0 0 18px;padding:18px 20px;background:#18181b;border:1px solid #3f3f46;border-radius:14px;">
      <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#fb923c;font-weight:700;">${escapeHtml(title)}</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${rowsHtml}
      </table>
    </div>`;
}

function wrapBrandedEmail(options: {
  headline: string;
  bodyHtml: string;
  replyToEmail: string;
}): string {
  const safeReply = encodeURIComponent(options.replyToEmail.trim());
  const replyHref = `mailto:${safeReply}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(COMPANY_NAME)}</title>
</head>
<body style="margin:0;padding:0;background:#09090b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#111113;border:1px solid #27272a;border-radius:18px;overflow:hidden;">
          <tr>
            <td style="background:#0a0a0a;border-bottom:3px solid #fb923c;padding:24px 28px;">
              <p style="margin:0;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#fb923c;font-weight:700;">${escapeHtml(COMPANY_NAME)}</p>
              <h1 style="margin:10px 0 0;font-size:24px;line-height:1.25;color:#ffffff;font-weight:700;">${escapeHtml(options.headline)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              ${options.bodyHtml}
              <div style="margin:8px 0 0;text-align:center;">
                <a href="${replyHref}" style="display:inline-block;background:#fb923c;color:#09090b;text-decoration:none;font-size:14px;font-weight:700;padding:14px 28px;border-radius:999px;">
                  Reply to this lead
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#0a0a0a;border-top:1px solid #27272a;padding:18px 28px;text-align:center;">
              <p style="margin:0;font-size:13px;line-height:1.6;color:#a1a1aa;">
                <a href="${COMPANY_SITE_URL}" style="color:#fb923c;text-decoration:none;">${escapeHtml(COMPANY_SITE)}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export type EstimateEmailInput = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  scope: string;
  selectedFeatures: string[];
  requestedTimeline: string;
  estimatedPlanningTimeline: string;
  estimatedPriceRange: string;
};

export function buildEstimateEmail(input: EstimateEmailInput): {
  subject: string;
  text: string;
  html: string;
} {
  const company = displayValue(input.company);
  const featuresLabel =
    input.selectedFeatures.length > 0
      ? input.selectedFeatures.join(", ")
      : "None selected";

  const text = [
    "New Ember Systems project estimate:",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Company: ${company}`,
    "",
    `Project type: ${input.projectType}`,
    `Scope: ${input.scope}`,
    `Requested timeline: ${input.requestedTimeline}`,
    `Estimated timeline: ${input.estimatedPlanningTimeline}`,
    `Estimated starting range: ${input.estimatedPriceRange}`,
    `Selected features: ${featuresLabel}`,
    "",
    "This estimate is preliminary and not a binding quote.",
  ].join("\n");

  const contactRows = [
    detailRow("Name", input.name),
    detailRow("Email", input.email),
    detailRow("Company", company),
  ].join("");

  const summaryRows = [
    detailRow("Project type", input.projectType),
    detailRow("Scope", input.scope),
    detailRow("Requested timeline", input.requestedTimeline),
    detailRow("Estimated timeline", input.estimatedPlanningTimeline),
    detailRow("Estimated starting range", input.estimatedPriceRange),
  ].join("");

  const featureRows = detailRow("Selected features", featuresLabel);

  const bodyHtml = `
    ${sectionCard("Lead contact", contactRows)}
    ${sectionCard("Project summary", summaryRows)}
    ${sectionCard("Selected features", featureRows)}
    <p style="margin:0 0 24px;padding:14px 16px;background:#18181b;border:1px solid #3f3f46;border-radius:12px;font-size:13px;line-height:1.6;color:#a1a1aa;">
      This estimate is preliminary and not a binding quote. Final pricing depends on project details and technical requirements.
    </p>
  `;

  return {
    subject: "New Ember Systems Project Estimate",
    text,
    html: wrapBrandedEmail({
      headline: "New Project Estimate",
      bodyHtml,
      replyToEmail: input.email,
    }),
  };
}

export type ContactEmailInput = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export function buildContactEmail(input: ContactEmailInput): {
  subject: string;
  text: string;
  html: string;
} {
  const text = [
    "New website inquiry from Ember Systems:",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Project type: ${input.projectType}`,
    "",
    "Message:",
    input.message,
  ].join("\n");

  const rows = [
    detailRow("Name", input.name),
    detailRow("Email", input.email),
    detailRow("Project type", input.projectType),
  ].join("");

  const safeMessage = escapeHtml(input.message).replaceAll("\n", "<br />");

  const bodyHtml = `
    ${sectionCard("Inquiry details", rows)}
    <div style="margin:0 0 24px;padding:18px 20px;background:#18181b;border:1px solid #3f3f46;border-radius:14px;">
      <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#fb923c;font-weight:700;">Message</p>
      <p style="margin:0;font-size:15px;line-height:1.7;color:#f4f4f5;word-break:break-word;">${safeMessage}</p>
    </div>
  `;

  return {
    subject: "New Ember Systems Website Inquiry",
    text,
    html: wrapBrandedEmail({
      headline: "New Website Inquiry",
      bodyHtml,
      replyToEmail: input.email,
    }),
  };
}
