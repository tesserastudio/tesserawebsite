import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/test-email
 *
 * A lightweight diagnostic endpoint that sends a single test email via Resend.
 * Use it from your browser: http://localhost:3000/api/test-email
 *
 * DELETE THIS FILE before deploying to production.
 */
export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || "Tessera Studio <no-reply@tesseraweb.in>";
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "contact@tesseraweb.in";

  if (!apiKey) {
    return NextResponse.json({
      ok: false,
      step: "env_check",
      error: "RESEND_API_KEY is not set in .env.local"
    }, { status: 500 });
  }

  // Test DNS / network connectivity
  try {
    await fetch("https://api.resend.com", {
      method: "GET",
      signal: AbortSignal.timeout(10000)
    });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({
      ok: false,
      step: "network_check",
      error: `Cannot reach api.resend.com: ${error.message}`,
      hint: "Check your internet connection / firewall / VPN."
    }, { status: 500 });
  }

  // Send test email
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [adminEmail],
        subject: "Tessera Test Email - Resend is working!",
        html: `<h2>✅ Resend is working</h2><p>Sent from <strong>${from}</strong> to <strong>${adminEmail}</strong> at ${new Date().toISOString()}.</p>`,
        text: `Resend is working. Sent from ${from} at ${new Date().toISOString()}.`
      })
    });

    const body = await response.text();

    if (!response.ok) {
      let parsed;
      try { parsed = JSON.parse(body); } catch { parsed = body; }
      return NextResponse.json({
        ok: false,
        step: "send_email",
        status: response.status,
        resendError: parsed,
        from,
        to: adminEmail,
        hint: response.status === 403
          ? "Domain not verified. Verify your domain at https://resend.com/domains"
          : response.status === 401
            ? "Invalid API key."
            : response.status === 429
              ? "Rate limited. Wait a minute and try again."
              : "Check the resendError field for details."
      }, { status: 500 });
    }

    let result;
    try { result = JSON.parse(body); } catch { result = body; }

    return NextResponse.json({
      ok: true,
      message: `Test email sent successfully!`,
      from,
      to: adminEmail,
      resendResponse: result
    });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({
      ok: false,
      step: "send_email",
      error: error.message,
    }, { status: 500 });
  }
}
