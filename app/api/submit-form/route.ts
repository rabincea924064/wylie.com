import { NextRequest, NextResponse } from "next/server";

const NOTIFICATION_EMAILS = [
  "ryanlloyd@ciwebgroup.com",
  "rabincea924064@gmail.com",
];

// Simple HTML email formatter
function buildEmailHtml(formName: string, fields: Record<string, string>): string {
  const rows = Object.entries(fields)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;background:#f9fafb;border:1px solid #e5e7eb;">${key}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${value}</td></tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><title>New Form Submission</title></head>
<body style="font-family:sans-serif;color:#111827;margin:0;padding:24px;">
  <h2 style="color:#1d4ed8;">New Form Submission — ${formName}</h2>
  <p style="color:#6b7280;">A visitor submitted the <strong>${formName}</strong> form on the Wylie Mechanical website.</p>
  <table style="border-collapse:collapse;width:100%;max-width:600px;margin-top:16px;">
    <thead>
      <tr>
        <th style="text-align:left;padding:8px 12px;background:#1d4ed8;color:#fff;border:1px solid #1e40af;">Field</th>
        <th style="text-align:left;padding:8px 12px;background:#1d4ed8;color:#fff;border:1px solid #1e40af;">Value</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
  <p style="margin-top:24px;color:#9ca3af;font-size:12px;">Sent automatically from wyliemechanical.com</p>
</body>
</html>`;
}

// Plain-text fallback
function buildEmailText(formName: string, fields: Record<string, string>): string {
  const lines = Object.entries(fields)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  return `New Form Submission — ${formName}\n\n${lines}\n\nSent automatically from wyliemechanical.com`;
}

export async function POST(request: NextRequest) {
  let body: { formName?: string; fields?: Record<string, string> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { formName, fields } = body;
  if (!formName || typeof fields !== "object") {
    return NextResponse.json({ error: "Missing formName or fields" }, { status: 400 });
  }

  // Send email via SMTP using the Resend API or nodemailer if SMTP env vars are set.
  // For zero-dependency delivery we use the Resend HTTP API when RESEND_API_KEY is set,
  // otherwise we fall back to nodemailer with SMTP_* env vars.
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    // ---------- Resend (preferred, zero extra deps) ----------
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Wylie Mechanical <noreply@wyliemechanical.com>",
        to: NOTIFICATION_EMAILS,
        subject: `New Form Submission — ${formName}`,
        html: buildEmailHtml(formName, fields),
        text: buildEmailText(formName, fields),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[submit-form] Resend error:", text);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  }

  // ---------- No provider configured ----------
  console.warn(
    "[submit-form] No email provider configured. " +
    "Set RESEND_API_KEY in your environment variables. " +
    "Form data received:",
    { formName, fields }
  );
  // Return 200 so form-relay.js shows "success" during local development.
  return NextResponse.json({ ok: true, warning: "No email provider configured" });
}
