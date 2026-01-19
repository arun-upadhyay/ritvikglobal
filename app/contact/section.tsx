"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import Button from "../../components/button";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string; // honeypot
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Ritvik Global Inquiry");
    const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
    );
    return `mailto:info@ritvikglobal.com?subject=${subject}&body=${body}`;
  }, [form]);

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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setError(data?.error || "Failed to send. Please try again.");
        return;
      }

      setSent(true);
      setForm({ name: "", email: "", company: "", message: "", website: "", });
    } catch {
      setError("Network error. Please try again.");
    }
  }

  return (
      <div className="grid gap-10 lg:grid-cols-5">
        {/* FORM */}
        <div className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm sm:p-8">
            {/* soft glow */}
            <div
                className="pointer-events-none absolute -inset-px opacity-70"
                aria-hidden="true"
            >
              <div className="absolute inset-0 rounded-3xl [background:radial-gradient(700px_circle_at_20%_0%,rgba(59,130,246,0.10),transparent_55%)]" />
            </div>

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Send a message</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    We usually respond within 1 business day.
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70">
                  <Clock className="h-4 w-4 text-blue-700" />
                  Typical reply: 24 hours
                </div>
              </div>

              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
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
                    <span className="text-sm font-medium text-slate-800">Name *</span>
                    <input
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                        placeholder="Your name"
                        autoComplete="name"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-medium text-slate-800">Email *</span>
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
                  <span className="text-sm font-medium text-slate-800">Company</span>
                  <input
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      placeholder="Company name"
                      autoComplete="organization"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-slate-800">Message *</span>
                  <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="min-h-[160px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      placeholder="What can we help with?"
                  />
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
                        Message sent successfully. Thanks for contacting us — our team will be in touch shortly.
                  </span>
                    </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button type="submit">Send</Button>
                  <div className="sm:ml-auto text-xs text-slate-500">
                    By contacting us, you agree to be contacted back about your inquiry.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact quick cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Address</div>
                  <div className="text-sm text-slate-600">Bedford, TX</div>
                </div>
              </div>

              <div className="mt-4 space-y-1 text-sm text-slate-700">
                <div>2518 Sakeena Ct</div>
                <div>Bedford, TX 76022</div>
                <div>USA</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Phone</div>
                  <div className="text-sm text-slate-600">Mon to Fri</div>
                </div>
              </div>

              <div className="mt-4 text-sm text-slate-700">
                <span className="font-medium text-slate-900">+1 (603) 660-7055</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Email</div>
                <div className="text-sm text-slate-600">Direct contact</div>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-medium text-slate-900">info@ritvikglobal.com</span>
              </div>
              <Link
                  href="mailto:info@ritvikglobal.com"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Email us now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Next steps */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-sm">
            <h3 className="text-sm font-semibold">Typical next steps</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/85">
              <li>15 minute discovery call</li>
              <li>Proposal with scope, timeline, and estimate</li>
              <li>Kickoff and weekly updates</li>
            </ol>

            <div className="mt-5">
              <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                View services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Small reassurance */}
          <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">What to include</div>
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
