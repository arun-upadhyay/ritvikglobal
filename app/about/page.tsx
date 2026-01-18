import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <section className="border-b bg-white">
                <div className="container py-14 sm:py-16">
                    <p className="text-sm font-semibold tracking-wide text-slate-600">
                        About Ritvik Global
                    </p>
                    <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        A practical technology partner for modern teams
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                        Ritvik Global is an IT consultancy focused on helping organizations build reliable software,
                        modernize systems, and strengthen delivery capacity with the right talent. We combine clear planning
                        with hands on execution so work ships on time and stays maintainable.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                        >
                            Talk to us
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                            Explore services
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50">
                <div className="container py-14">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                                Mission
                            </p>
                            <h2 className="mt-2 text-base font-semibold text-slate-900">
                                Make delivery simpler and more reliable
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                We help teams reduce complexity, improve quality, and deliver technology that supports real business goals.
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
                                We aim to be known for clear communication, strong execution, and solutions that are easy to own and extend.
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
                                We work transparently, take responsibility for outcomes, and continuously improve how we build and deliver.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
                        <h3 className="text-lg font-semibold text-slate-900">What we do</h3>
                        <p className="mt-2 max-w-3xl text-slate-600">
                            We support product teams and IT organizations with consulting, engineering, and staffing help.
                            Engagements can be project based or team based depending on your needs.
                        </p>

                        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                            {[
                                ["Technology strategy", "Roadmaps, architecture guidance, and modernization planning."],
                                ["Custom web development", "Modern React and Next.js applications with strong UX and performance."],
                                ["Cloud enablement", "CI CD improvements, deployments, observability, and reliability hardening."],
                                ["Data and integration", "APIs, reporting, automation, and systems integration support."],
                                ["QA automation", "Test strategy and automation to reduce regressions and speed releases."],
                                ["Staff augmentation", "Skilled engineers and analysts who can contribute quickly within your process."],
                            ].map(([t, d]) => (
                                <li key={t} className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <div className="text-sm font-semibold text-slate-900">{t}</div>
                                    <div className="mt-1 text-sm leading-6 text-slate-600">{d}</div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
                        <h3 className="text-lg font-semibold text-slate-900">Inclusive by design</h3>
                        <p className="mt-2 text-slate-600">
                            Strong teams come from varied perspectives. We aim to create a respectful, inclusive environment
                            where people can do their best work and clients feel confident in the partnership.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
