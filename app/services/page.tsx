import { Compass, Megaphone, Sparkles, Server, Shield, LineChart, ShoppingCart, Bug } from "lucide-react";
import Button from "../../components/button";

const items = [
  {
    title: "Strategic Consulting",
    icon: Compass,
    desc: "Align technology with business goals. We clarify priorities, map a realistic roadmap, and help you invest where it matters.",
  },
  {
    title: "Digital Growth Marketing",
    icon: Megaphone,
    desc: "SEO, performance campaigns, and content strategy built to drive qualified traffic and consistent leads.",
  },
  {
    title: "UI UX Innovation",
    icon: Sparkles,
    desc: "User first design systems and interfaces that improve conversions, reduce friction, and look great on every device.",
  },
  {
    title: "Managed IT Services",
    icon: Server,
    desc: "Reliable monitoring, patching, backups, and help desk support to keep your business running.",
  },
  {
    title: "Managed Security Services",
    icon: Shield,
    desc: "Threat monitoring, hardening, and incident response processes designed for modern risk.",
  },
  {
    title: "Data Analytics",
    icon: LineChart,
    desc: "Dashboards, KPI definitions, and data pipelines that turn raw data into decisions.",
  },
  {
    title: "eCommerce Solutions",
    icon: ShoppingCart,
    desc: "Storefront builds, payment integrations, and performance optimization for modern commerce.",
  },
  {
    title: "QA and Testing",
    icon: Bug,
    desc: "Test strategy, automation support, and release readiness checks to reduce regressions.",
  }
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="container py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Services</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Solutions built for real business outcomes</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            This Next.js project keeps all content locally in code. You can easily edit the text, add pages, and swap icons and images without any database.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Request a consultation</Button>
            <Button href="/" variant="secondary">Back to home</Button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <div key={it.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                  <it.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-lg font-semibold">{it.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
