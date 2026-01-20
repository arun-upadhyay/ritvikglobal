"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  X,
} from "lucide-react";
import Button from "../../components/button";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string; // honeypot
  resume: File | null; // attachment
};

function formatBytes(bytes: number) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  const val = bytes / Math.pow(1024, i);
  return `${val.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "",
    resume: null,
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  // ensures the file input visually clears after submit
  const [fileInputKey, setFileInputKey] = useState(0);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSent(false);

    if (!form.name || !form.email || !form.message) {
      setError("Please fill name, email, and message.");
      return;
    }

    if (form.resume) {
      const isPdf =
        form.resume.type === "application/pdf" ||
        form.resume.name.toLowerCase().endsWith(".pdf");

      if (!isPdf) {
        setError("Resume must be a PDF file.");
        return;
      }
      if (form.resume.size > 5 * 1024 * 1024) {
        setError("Resume must be under 5MB.");
        return;
      }
    }

    try {
      setIsSending(true);

      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("company", form.company);
      fd.append("message", form.message);
      fd.append("website", form.website);
      if (form.resume) fd.append("resume", form.resume);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setError(data?.error || "Failed to send. Please try again.");
        return;
      }

      setSent(true);
      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        website: "",
        resume: null,
      });

      setFileInputKey((k) => k + 1);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-5">
      {/* FORM */}
      <div className="lg:col-span-3">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm sm:p-8">
          <div
            className="pointer-events-none absolute -inset-px opacity-70"
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-3xl [background:radial-gradient(700px_circle_at_20%_0%,rgba(59,130,246,0.10),transparent_55%)]" />
          </div>

          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Send a message
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  We usually respond within 1 business day.
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70 sm:flex">
                <Clock className="h-4 w-4 text-blue-700" />
                Typical reply: 24 hours
              </div>
            </div>

            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              {/* honeypot */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-800">
                    Name *
                  </span>
                  <input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-800">
                    Email *
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-800">
                  Company
                </span>
                <input
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  placeholder="Company name"
                  autoComplete="organization"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-800">
                  Message *
                </span>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="min-h-[160px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  placeholder="What can we help with?"
                />
              </label>

              {/* Attachment */}
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-800">
                  Resume (PDF, optional)
                </span>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <FileText className="h-4 w-4 text-slate-500" />

                  <input
                    key={fileInputKey}
                    type="file"
                    accept="application/pdf"
                    onChange={(e) =>
                      update("resume", e.target.files?.[0] || null)
                    }
                    className="w-full text-sm text-slate-700 file:mr-4 file:rounded-xl file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
                  />

                  {form.resume && (
                    <button
                      type="button"
                      onClick={() => {
                        update("resume", null);
                        setFileInputKey((k) => k + 1);
                      }}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                      aria-label="Remove resume"
                      title="Remove"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {form.resume && (
                  <div className="text-xs text-slate-500">
                    Selected:{" "}
                    <span className="font-medium text-slate-700">
                      {form.resume.name}
                    </span>{" "}
                    <span className="text-slate-400">
                      ({formatBytes(form.resume.size)})
                    </span>
                  </div>
                )}
              </label>

              {error && (
                <div className="flex items-start gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {sent && (
                <div className="flex items-start gap-2 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Message sent successfully. Thanks for contacting us — our
                    team will be in touch shortly.
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" disabled={isSending}>
                  {isSending ? "Sending..." : "Send"}
                </Button>

                <div className="sm:ml-auto text-xs text-slate-500">
                  By contacting us, you agree to be contacted back about your
                  inquiry.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="lg:col-span-2 space-y-6">
        {/* FIX: use 2 columns earlier than sm to avoid "unused right space" on ~520-639px */}
        <div className="grid gap-4 min-[520px]:grid-cols-2 lg:grid-cols-1">
          {/* Address */}
          <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Address
                </div>
                <div className="text-sm text-slate-600">Bedford, TX</div>
              </div>
            </div>
            <div className="mt-4 space-y-1 text-sm text-slate-700">
              <div>2518 Sakeena Ct</div>
              <div>Bedford, TX 76022</div>
              <div>USA</div>
            </div>

            {/* optional action */}
            <div className="mt-4">
              <Link
                href="https://maps.google.com/?q=2518%20Sakeena%20Ct%20Bedford%20TX%2076022"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Open in Maps <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Phone */}
          <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Phone
                </div>
                <div className="text-sm text-slate-600">Mon to Fri</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-700">
              <span className="font-medium text-slate-900">
                +1 (603) 660-7055
              </span>
            </div>

            {/* optional action */}
            <div className="mt-4">
              <Link
                href="tel:+16036607055"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Call now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Email spans full width in the 2-col mid breakpoint */}
          <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm min-[520px]:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Email
                </div>
                <div className="text-sm text-slate-600">Direct contact</div>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-medium text-slate-900">
                  info@ritvikglobal.com
                </span>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <Link
                  href="mailto:info@ritvikglobal.com"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Email us now <ArrowRight className="h-4 w-4" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard?.writeText("info@ritvikglobal.com")
                  }
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 sm:ml-auto"
                >
                  Copy email
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-sm">
          <h3 className="text-sm font-semibold">Typical next steps</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/85">
            <li>15 minute discovery call</li>
            <li>Proposal with scope, timeline, and estimate</li>
            <li>Kickoff and weekly updates</li>
          </ol>
        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">
            What to include
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
              Your goal and timeline
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
              Current stack and constraints
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
              Any links or references
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
