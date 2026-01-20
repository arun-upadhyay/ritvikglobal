import Link from "next/link";

export default function PrivacyPage() {
  const updated = "January 20, 2026";

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-white">
        <div className="container px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            This Privacy Policy explains how Ritvik Global collects, uses, and
            protects information when you visit our website or contact us.
          </p>
          <p className="mt-4 text-xs text-slate-500">Last updated: {updated}</p>
        </div>
      </section>

      <section className="bg-slate-50 -mt-6 sm:-mt-10">
        <div className="container px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Who we are
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Ritvik Global is an IT consulting and services company. This
                policy applies to information collected through our website and
                communications related to our services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Information we collect
              </h2>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                <li>
                  <span className="font-semibold text-slate-900">
                    Contact information:
                  </span>{" "}
                  Name, email, company, phone number, and message content that
                  you submit through contact forms or email.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    Attachments:
                  </span>{" "}
                  If you upload a resume or other files, we collect the file
                  contents and file metadata (such as filename and size).
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    Usage data:
                  </span>{" "}
                  Basic technical data such as IP address, browser type, device
                  information, pages visited, and approximate location derived
                  from IP. This data may be collected through standard logs or
                  analytics tools.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                How we use information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                <li>Respond to inquiries and provide requested information</li>
                <li>
                  Evaluate candidates and staffing inquiries when applicable
                </li>
                <li>
                  Provide proposals, estimates, and service communications
                </li>
                <li>
                  Improve site performance, reliability, and user experience
                </li>
                <li>Protect against spam, abuse, and security incidents</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Cookies and analytics
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We may use cookies or similar technologies to operate the
                website, remember preferences, and understand how visitors use
                our site. You can control cookies through your browser settings.
                If we use third party analytics, they may set their own cookies
                to measure site usage.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Sharing of information
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We do not sell personal information. We may share information
                with service providers who help us operate the website and run
                our business, such as hosting, email delivery, and security
                providers. We may also disclose information if required by law
                or to protect rights, safety, and security.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Data retention
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We retain information only as long as needed to respond to
                inquiries, provide services, meet legal obligations, and
                maintain business records. We may retain aggregated or de
                identified analytics for longer periods.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Security</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We use reasonable administrative, technical, and physical
                safeguards designed to protect information. No method of
                transmission or storage is completely secure, so we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Your choices
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                <li>
                  You can request access, correction, or deletion of your
                  information by contacting us.
                </li>
                <li>
                  You can opt out of non essential communications at any time.
                </li>
                <li>
                  You can disable cookies through browser settings, though some
                  features may not work as intended.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                For privacy related questions, contact us at{" "}
                <a
                  className="font-semibold text-blue-700 hover:text-blue-800"
                  href="mailto:info@ritvikglobal.com"
                >
                  info@ritvikglobal.com
                </a>
                .
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Contact us
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 text-xs leading-5 text-slate-600">
              This page is provided for general informational purposes and does
              not constitute legal advice.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
