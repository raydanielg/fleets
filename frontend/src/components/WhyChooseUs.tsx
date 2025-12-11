const reasons = [
  {
    title: "KYC-verified ecosystem",
    description:
      "Every customer, driver, and vehicle owner is verified using KYC to reduce fraud and improve trust.",
  },
  {
    title: "Designed for African roads",
    description:
      "From Dar es Salaam to Kigali and Lubumbashi, the system is built for real routes, conditions, and needs.",
  },
  {
    title: "Opportunities for drivers & owners",
    description:
      "Vehicle owners get continuous cargo opportunities, boosting revenue and creating jobs.",
  },
  {
    title: "Data-driven operations",
    description:
      "Route, pricing, and performance data help optimize operations and reduce empty returns.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Why choose us
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              A modern, secure way to move cargo across borders.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              We combine KYC, GPS tracking, secure payments, and transparent pricing
              into one easy-to-use platform for both cargo owners and fleet
              operators.
            </p>
            <dl className="mt-4 space-y-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3">
                  <div className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-emerald-100 text-[11px] font-semibold text-emerald-700 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-slate-900">
                      {reason.title}
                    </dt>
                    <dd className="text-xs text-slate-600 sm:text-sm">
                      {reason.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-800 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Project summary
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              The system connects cargo owners with vehicle owners through a
              mobile and web application, ensuring safety, convenience, and
              efficiency. With KYC verification, GPS tracking, and secure digital
              payments, it reduces the time spent searching for transport and
              lowers costs while improving security.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              It targets businesspeople, farmers, industries, and individuals
              across Tanzania and East & Central African cities who need
              dependable transport and want better income opportunities for
              drivers and fleet owners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
