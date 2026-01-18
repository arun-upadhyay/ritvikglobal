import Link from "next/link";
import { Phone, Mail, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
      <footer className="border-t border-slate-200 bg-white">
        <div className="container grid gap-10 py-14 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
              RG
            </span>
              <span className="text-slate-900">Ritvik Global</span>
            </div>

            <p className="text-sm text-slate-600">
              Innovating today. Building tomorrow.
            </p>

            <div className="text-sm text-slate-600 leading-relaxed">
              <div>2518 Sakeena Ct</div>
              <div>Bedford, TX 76022</div>
              <div>USA</div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="space-y-2 text-sm">
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
                  <li
                      key={s}
                      className="group cursor-default text-slate-600 transition hover:text-slate-900"
                  >
                <span className="relative">
                  {s}
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </span>
                  </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Blog" },
                { href: "/careers", label: "Careers" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/contact", label: "Contact Us" },
              ].map((it) => (
                  <li key={it.label}>
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
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>

            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+1 (603) 660-7055</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>info@ritvikglobal.com</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 py-6">
          <div className="container flex flex-col items-center justify-between gap-2 text-xs text-slate-500 md:flex-row">
            <div>© {new Date().getFullYear()} Ritvik Global. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="transition hover:text-slate-700">
                Privacy
              </a>
              <a href="#" className="transition hover:text-slate-700">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
