import Link from "next/link";
import { Phone, Mail, Facebook, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-white">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-28 right-[-6rem] h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
      </div>

      {/* Added px-4 sm:px-6 lg:px-8 for container padding */}
      <div className="relative container px-4 py-14 sm:px-6 lg:px-8">
        {/* Changed gap-10 to gap-8 md:gap-10 for better mobile spacing */}
        <div className="grid gap-8 md:grid-cols-4 md:gap-10">
          {/* Brand + CTA */}
          <div className="space-y-5 text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-sm">
                RG
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">
                  Ritvik Global
                </div>
                <div className="text-xs text-slate-500">
                  Innovating today. Building tomorrow.
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600">
              Practical consulting and modern delivery for teams that need
              reliable outcomes and clean execution.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>

            <ul className="space-y-2 text-sm md:space-y-2 md:text-left">
              {[
                "Managed IT Services",
                "Managed Security Services",
                "IT Consulting",
                "Digital Marketing",
                "UI UX Design",
                "Data Analytics",
                "eCommerce Solutions",
                "QA and Testing",
              ].map((s) => (
                <li key={s} className="flex justify-center md:justify-start">
                  <span className="group inline-flex cursor-default items-center text-slate-600 transition hover:text-slate-900">
                    <span className="relative">
                      {s}
                      <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>

            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact Us" },
                { href: "/careers", label: "Careers" },
              ].map((it) => (
                <li
                  key={it.label}
                  className="flex justify-center md:justify-start"
                >
                  <Link
                    href={it.href}
                    className="group inline-flex items-center text-slate-600 transition hover:text-slate-900"
                  >
                    <span className="relative">
                      {it.label}
                      <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>

            <div className="mx-auto w-full max-w-sm rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm md:mx-0">
              <div className="space-y-3 text-sm text-slate-700">
                {/* Made phone number clickable with tel: link */}
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Phone className="h-4 w-4 flex-shrink-0 text-blue-700" />
                  <a
                    href="tel:+16036607055"
                    className="font-medium text-slate-900 transition hover:text-blue-600"
                  >
                    +1 (603) 660-7055
                  </a>
                </div>

                {/* Made email clickable with mailto: link and added break-all for long emails */}
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Mail className="h-4 w-4 flex-shrink-0 text-blue-700" />
                  <a
                    href="mailto:info@ritvikglobal.com"
                    className="break-all font-medium text-slate-900 transition hover:text-blue-600"
                  >
                    info@ritvikglobal.com
                  </a>
                </div>
              </div>

              <div className="mt-4 flex justify-center gap-3 md:justify-start">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>

                <a
                  href="https://www.linkedin.com/company/ritvik-global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="text-xs text-slate-500">
              Available Mon to Fri. For urgent requests, email is fastest.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-slate-200/70 bg-white/60 py-6 backdrop-blur">
        {/* Added px-4 sm:px-6 lg:px-8 for container padding */}
        <div className="container flex flex-col items-center justify-between gap-3 px-4 text-xs text-slate-500 sm:px-6 md:flex-row lg:px-8">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Ritvik Global. All rights reserved.
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link href="/privacy" className="transition hover:text-slate-700">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-slate-700">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
