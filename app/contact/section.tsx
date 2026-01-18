"use client";

import { useMemo, useState } from "react";
import Button from "../../components/button";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
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

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.message) {
      setError("Please fill name, email, and message.");
      return;
    }

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
        <h2 className="text-lg font-semibold">Send a message</h2>
        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium">Name *</span>
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium">Email *</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm font-medium">Company</span>
            <input
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
              placeholder="Company name"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium">Message *</span>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="min-h-[140px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
              placeholder="What can we help with"
            />
          </label>

          {error && <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
          {sent && <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">Email client opened. If it did not, copy the email address on the right.</div>}

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit">Open email</Button>
            <Button href={mailto} variant="secondary">Open mailto link</Button>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="text-sm font-semibold">Ritvik Global</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-700">
            <div>2518 Sakeena Ct</div>
            <div>Bedford, TX 76022</div>
            <div>USA</div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
          <h3 className="text-sm font-semibold">Direct contact</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <div>
              <span className="font-medium text-slate-800">Phone:</span> +1 (603) 660-7055
            </div>
            <div>
              <span className="font-medium text-slate-800">Email:</span> info@ritvikglobal.com
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-blue-600 p-6 text-white shadow-soft">
          <h3 className="text-sm font-semibold">Typical next steps</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-blue-100">
            <li>15 minute discovery call</li>
            <li>Proposal with scope, timeline, and estimate</li>
            <li>Kickoff and weekly updates</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
