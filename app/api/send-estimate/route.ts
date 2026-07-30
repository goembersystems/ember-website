import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  LEAD_INBOX,
  buildEstimateEmail,
  resolveFromEmail,
} from "../../lib/emailTemplates";

type EstimatePayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  scope?: unknown;
  selectedFeatures?: unknown;
  requestedTimeline?: unknown;
  estimatedPlanningTimeline?: unknown;
  estimatedPriceRange?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: EstimatePayload;

  try {
    body = (await request.json()) as EstimatePayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body. Please try again." },
      { status: 400 },
    );
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const company = asTrimmedString(body.company);
  const projectType = asTrimmedString(body.projectType);
  const scope = asTrimmedString(body.scope);
  const requestedTimeline = asTrimmedString(body.requestedTimeline);
  const estimatedPlanningTimeline = asTrimmedString(
    body.estimatedPlanningTimeline,
  );
  const estimatedPriceRange = asTrimmedString(body.estimatedPriceRange);

  const selectedFeatures = Array.isArray(body.selectedFeatures)
    ? body.selectedFeatures
        .map((feature) => asTrimmedString(feature))
        .filter(Boolean)
    : [];

  if (!name || !email || !projectType || !scope || !requestedTimeline) {
    return NextResponse.json(
      {
        error:
          "Missing required fields. Name, email, project type, scope, and timeline are required.",
      },
      { status: 400 },
    );
  }

  if (!looksLikeEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!estimatedPlanningTimeline || !estimatedPriceRange) {
    return NextResponse.json(
      {
        error:
          "Estimate details are incomplete. Please regenerate your estimate.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = resolveFromEmail();

  if (!apiKey || !from) {
    console.error("Missing RESEND_API_KEY and/or RESEND_FROM_EMAIL.");
    return NextResponse.json(
      {
        error:
          "Email is not configured on the server yet. Please try again later.",
      },
      { status: 503 },
    );
  }

  const built = buildEstimateEmail({
    name,
    email,
    company,
    projectType,
    scope,
    selectedFeatures,
    requestedTimeline,
    estimatedPlanningTimeline,
    estimatedPriceRange,
  });

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: LEAD_INBOX,
      replyTo: email,
      subject: built.subject,
      text: built.text,
      html: built.html,
    });

    if (error) {
      console.error("Resend send-estimate error:", error);
      return NextResponse.json(
        { error: "Could not send your estimate right now. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Estimate sent successfully.",
    });
  } catch (error) {
    console.error("Unexpected send-estimate error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending. Please try again." },
      { status: 500 },
    );
  }
}
