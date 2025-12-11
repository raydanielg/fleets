export function AboutSection() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Making cities for people, not just cargo.
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              By sharing our knowledge of transport and real-time data, Fleet
              helps improve how goods move through cities and across borders in
              East & Central Africa.
            </p>
            <p className="text-sm text-slate-600 sm:text-base">
              We provide insights that help local authorities and partners make
              transport more connected, efficient, and liveable for everyone —
              traders, farmers, industries, and citizens.
            </p>
            <button className="mt-2 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-900 hover:border-[#5AA354] hover:text-[#5AA354]">
              Learn more
            </button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-800 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              About us
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Fleet is a modern cargo transportation system that connects cargo
              owners with verified vehicle owners via mobile and web
              applications. We offer better alternatives to traditional manual
              processes — with KYC, tracking, digital payments, and ratings.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              We are building for Tanzania and neighbouring markets, covering
              key cities like Dar es Salaam, Arusha, Nairobi, Kampala, Kigali
              and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
