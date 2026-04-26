export default function TermsPage() {
  return (
    <div className="bg-background-dark min-h-screen pt-40 lg:pt-56 pb-32 font-light">
      <section className="container-wide mb-24 lg:mb-32">
        <div className="max-w-4xl">
          <span className="eyebrow">Legal</span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-10 leading-none tracking-tighter">
            Terms & <br />
            <span className="text-brand-gray-700">Conditions.</span>
          </h1>
          <p className="text-xl text-brand-gray-500 max-w-2xl leading-relaxed">
            Please read these terms carefully before starting a project with DevShuttle Studio.
          </p>
        </div>
      </section>

      <section className="container-wide">
        <div className="max-w-3xl prose prose-invert prose-lg text-brand-gray-400 font-light leading-relaxed">
          <div className="space-y-16">
             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">1. Engagement Policy</h2>
                <p>
                  All projects begin with a defined scope, timeline, deliverables, and payment structure agreed upon by both parties.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">2. Project Scope</h2>
                <p>
                  Only the features, pages, integrations, and deliverables listed in the approved scope are included in the project.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">3. Changes & Revisions</h2>
                <p>
                  Additional features, major revisions, or scope changes may require extra time and additional charges.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">4. Intellectual Property</h2>
                <p>
                  Ownership of final deliverables is transferred according to the agreed proposal or contract after full payment is completed.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">5. Payment & Milestones</h2>
                <p>
                  Projects may be billed through fixed-price, milestone-based, or custom payment structures. Work may pause if agreed payments are delayed.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">6. Client Responsibilities</h2>
                <p>
                  Clients are responsible for providing required content, feedback, approvals, access, and third-party account details on time.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">7. Limitation of Liability</h2>
                <p>
                  DevShuttle is not responsible for losses caused by third-party platforms, hosting providers, client-side changes, unsupported modifications, or misuse of delivered systems.
                </p>
             </div>

             <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-widest mb-6">8. Governing Law</h2>
                <p>
                  The governing law and dispute process should be defined clearly in the final agreement between DevShuttle and the client.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
