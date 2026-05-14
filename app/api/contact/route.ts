import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { validateInquiry, type StoredInquiry } from "@/lib/contact";
import {
  buildAdminNotificationEmail,
  buildCustomerConfirmationEmail,
  sendResendEmail
} from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function generateLeadId(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const l1 = letters[Math.floor(Math.random() * letters.length)];
  const l2 = letters[Math.floor(Math.random() * letters.length)];
  const d1 = digits[Math.floor(Math.random() * digits.length)];
  const d2 = digits[Math.floor(Math.random() * digits.length)];
  return `TS-${l1}${l2}${d1}${d2}`;
}

async function persistInquiry(inquiry: StoredInquiry) {
  const shouldPersistLocally =
    process.env.PERSIST_LEADS_LOCALLY === "true" || process.env.NODE_ENV !== "production";

  if (!shouldPersistLocally) return;

  const dataDir = path.join(process.cwd(), "data");
  const dataFile = path.join(dataDir, "leads.json");

  await fs.mkdir(dataDir, { recursive: true });

  let existing: StoredInquiry[] = [];
  try {
    const raw = await fs.readFile(dataFile, "utf8");
    existing = JSON.parse(raw) as StoredInquiry[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
  }

  existing.unshift(inquiry);
  await fs.writeFile(dataFile, `${JSON.stringify(existing, null, 2)}\n`, "utf8");
}

async function sendWebhook(inquiry: StoredInquiry) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(inquiry)
  });

  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`);
  }
}

async function sendInquiryEmails(inquiry: StoredInquiry) {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "contact@tesseraweb.in";
  const adminTemplate = buildAdminNotificationEmail(inquiry);
  const customerTemplate = buildCustomerConfirmationEmail(inquiry);

  await Promise.all([
    sendResendEmail({
      to: adminEmail,
      subject: `New project inquiry: ${inquiry.company} - ${inquiry.service}`,
      html: adminTemplate.html,
      text: adminTemplate.text,
      replyTo: inquiry.email
    }),
    sendResendEmail({
      to: inquiry.email,
      subject: `We received your project inquiry | Tessera Studio`,
      html: customerTemplate.html,
      text: customerTemplate.text,
      replyTo: adminEmail
    })
  ]);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const validation = validateInquiry(body);

  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: validation.error, fields: validation.fields },
      { status: 400 }
    );
  }

  const inquiry: StoredInquiry = {
    ...validation.data,
    id: generateLeadId(),
    submittedAt: new Date().toISOString(),
    source: "website"
  };

  try {
    await persistInquiry(inquiry);
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json(
      {
        ok: false,
        error: "We could not save the inquiry right now. Please email contact@tesseraweb.in."
      },
      { status: 500 }
    );
  }

  let confirmationQueued = true;

  try {
    await sendWebhook(inquiry);
  } catch (error) {
    console.error("Contact webhook failed", error);
  }

  try {
    await sendInquiryEmails(inquiry);
  } catch (error) {
    confirmationQueued = false;
    console.error("Contact email delivery failed", error);
  }

  return NextResponse.json({
    ok: true,
    message: confirmationQueued
      ? "Thanks. Your project brief landed with Tessera and a confirmation email is on its way."
      : "Thanks. Your project brief landed with Tessera. We saved your details, but the confirmation email could not be sent right now.",
    leadId: inquiry.id,
    confirmationQueued
  });
}
