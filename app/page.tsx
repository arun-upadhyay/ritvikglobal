import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Megaphone,
  Server,
  Shield,
  Sparkles,
} from "lucide-react";
import Button from "../components/button";
import HeroSlider from "../components/HeroSlider";

const slides = [
  {
    src: "/slider/slide-1.jpg",
    alt: "Modern technology consulting",
    eyebrow: "Ritvik Global",
    title: "Modern IT consulting built for delivery",
    desc: "Strategy, engineering, and staffing support to help you launch faster and run more reliably.",
  },
  {
    src: "/slider/slide-2.jpg",
    alt: "Software development and cloud modernization",
    eyebrow: "Build and modernize",
    title: "Web apps, cloud, and automation",
    desc: "We build scalable solutions using modern frameworks and practical architecture that teams can maintain.",
  },
  {
    src: "/slider/slide-3.jpg",
    alt: "Team collaboration",
    eyebrow: "Partner with confidence",
    title: "Clear communication and predictable outcomes",
    desc: "Milestones, updates, and ownership so your projects stay on track without surprises.",
  },
];

const services = [
  {
    title: "Strategic Consulting",
    icon: Compass,
    desc: "Align technology with your goals for measurable results and long term success.",
    href: "/services#strategic-consulting",
  },
  {
    title: "Digital Growth Marketing",
    icon: Megaphone,
    desc: "Blend creativity and analytics to boost visibility, generate leads, and fuel expansion.",
    href: "/services#digital-marketing",
  },
  {
    title: "UI UX Innovation",
    icon: Sparkles,
    desc: "Design intuitive experiences that feel great on every device.",
    href: "/services#ui-ux",
  },
  {
    title: "Managed IT Services",
    icon: Server,
    desc: "Monitoring, updates, and support to keep your systems running smoothly.",
    href: "/services#managed-it",
  },
  {
    title: "Managed Security Services",
    icon: Shield,
    desc: "Proactive monitoring and response to protect data, systems, and reputation.",
    href: "/services#security",
  },
];

