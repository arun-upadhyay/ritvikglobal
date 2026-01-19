import Link from "next/link";
import {ArrowRight, Briefcase, Mail, Sparkles} from "lucide-react";
import Button from "../../components/button";

type Job = {
    id: string;
    title: string;
    location: string;
    type: string;
    summary: string;
    applyHref?: string;
};

const jobs: Job[] = [
    // Add jobs later like this:
    // {
    //   id: "se-01",
    //   title: "Senior Software Engineer",
    //   location: "Remote, USA",
    //   type: "Full time",
    //   summary: "Build and scale modern web apps, APIs, and internal tools.",
    //   applyHref: "/contact",
    // },
];

const platforms = [
    {name: "AWS", color: "bg-orange-50 text-orange-700 ring-orange-200"},
    {name: "Azure", color: "bg-blue-50 text-blue-700 ring-blue-200"},
    {name: "Google Cloud", color: "bg-sky-50 text-sky-700 ring-sky-200"},
    {name: "Kubernetes", color: "bg-indigo-50 text-indigo-700 ring-indigo-200"},
    {name: "Docker", color: "bg-cyan-50 text-cyan-700 ring-cyan-200"},
    {name: "React", color: "bg-sky-50 text-sky-700 ring-sky-200"},
    {name: "Next.js", color: "bg-slate-100 text-slate-900 ring-slate-300"},
    {name: "Node.js", color: "bg-green-50 text-green-700 ring-green-200"},
    {name: "Python", color: "bg-yellow-50 text-yellow-700 ring-yellow-200"},
    {name: "PostgreSQL", color: "bg-blue-50 text-blue-700 ring-blue-200"},
    {name: "Snowflake", color: "bg-sky-50 text-sky-700 ring-sky-200"},
    {name: "Datadog", color: "bg-purple-50 text-purple-700 ring-purple-200"},
];


export default function CareersPage() {
    const hasJobs = jobs.length > 0;

    return (
        <main className="min-h-screen bg-white">
            {/* HERO */}
            <section className="relative isolate overflow-hidden border-b">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: "url('/images/careers-hero.png')"}}
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

                <div className="relative container py-20 sm:py-28">
                    <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Join the team building reliable, modern systems
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200">
                        We value ownership, clear communication, and shipping work that teams can maintain.
                        If you are practical, curious, and delivery focused, we would like to hear from you.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button href="/contact">Send your resume</Button>
                        <Button href="/about" variant="secondary">
                            About Ritvik Global
                        </Button>
                    </div>
                </div>
            </section>

            {/* OPENINGS */}
            <section className="bg-slate-50">
                <div className="container py-16">
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                                Our current job openings
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                                We post roles here first. If you do not see a match, you can still send your profile.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="hidden rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 sm:inline-flex"
                        >
                            Contact us
                        </Link>
                    </div>

                    {/* Jobs list */}
                    <div className="mt-10">
                        {hasJobs ? (
                            <div className="grid gap-6 lg:grid-cols-2">
                                {jobs.map((job) => (
                                    <div
                                        key={job.id}
                                        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                                    >
                                        <div
                                            className="pointer-events-none absolute -inset-px opacity-0 transition group-hover:opacity-100"
                                            aria-hidden="true"
                                        >
                                            <div
                                                className="absolute inset-0 rounded-3xl [background:radial-gradient(600px_circle_at_20%_10%,rgba(59,130,246,0.16),transparent_55%)]"/>
                                        </div>

                                        <div className="relative">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                                                        <Briefcase className="h-5 w-5"/>
                                                    </div>
                                                    <div>
                                                        <div className="text-lg font-semibold text-slate-900">
                                                            {job.title}
                                                        </div>
                                                        <div className="mt-1 text-sm text-slate-600">
                                                            {job.location} • {job.type}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                                {job.summary}
                                            </p>

                                            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                                <Link
                                                    href={job.applyHref ?? "/contact"}
                                                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                                                >
                                                    Apply <ArrowRight className="ml-2 h-4 w-4"/>
                                                </Link>

                                                <Link
                                                    href="/contact"
                                                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                                                >
                                                    Ask a question
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                                        <Sparkles className="h-5 w-5"/>
                                    </div>

                                    <div className="flex-1">
                                        <div className="text-lg font-semibold text-slate-900">
                                            We do not have any active job openings
                                        </div>
                                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                                            If you want to be considered for future roles, send your resume and a short
                                            note about what you want to work on.
                                        </p>

                                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                            <Button href="/contact">Send your resume</Button>
                                            <Link
                                                href="mailto:info@ritvikglobal.com?subject=Career%20Inquiry%20-%20Ritvik%20Global"
                                                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                                            >
                                                Email us <Mail className="ml-2 h-4 w-4"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* PLATFORMS */}
            <section className="bg-white">
                <div className="container py-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                            Platforms
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Platforms we work on
                        </h2>
                        <p className="mt-4 text-slate-600">
                            Modern tools evolve fast. We keep strong experience across cloud, analytics, and automation
                            to deliver maintainable solutions.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {platforms.map((p) => (
                            <div
                                key={p.name}
                                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                            >
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${p.color}`}
                                >
                                <span className="text-xs font-semibold">
                                  {p.name.slice(0, 2).toUpperCase()}
                                </span>
                                </div>

                                <div className="text-sm font-semibold text-slate-900">{p.name}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">
                        <div className="grid gap-6 md:grid-cols-3 md:items-center">
                            <div className="md:col-span-2">
                                <h3 className="text-xl font-semibold text-slate-900">
                                    Do not see your platform listed
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Reach out anyway. We move fast and can ramp into new stacks quickly if the problem
                                    is worth solving.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                                >
                                    Contact us
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
                                >
                                    View services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
