import { company } from "@/lib/data";
import type { StoredInquiry } from "@/lib/contact";

type EmailPayload = {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

type EmailTemplateOptions = {
  preheader: string;
  eyebrow: string;
  heading: string;
  intro: string;
  supporting: string;
  inquiry: StoredInquiry;
  closing: string;
};

const resendApiUrl = "https://api.resend.com/emails";
const resendFallbackFrom = "Tessera Studio <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatSubmittedAt(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function detailRows(inquiry: StoredInquiry) {
  return [
    { label: "Name", value: inquiry.name },
    { label: "Email", value: inquiry.email },
    { label: "Mobile Number", value: inquiry.mobile },
    { label: "Company", value: inquiry.company },
    { label: "Service", value: inquiry.service },
    { label: "Budget", value: inquiry.budget },
    { label: "Submitted", value: formatSubmittedAt(inquiry.submittedAt) },
    { label: "Lead ID", value: inquiry.id }
  ];
}

function buildInquiryEmail({
  preheader,
  eyebrow,
  heading,
  intro,
  supporting,
  inquiry,
  closing
}: EmailTemplateOptions) {
  const rows = detailRows(inquiry);
  const escapedMessage = escapeHtml(inquiry.message);
  const summaryHtml = rows
    .map(
      (row) => `
        <tr>
          <td style="padding: 0 0 8px; color: #a1a1aa; font-size: 13px; font-family: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace;">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding: 0 0 8px; color: #ffffff; font-size: 14px; text-align: right;">
            ${escapeHtml(row.value)}
          </td>
        </tr>
      `
    )
    .join("");

  const summaryText = rows.map((row) => `${row.label}: ${row.value}`).join("\n");

  const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(heading)}</title>
      </head>
      <body style="margin: 0; background: #070707; color: #ffffff; font-family: 'Space Grotesk', Arial, sans-serif;">
        <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
          ${escapeHtml(preheader)}
        </div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #070707; padding: 28px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 680px; border: 1px solid rgba(255,255,255,.1); border-radius: 28px; overflow: hidden; background: linear-gradient(180deg, rgba(123,94,167,.14), rgba(8,8,8,.96) 34%);">
                <tr>
                  <td style="padding: 32px 32px 20px;">
                    <div style="display: inline-block; padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.05); color: #d9d4ff; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; font-family: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace;">
                      ${escapeHtml(eyebrow)}
                    </div>
                    <h1 style="margin: 18px 0 14px; font-size: 38px; line-height: 1.05; letter-spacing: -0.04em; font-weight: 700;">
                      ${escapeHtml(heading)}
                    </h1>
                    <p style="margin: 0; color: rgba(255,255,255,.72); font-size: 16px; line-height: 1.75;">
                      ${escapeHtml(intro)}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 32px 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-radius: 24px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.04);">
                      <tr>
                        <td style="padding: 24px;">
                          <p style="margin: 0 0 18px; color: #ffffff; font-size: 18px; font-weight: 600;">
                            Project structure
                          </p>
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            ${summaryHtml}
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 32px 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-radius: 24px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.03);">
                      <tr>
                        <td style="padding: 24px;">
                          <p style="margin: 0 0 10px; color: #ffffff; font-size: 18px; font-weight: 600;">
                            Project notes
                          </p>
                          <p style="margin: 0; color: rgba(255,255,255,.74); font-size: 15px; line-height: 1.8; white-space: pre-wrap;">
                            ${escapedMessage}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 32px 14px;">
                    <div style="border-radius: 24px; border: 1px solid rgba(255,255,255,.08); background: rgba(255,255,255,.025); padding: 20px 24px;">
                      <p style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 600;">
                        What happens next
                      </p>
                      <p style="margin: 0; color: rgba(255,255,255,.68); font-size: 15px; line-height: 1.75;">
                        ${escapeHtml(supporting)}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 32px 32px;">
                    <p style="margin: 0; color: rgba(255,255,255,.78); font-size: 15px; line-height: 1.75;">
                      ${escapeHtml(closing)}
                    </p>
                    <p style="margin: 18px 0 0; color: rgba(255,255,255,.42); font-size: 13px; line-height: 1.6;">
                      ${escapeHtml(company.name)}<br />
                      ${escapeHtml(company.email)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const text = [
    heading,
    "",
    intro,
    "",
    "Project structure",
    summaryText,
    "",
    "Project notes",
    inquiry.message,
    "",
    "What happens next",
    supporting,
    "",
    closing,
    "",
    `${company.name} | ${company.email}`
  ].join("\n");

  return { html, text };
}

export function buildAdminNotificationEmail(inquiry: StoredInquiry) {
  return buildInquiryEmail({
    preheader: `New inquiry from ${inquiry.name} at ${inquiry.company}.`,
    eyebrow: "New project inquiry",
    heading: `${inquiry.name} just submitted a project brief`,
    intro:
      "A new contact form submission has landed from the website. Here is the project structure and the exact brief the customer shared.",
    supporting:
      "Reply directly to this email to continue the conversation with the customer, or move the brief into your internal project workflow.",
    inquiry,
    closing: "This message was generated automatically by the Tessera Studio website."
  });
}

export function buildCustomerConfirmationEmail(inquiry: StoredInquiry) {
  return buildInquiryEmail({
    preheader: `We received your Tessera Studio project inquiry.`,
    eyebrow: "Project inquiry received",
    heading: "Your project brief landed with Tessera Studio",
    intro:
      "Thanks for reaching out. We received your inquiry and kept a clean copy of the details you submitted so we can review the project properly.",
    supporting:
      "We will review your brief and get back to you with the next step, typically within one business day. If anything changes, just reply to this email.",
    inquiry,
    closing: "We are looking forward to learning more about what you want to build."
  });
}
export async function sendResendEmail({ to, subject, html, text, replyTo }: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || `${company.name} <no-reply@tesseraweb.in>`;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing. Set it in .env.local");
  }

  const recipients = Array.isArray(to) ? to : [to];

  console.log("[Resend] Sending email:", { from, to: recipients, subject });

  const response = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: recipients,
      subject,
      html,
      text,
      replyTo
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("[Resend] FAILED:", { status: response.status, error: errorBody, from, to: recipients });
    throw new Error(`Resend email failed (${response.status}): ${errorBody}`);
  }

  const result = await response.json();
  console.log("[Resend] Success:", result);
  return result;
}

