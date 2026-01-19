import { NextResponse } from "next/server";
import { Resend } from "resend";

// Keep existing pattern (global client). Works as long as RESEND_API_KEY is set in runtime.
const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(input: string) {
  // minimal safe for mailto
  return escapeHtml(input).replaceAll(" ", "%20");
}

function safeFilename(name: string) {
  // avoid weird filenames in email clients
  const cleaned = name.replace(/[^\w.\-()\s]/g, "").trim();
  return cleaned || "resume.pdf";
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Server not configured. Missing RESEND_API_KEY." },
        { status: 500 },
      );
    }

    const contentType = req.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let company = "";
    let message = "";
    let website = "";
    let resumeFile: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();

      // Honeypot first
      website = String(fd.get("website") ?? "").trim();
      if (website) {
        return NextResponse.json({ ok: true });
      }

      name = String(fd.get("name") ?? "").trim();
      email = String(fd.get("email") ?? "").trim();
      company = String(fd.get("company") ?? "").trim();
      message = String(fd.get("message") ?? "").trim();

      const f = fd.get("resume");
      resumeFile = f instanceof File ? f : null;
    } else {
      // Backward compatible with your previous JSON flow (no attachment)
      const body = await req.json();

      website = String(body?.website ?? "").trim();
      if (website) {
        return NextResponse.json({ ok: true });
      }

      name = String(body?.name ?? "").trim();
      email = String(body?.email ?? "").trim();
      company = String(body?.company ?? "").trim();
      message = String(body?.message ?? "").trim();
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email." },
        { status: 400 },
      );
    }

    let attachments:
      | Array<{ filename: string; content: Buffer; contentType?: string }>
      | undefined;

    if (resumeFile) {
      const filename = safeFilename(resumeFile.name);

      // PDF only (also allow ".pdf" if browser didn't set MIME)
      const isPdf =
        resumeFile.type === "application/pdf" ||
        filename.toLowerCase().endsWith(".pdf");

      if (!isPdf) {
        return NextResponse.json(
          { ok: false, error: "Resume must be a PDF file." },
          { status: 400 },
        );
      }

      const maxBytes = 5 * 1024 * 1024; // 5MB
      if (resumeFile.size > maxBytes) {
        return NextResponse.json(
          { ok: false, error: "Resume must be under 5MB." },
          { status: 400 },
        );
      }

      const buf = Buffer.from(await resumeFile.arrayBuffer());

      attachments = [
        {
          filename,
          content: buf,
          contentType: "application/pdf",
        },
      ];
    }

    const to = process.env.CONTACT_TO_EMAIL || "info@ritvikglobal.com";
    const from =
      process.env.CONTACT_FROM_EMAIL || "Ritvik Global <onboarding@resend.dev>";

    await resend.emails.send({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: `Ritvik Global Inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}${
        resumeFile ? `\n\nResume: attached (${resumeFile.name})` : ""
      }`,
      html: `
  <div style="background:#f8fafc;padding:24px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;color:#0f172a;">
    <div style="max-width:640px;margin:0 auto;">
      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(2,6,23,0.06);">
        
        <!-- Header -->
        <div style="padding:20px 22px;background:linear-gradient(135deg,#2563eb,#4f46e5);color:#ffffff;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:40px;height:40px;border-radius:14px;background:rgba(255,255,255,0.14);display:flex;align-items:center;justify-content:center;font-weight:800;">
              RG
            </div>
            <div>
              <div style="font-size:14px;font-weight:700;letter-spacing:0.2px;">Ritvik Global</div>
              <div style="font-size:12px;opacity:0.9;">New contact inquiry</div>
            </div>
          </div>
        </div>

        <!-- Body -->
        <div style="padding:22px;">
          <div style="font-size:18px;font-weight:800;margin:0 0 10px;">You received a new message</div>
          <div style="font-size:13px;line-height:1.6;color:#334155;margin:0 0 18px;">
            Below are the details submitted from the website contact form.
          </div>

          <!-- Info grid -->
          <div style="display:grid;grid-template-columns:1fr;gap:10px;margin-bottom:18px;">
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:14px;">
              <div style="font-size:11px;font-weight:800;letter-spacing:0.6px;text-transform:uppercase;color:#64748b;margin-bottom:6px;">From</div>
              <div style="font-size:14px;font-weight:700;color:#0f172a;">${escapeHtml(name)}</div>
              <div style="font-size:13px;color:#334155;margin-top:4px;">
                <a href="mailto:${escapeAttr(email)}" style="color:#1d4ed8;text-decoration:none;font-weight:700;">${escapeHtml(
                  email,
                )}</a>
              </div>
              ${
                company
                  ? `<div style="font-size:13px;color:#334155;margin-top:6px;"><span style="color:#64748b;font-weight:700;">Company:</span> ${escapeHtml(
                      company,
                    )}</div>`
                  : ``
              }
              ${
                resumeFile
                  ? `<div style="font-size:13px;color:#334155;margin-top:6px;"><span style="color:#64748b;font-weight:700;">Resume:</span> Attached (${escapeHtml(
                      resumeFile.name,
                    )})</div>`
                  : ``
              }
            </div>
          </div>

          <!-- Message -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;padding:14px;">
            <div style="font-size:11px;font-weight:800;letter-spacing:0.6px;text-transform:uppercase;color:#64748b;margin-bottom:8px;">Message</div>
            <div style="font-size:14px;line-height:1.75;color:#0f172a;white-space:pre-wrap;">${escapeHtml(
              message,
            )}</div>
          </div>

          <!-- CTA -->
          <div style="margin-top:18px;display:flex;flex-wrap:wrap;gap:10px;">
            <a href="mailto:${escapeAttr(
              email,
            )}" style="display:inline-block;background:#0f172a;color:#ffffff;padding:10px 14px;border-radius:12px;text-decoration:none;font-size:13px;font-weight:800;">
              Reply to ${escapeHtml(name)}
            </a>
            <a href="mailto:info@ritvikglobal.com" style="display:inline-block;background:#eff6ff;color:#1d4ed8;padding:10px 14px;border-radius:12px;text-decoration:none;font-size:13px;font-weight:800;border:1px solid #bfdbfe;">
              Open inbox
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding:14px 22px;border-top:1px solid #e2e8f0;background:#f8fafc;color:#64748b;font-size:12px;line-height:1.5;">
          <div style="font-weight:700;color:#334155;">Ritvik Global</div>
          <div>Website contact form submission</div>
          <div style="margin-top:6px;">If you did not expect this email, you can ignore it.</div>
        </div>

      </div>
    </div>
  </div>
  `,
      ...(attachments ? { attachments } : {}),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Failed to send email." },
      { status: 500 },
    );
  }
}
