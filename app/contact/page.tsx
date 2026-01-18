import ContactForm from "./section";

export default function ContactPage() {
  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="container py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Contact Us</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Let’s talk about your next project</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Tell us what you are building. We will follow up with a simple plan and clear next steps.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-16">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
