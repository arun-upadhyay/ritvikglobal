import {
  Compass,
  Megaphone,
  Sparkles,
  Server,
  Shield,
  LineChart,
  ShoppingCart,
  Bug,
} from "lucide-react";
import Link from "next/link";
import Button from "../../components/button";

const items = [
  {
    title: "Strategic Consulting",
    icon: Compass,
    desc: "Align technology with business goals. We clarify priorities, map a realistic roadmap, and help you invest where it matters.",
    href: "/services#strategic-consulting",
  },
  {
    title: "Digital Growth Marketing",
    icon: Megaphone,
    desc: "SEO, performance campaigns, and content strategy built to drive qualified traffic and consistent leads.",
    href: "/services#digital-marketing",
  },
  {
    title: "UI UX Innovation",
    icon: Sparkles,
    desc: "User first design systems and interfaces that improve conversions, reduce friction, and look great on every device.",
    href: "/services#ui-ux",
  },
  {
    title: "Managed IT Services",
    icon: Server,
    desc: "Reliable monitoring, patching, backups, and help desk support to keep your business running.",
    href: "/services#managed-it",
  },
  {
    title: "Managed Security Services",
    icon: Shield,
    desc: "Threat monitoring, hardening, and incident response processes designed for modern risk.",
    href: "/services#security",
  },
  {
    title: "Data Analytics",
    icon: LineChart,
    desc: "Dashboards, KPI definitions, and data pipelines that turn raw data into decisions.",
    href: "/services#analytics",
  },
  {
    title: "eCommerce Solutions",
    icon: ShoppingCart,
    desc: "Storefront builds, payment integrations, and performance optimization for modern commerce.",
    href: "/services#ecommerce",
  },
  {
    title: "QA and Testing",
    icon: Bug,
    desc: "Test strategy, automation support, and release readiness checks to reduce regressions.",
    href: "/services#qa-testing",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/services-hero.png')" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/60 to-slate-950/85"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 opacity-25 [background:radial-gradient(900px_circle_at_15%_20%,rgba(59,130,246,0.22),transparent_45%),radial-gradient(700px_circle_at_85%_30%,rgba(255,255,255,0.12),transparent_50%)]"
          aria-hidden="true"
        />

        {/* Fix: safer responsive padding + horizontal padding */}
        <div className="relative container px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-8">
          <h1 className="mt-3 max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Solutions built for real business outcomes
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200">
            Clear strategy, fast execution, and maintainable delivery. We help
            teams modernize systems, grow digital presence, and operate
            securely.
          </p>

          {/* Fix: make buttons full width on mobile for better tapping */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" className="w-full sm:w-auto">
              Request a consultation
            </Button>
            <Button href="/" variant="secondary" className="w-full sm:w-auto">
              Back to home
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["Practical delivery", "Roadmaps and hands on build support"],
              ["Modern stack", "Next.js, APIs, cloud, automation"],
              ["Security aware", "Best practices built into process"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                  {k}
                </div>
                <div className="mt-1 text-sm text-slate-100">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-slate-50">
        {/* Fix: horizontal padding */}
        <div className="container px-4 py-16 sm:px-6 lg:px-8">
          {/* Fix: stack nicely on mobile */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                Capabilities
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                What we deliver
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Engagements can be project based or ongoing support depending on
                your needs.
              </p>
            </div>

            <Link
              href="/contact"
              className="hidden rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 sm:inline-flex focus:outline-none focus:ring-2 focus:ring-slate-900/40"
            >
              Get pricing
            </Link>
          </div>

          {/* Fix: make cards clickable for real UX */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <Link
                key={it.title}
                href={it.href}
                className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Learn more about ${it.title}`}
              >
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 transition group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 rounded-3xl [background:radial-gradient(600px_circle_at_20%_10%,rgba(59,130,246,0.16),transparent_55%)]" />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                      <it.icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {it.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {it.desc}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h3 className="text-balance text-xl font-semibold text-slate-900">
                  Want a plan for your next 30 days
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We can map quick wins, risks, and a delivery plan that fits
                  your team and budget.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/40 sm:w-auto"
                >
                  Book a call
                </Link>
                <Link
                  href="/about"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900/20 sm:w-auto"
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
