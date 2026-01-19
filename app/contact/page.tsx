import ContactForm from "./section";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative isolate overflow-hidden border-b">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/contact-us-hero.png')" }}
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

                {/* MATCH Services/About spacing */}
                <div className="relative container py-20 sm:py-28">
                    <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Let’s talk about your next project
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200">
                        Tell us what you are building. We will follow up with a simple plan and clear next steps.
                    </p>
                </div>
            </section>

            <section className="bg-slate-50">
                <div className="container py-14 sm:py-16">
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
