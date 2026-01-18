"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "./cn";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const activeHref = useMemo(() => {
    // exact match for home, prefix match for others
    const found = nav.find((it) => (it.href === "/" ? pathname === "/" : pathname.startsWith(it.href)));
    return found?.href ?? "/";
  }, [pathname]);

  return (
      <>
        {/* Spacer so page content doesn't jump under fixed nav */}
        <div className="h-16" />

        <header
            className={cn(
                "fixed inset-x-0 top-0 z-[100] border-b border-slate-200/60",
                "bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60",
                "shadow-sm"
            )}
        >
          <div className="container flex h-16 items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
              RG
            </span>
              <span className="text-slate-900">RitvikGlobal</span>
            </Link>

            {/* Desktop */}
            <nav className="hidden items-center gap-2 md:flex">
              {nav.map((it) => {
                const active = it.href === activeHref;
                return (
                    <Link
                        key={it.href}
                        href={it.href}
                        className={cn(
                            "rounded-xl px-4 py-2 text-sm font-medium transition",
                            active
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        )}
                    >
                      {it.label}
                    </Link>
                );
              })}
            </nav>

            {/* Mobile button */}
            <button
                className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-slate-200 hover:bg-slate-50 md:hidden"
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
              <div className="border-t border-slate-200/60 bg-white/95 backdrop-blur-xl md:hidden">
                <div className="container flex flex-col items-center gap-1 py-3">
                  {nav.map((it) => {
                    const active = it.href === activeHref;
                    return (
                        <Link
                            key={it.href}
                            href={it.href}
                            className={cn(
                                "w-full max-w-xs rounded-full px-5 py-3 text-center text-sm font-medium transition",
                                active
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-slate-700 hover:bg-slate-100"
                            )}
                        >
                          {it.label}
                        </Link>
                    );
                  })}
                </div>
              </div>
          )}
        </header>
      </>
  );
}
