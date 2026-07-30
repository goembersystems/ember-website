import { Resend } from "resend";
import { NextResponse } from "next/server";

const CONTACT_TO = "thatonehondarider@gmail.com";
const FROM = "Ember Systems <onboarding@resend.dev>";

const ALLOWED_PROJECT_TYPES = new Set([
  "AI Automation",
  "Custom Website",
  "Internal Dashboard",
  "Custom Software",
  "Lead Capture System",
  "Other",
]);

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body. Please try again." },
      { status: 400 },
    );
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const projectType = asTrimmedString(body.projectType);
  const message = asTrimmedString(body.message);

  if (!name || !email || !projectType || !message) {
    return NextResponse.json(
      {
        error:
          "Missing required fields. Name, email, project type, and message are required.",
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

  if (!ALLOWED_PROJECT_TYPES.has(projectType)) {
    return NextResponse.json(
      { error: "Please select a valid project type." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email is not configured on the server yet. Please try again later." },
      { status: 503 },
    );
  }

  const text = [
    "New project inquiry from the Ember Systems website:",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Project Type: ${projectType}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: "New Ember Systems Project Inquiry",
      text,
    });

    if (error) {
      console.error("Resend contact error:", error);
      return NextResponse.json(
        { error: "Could not send your message right now. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Unexpected contact error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending. Please try again." },
      { status: 500 },
    );
  }
}
