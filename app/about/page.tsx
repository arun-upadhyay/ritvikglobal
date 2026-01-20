import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO with full width background image */}
      <section className="relative isolate overflow-hidden border-b">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-hero.png')" }}
          aria-hidden="true"
        />

        {/* Overlay for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/60 to-slate-950/85"
          aria-hidden="true"
        />

        {/* Subtle highlight texture */}
        <div
          className="absolute inset-0 opacity-25 [background:radial-gradient(900px_circle_at_15%_20%,rgba(59,130,246,0.22),transparent_45%),radial-gradient(700px_circle_at_85%_30%,rgba(255,255,255,0.12),transparent_50%)]"
          aria-hidden="true"
        />

        {/* Improvement: safer responsive padding + horizontal padding */}
        <div className="relative container px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-8">
          <h1 className="mt-3 max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            A practical technology partner for modern teams
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200">
            Ritvik Global is an IT consultancy focused on helping organizations
            build reliable software, modernize systems, and strengthen delivery
            capacity with the right talent. We combine clear planning with hands
            on execution so work ships on time and stays maintainable.
          </p>

          {/* Improvement: full width buttons on mobile + focus ring for accessibility */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-auto"
            >
              Talk to us
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-auto"
            >
              Explore services
            </Link>
          </div>

          {/* Small value props row */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["Delivery focused", "Practical execution over slides"],
              ["Modern stack", "Next.js, TypeScript, APIs, Cloud"],
              ["Built to last", "Maintainable, documented, scalable"],
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

      {/* Rest of the page */}
      <section className="bg-slate-50">
        {/* Improvement: add padding so content never touches edges */}
        <div className="container px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Mission
              </p>
              <h2 className="mt-2 text-base font-semibold text-slate-900">
                Make delivery simpler and more reliable
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We help teams reduce complexity, improve quality, and deliver
                technology that supports real business goals.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Vision
              </p>
              <h2 className="mt-2 text-base font-semibold text-slate-900">
                Be a trusted long term partner
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We aim to be known for clear communication, strong execution,
                and solutions that are easy to own and extend.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Values
              </p>
              <h2 className="mt-2 text-base font-semibold text-slate-900">
                Integrity, ownership, quality
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We work transparently, take responsibility for outcomes, and
                continuously improve how we build and deliver.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900">What we do</h3>
            <p className="mt-2 max-w-3xl text-slate-600">
              We support product teams and IT organizations with consulting,
              engineering, and staffing help. Engagements can be project based
              or team based depending on your needs.
            </p>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Technology strategy",
                  "Roadmaps, architecture guidance, and modernization planning.",
                ],
                [
                  "Custom web development",
                  "Modern React and Next.js applications with strong UX and performance.",
                ],
                [
                  "Cloud enablement",
                  "CI CD improvements, deployments, observability, and reliability hardening.",
                ],
                [
                  "Data and integration",
                  "APIs, reporting, automation, and systems integration support.",
                ],
                [
                  "QA automation",
                  "Test strategy and automation to reduce regressions and speed releases.",
                ],
                [
                  "Staff augmentation",
                  "Skilled engineers and analysts who can contribute quickly within your process.",
                ],
              ].map(([t, d]) => (
                <li
                  key={t}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">
                    {t}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">
                    {d}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Inclusive by design
            </h3>
            <p className="mt-2 text-slate-600">
              Strong teams come from varied perspectives. We aim to create a
              respectful, inclusive environment where people can do their best
              work and clients feel confident in the partnership.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
