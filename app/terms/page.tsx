// app/terms/page.tsx
import Link from "next/link";

export default function TermsPage() {
  const updated = "January 20, 2026";

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-white">
        <div className="container px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-10 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            These Terms govern your use of the Ritvik Global website and related
            communications.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Last updated: January 20, 2026
          </p>
        </div>
      </section>
      <section className="bg-slate-50 -mt-6 sm:-mt-10">
        <div className="container px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Acceptance of terms
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                By accessing or using this website, you agree to these Terms. If
                you do not agree, do not use the website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Use of the website
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                <li>
                  You may use the site for lawful purposes and in accordance
                  with these Terms.
                </li>
                <li>
                  You agree not to attempt to disrupt the site, access systems
                  without authorization, or introduce malicious code.
                </li>
                <li>
                  You are responsible for ensuring that any information you
                  submit is accurate and does not violate third party rights.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                No professional advice
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Content on this website is provided for general informational
                purposes and does not constitute professional, legal, financial,
                or technical advice. Any reliance on information is at your own
                risk.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Services and proposals
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Any services described on the site are offered subject to a
                separate written agreement. Proposals, estimates, timelines, and
                deliverables are non binding unless agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Intellectual property
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The website and its content, including text, graphics, logos,
                and design elements, are owned by Ritvik Global or licensed to
                us and are protected by applicable laws. You may not copy,
                reproduce, or distribute content without written permission,
                except as allowed by law.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Third party links
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The website may include links to third party sites. We do not
                control those sites and are not responsible for their content or
                practices.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Disclaimer of warranties
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The website is provided on an as is and as available basis. We
                make no warranties of any kind, express or implied, including
                warranties of merchantability, fitness for a particular purpose,
                and non infringement.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Limitation of liability
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                To the maximum extent permitted by law, Ritvik Global will not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, or any loss of profits or revenues, arising
                from your use of the website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Changes to the site or terms
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We may update the website or these Terms from time to time. Any
                changes become effective when posted. Your continued use of the
                site after changes are posted means you accept the updated
                Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Questions about these Terms can be sent to{" "}
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
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Contact us
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
