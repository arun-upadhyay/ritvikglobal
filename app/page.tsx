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
  },
  {
    title: "Digital Growth Marketing",
    icon: Megaphone,
    desc: "Blend creativity and analytics to boost visibility, generate leads, and fuel expansion.",
  },
  {
    title: "UI UX Innovation",
    icon: Sparkles,
    desc: "Design intuitive experiences that feel great on every device.",
  },
  {
    title: "Managed IT Services",
    icon: Server,
    desc: "Monitoring, updates, and support to keep your systems running smoothly.",
  },
  {
    title: "Managed Security Services",
    icon: Shield,
    desc: "Proactive monitoring and response to protect data, systems, and reputation.",
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
  // @ts-ignore
  return (
      <main className="min-h-screen bg-white">
        {/* FULL WIDTH HERO SLIDER */}
        <section className="w-full">
          <HeroSlider slides={slides} className="w-full rounded-none border-x-0" />
        </section>

        {/* INTRO */}
        <section className="relative overflow-hidden">
          {/* background blobs */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="absolute -bottom-28 right-[-6rem] h-96 w-96 rounded-full bg-slate-200/60 blur-3xl" />
          </div>

          <div className="container py-14 sm:py-18 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="space-y-6 text-center md:text-left">
                <p className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 ring-1 ring-blue-100 md:justify-start">
                  Ritvik Global • Innovating Today. Building Tomorrow.
                </p>

                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Driving Digital Transformation, Together
                </h1>

                <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  We empower businesses with innovative IT solutions, strategic consulting, and reliable support. From
                  streamlining operations to scaling growth, we help you stay ahead in a fast changing digital world.
                </p>

                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <Button href="/contact">Get a Free Consultation</Button>
                  <Button href="/services" variant="secondary">
                    Explore Our Services
                  </Button>
                </div>

                {/* MOBILE FIX: don’t force 3 columns on small phones */}
                <div className="grid gap-3 pt-4 md:grid-cols-3">
                  {["Client Centered", "Proven Track Record", "Seamless Integration"].map((t) => (
                      <div
                          key={t}
                          className="flex items-center justify-center gap-2 text-sm text-slate-600 md:justify-start"
                      >
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                        <span>{t}</span>
                      </div>
                  ))}
                </div>
              </div>

              {/* right side card */}
              <div className="relative">
                <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="text-sm font-semibold text-slate-900">What we deliver</div>

                    {/* MOBILE FIX: keep 1 column until md */}
                    <div className="grid gap-3 md:grid-cols-2">
                      {["IT Consulting", "Managed Services", "Cybersecurity", "UI UX", "Digital Marketing", "Analytics"].map(
                          (t) => (
                              <div
                                  key={t}
                                  className="rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800"
                              >
                                {t}
                              </div>
                          )
                      )}
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5 text-white">
                      <div className="text-sm font-semibold">Need a quick plan</div>
                      <p className="mt-1 text-sm text-white/85">
                        Tell us your goals and we will propose a clear roadmap, timeline, and next steps.
                      </p>
                      <Link
                          href="/contact"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white"
                      >
                        Contact us <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* small accent border */}
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
          <div className="container py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Services</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Solutions That Drive Your Business Forward
              </h2>
              <p className="mt-4 text-slate-600">
                From strategy to execution, we deliver end to end services designed to accelerate growth, improve efficiency,
                and keep you future ready.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                  <div
                      key={s.title}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
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

                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>

                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                        Learn more
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </div>
                    </div>
                  </div>
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
          <div className="container py-16">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Shaping Smarter Businesses Through Technology and Expertise
                </h2>
                <p className="mt-4 text-slate-600">
                  Founded to bridge business challenges and technology solutions. We believe growth comes from innovation,
                  adaptability, and trust.
                </p>
              </div>


              <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Unlock Growth with Tailored IT Solutions</h3>
                <p className="mt-2 text-sm text-slate-600">
                  We create technology that adapts to your business needs helping you operate smarter, scale faster, and
                  deliver more value.
                </p>

                <div className="mt-6 grid gap-4">
                  {features.map((f) => (
                      <div key={f.title} className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                        <div className="text-sm font-semibold text-slate-900">{f.title}</div>
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
          <div className="container py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">How we work</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Proven Process to Deliver Lasting Impact
              </h2>
              <p className="mt-4 text-slate-600">Clear steps. Transparent collaboration. Quality delivery.</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>

                    <div className="mt-6">
                      <Button href="/contact" variant="secondary" className="w-full">
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
          <div className="container py-16">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 shadow-sm sm:p-12">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to Take Your Business to the Next Level
                  </h2>
                  <p className="mt-3 text-white/85">
                    Let Ritvik Global guide your digital journey with tailored solutions, strategic consulting, and proven
                    expertise.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                  <Button href="/contact" className="bg-white text-slate-900 hover:bg-slate-100">
                    Contact Us Now
                  </Button>
                  <Button
                      href="/services"
                      variant="secondary"
                      className="bg-transparent text-white ring-white/25 hover:bg-white/10"
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