const features = [
  {
    title: "Future Ready Design",
    desc: "Solutions that adapt to new technologies and devices.",
  },
  {
    title: "Smart Business Integration",
    desc: "Systems that fit your workflows, from CRMs to payment gateways.",
  },
  {
    title: "Scalable and Secure Platforms",
    desc: "Enterprise grade scalability and security built in.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* FULL WIDTH HERO SLIDER WITH WAVE CUT */}
      {/* Improvement: add bottom padding so wave never overlaps slider content */}
      <section className="relative w-full overflow-hidden bg-white pb-14 sm:pb-16 md:pb-20">
        <HeroSlider
          slides={slides}
          className="w-full rounded-none border-x-0"
        />

        {/* WAVE CUTOUT */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 z-10 block h-20 w-full sm:h-24 md:h-28 lg:h-32"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M0,80
              C120,110 240,110 360,90
              C480,70 600,40 720,60
              C840,80 960,110 1080,90
              C1200,70 1320,40 1440,60
              L1440,120
              L0,120
              Z
            "
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* INTRO */}
      <section className="relative overflow-hidden">
        {/* background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/50 blur-3xl" />
          <div className="absolute -bottom-28 right-[-6rem] h-96 w-96 rounded-full bg-slate-200/60 blur-3xl" />
        </div>

        <div className="container px-4 py-14 sm:px-6 sm:py-18 md:py-20 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6 text-center md:text-left">
              <p className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 ring-1 ring-blue-100 md:justify-start">
                Ritvik Global • Innovating Today. Building Tomorrow.
              </p>

              {/* Improvement: text-balance + leading-tight so long headings wrap nicely */}
              <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Driving Digital Transformation, Together
              </h1>

              <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:mx-0">
                We empower businesses with innovative IT solutions, strategic
                consulting, and reliable support. From streamlining operations
                to scaling growth, we help you stay ahead in a fast changing
                digital world.
              </p>

              {/* Improvement: buttons stretch on tiny screens for easier tapping */}
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
                <Button href="/contact">Get a Free Consultation</Button>
                <Button href="/services" variant="secondary">
                  Explore Our Services
                </Button>
              </div>

              {/* Improvement: stays readable on tiny screens, expands on larger */}
              <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
                {[
                  "Client Centered",
                  "Proven Track Record",
                  "Seamless Integration",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center justify-center gap-2 text-sm text-slate-600 md:justify-start"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* right side card */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-slate-900">
                    What we deliver
                  </div>

                  {/* Improvement: 2 cols mobile, 3 cols on small+ for better use of space */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {[
                      "IT Consulting",
                      "Managed Services",
                      "Cybersecurity",
                      "UI UX",
                      "Digital Marketing",
                      "Analytics",
                    ].map((t) => (
                      <div
                        key={t}
                        className="rounded-2xl border border-slate-200/70 bg-slate-50 px-3 py-3 text-center text-sm font-medium text-slate-800 sm:px-4"
                      >
                        {t}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5 text-white">
                    <div className="text-sm font-semibold">
                      Need a quick plan
                    </div>
                    <p className="mt-1 text-sm text-white/85">
                      Tell us your goals and we will propose a clear roadmap,
                      timeline, and next steps.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-indigo-700"
                    >
                      Contact us <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* accent glow */}
              <div
                className="pointer-events-none absolute -inset-1 -z-10 rounded-[28px] opacity-40 blur-2xl"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(600px circle at 20% 10%, rgba(59,130,246,0.18), transparent 55%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-slate-100 bg-white">
        <div className="container px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Services
            </p>
            <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Solutions That Drive Your Business Forward
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              From strategy to execution, we deliver end to end services
              designed to accelerate growth, improve efficiency, and keep you
              future ready.
            </p>
          </div>

          {/* Improvement: make cards fully clickable + add focus ring */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group relative block overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Learn more about ${s.title}`}
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
                      <s.icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-blue-700">
                      {s.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {s.desc}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/services" variant="secondary">
              View all services
            </Button>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="container px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                Shaping Smarter Businesses Through Technology and Expertise
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base md:mx-0">
                Founded to bridge business challenges and technology solutions.
                We believe growth comes from innovation, adaptability, and
                trust.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Unlock Growth with Tailored IT Solutions
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We create technology that adapts to your business needs helping
                you operate smarter, scale faster, and deliver more value.
              </p>

              <div className="mt-6 grid gap-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {f.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-slate-100 bg-white">
        <div className="container px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              How we work
            </p>
            <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Our Proven Process to Deliver Lasting Impact
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Clear steps. Transparent collaboration. Quality delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "Discovery and Consultation",
                desc: "We analyze your challenges, goals, and opportunities to design aligned solutions.",
              },
              {
                num: "02",
                title: "Strategy and Implementation",
                desc: "We build a tailored roadmap and implement solutions that drive efficiency and growth.",
              },
              {
                num: "03",
                title: "Testing, Review, and Finalization",
                desc: "We test, gather feedback, and refine so your solution performs smoothly in real world conditions.",
              },
            ].map((s) => (
              <div
                key={s.num}
                className="group rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>

                <div className="mt-6">
                  <Button
                    href="/contact"
                    variant="secondary"
                    className="w-full"
                  >
                    Talk to us
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-slate-100 bg-slate-900">
        <div className="container px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 shadow-sm sm:p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                  Ready to Take Your Business to the Next Level
                </h2>
                <p className="mt-3 text-sm text-white/85 sm:text-base">
                  Let Ritvik Global guide your digital journey with tailored
                  solutions, strategic consulting, and proven expertise.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Button
                  href="/contact"
                  className="w-full bg-white text-slate-900 hover:bg-slate-100 sm:w-auto"
                >
                  Contact Us Now
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  className="w-full bg-transparent text-white ring-white/25 hover:bg-white/10 sm:w-auto"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
