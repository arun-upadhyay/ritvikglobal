"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, Mail, Facebook, Linkedin, ArrowRight, ChevronDown } from "lucide-react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [openServices, setOpenServices] = useState(true);
  const [openCompany, setOpenCompany] = useState(true);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    // Mobile collapsed, desktop expanded
    if (isMobile) {
      setOpenServices(false);
      setOpenCompany(false);
    } else {
      setOpenServices(true);
      setOpenCompany(true);
    }
  }, [isMobile]);

  return (
      <footer className="relative overflow-hidden border-t border-slate-200/70 bg-white">
        {/* subtle background accents */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -bottom-28 right-[-6rem] h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
        </div>

        <div className="relative container px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          {/* tighter gap on mobile */}
          <div className="grid gap-6 md:grid-cols-4 md:gap-10">
            {/* Brand + CTA */}
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-sm">
                RG
              </span>
                <div className="leading-tight">
                  <div className="text-[15px] font-semibold text-slate-900">
                    Ritvik Global
                  </div>
                  <div className="text-xs text-slate-500">
                    Innovating today. Building tomorrow.
                  </div>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-600">
                Practical consulting and modern delivery for teams that need reliable outcomes and clean execution.
              </p>

              <div className="flex justify-center md:justify-start">
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Services (accordion on mobile) */}
            <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4 text-center shadow-sm md:border-0 md:bg-transparent md:p-0 md:text-left md:shadow-none">
              <button
                  type="button"
                  className="flex w-full items-center justify-between"
                  onClick={() => isMobile && setOpenServices((v) => !v)}
                  aria-expanded={openServices}
              >
                <h3 className="text-[16px] font-semibold text-slate-900">Services</h3>
                <ChevronDown
                    className={`h-4 w-4 text-slate-600 transition md:hidden ${openServices ? "rotate-180" : ""}`}
                />
              </button>

              <div className={`${openServices ? "mt-3" : "hidden"} md:mt-4 md:block`}>
                <ul className="space-y-2 text-[15px]">
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
                    <span className="group inline-flex cursor-default items-center font-medium text-slate-600 transition hover:text-slate-900">
                      <span className="relative">
                        {s}
                        <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company (accordion on mobile) */}
            <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4 text-center shadow-sm md:border-0 md:bg-transparent md:p-0 md:text-left md:shadow-none">
              <button
                  type="button"
                  className="flex w-full items-center justify-between"
                  onClick={() => isMobile && setOpenCompany((v) => !v)}
                  aria-expanded={openCompany}
              >
                <h3 className="text-[16px] font-semibold text-slate-900">Company</h3>
                <ChevronDown
                    className={`h-4 w-4 text-slate-600 transition md:hidden ${openCompany ? "rotate-180" : ""}`}
                />
              </button>

              <div className={`${openCompany ? "mt-3" : "hidden"} md:mt-4 md:block`}>
                <ul className="space-y-2 text-[15px]">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Us" },
                    { href: "/services", label: "Services" },
                    { href: "/contact", label: "Contact Us" },
                    { href: "/careers", label: "Careers" },
                  ].map((it) => (
                      <li key={it.label} className="flex justify-center md:justify-start">
                        <Link
                            href={it.href}
                            className="group inline-flex items-center font-medium text-slate-600 transition hover:text-slate-900"
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
            </div>

            {/* Contact */}
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-[16px] font-semibold text-slate-900">Contact</h3>

              <div className="mx-auto w-full max-w-sm rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm md:mx-0">
                <div className="space-y-3 text-[15px] text-slate-700">
                  <div className="flex items-center justify-center gap-2 md:justify-start">
                    <Phone className="h-5 w-5 flex-shrink-0 text-blue-700" />
                    <a
                        href="tel:+16036607055"
                        className="font-semibold text-slate-900 transition hover:text-blue-600"
                    >
                      +1 (603) 660-7055
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-2 md:justify-start">
                    <Mail className="h-5 w-5 flex-shrink-0 text-blue-700" />
                    <a
                        href="mailto:info@ritvikglobal.com"
                        className="break-all font-semibold text-slate-900 transition hover:text-blue-600"
                    >
                      info@ritvikglobal.com
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex justify-center gap-3 md:justify-center">
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
        <div className="relative border-t border-slate-200/70 bg-white/60 py-5 backdrop-blur">
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