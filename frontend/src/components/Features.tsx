import {
  CheckCircle2,
  Clock,
  MapPin,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Real-time load updates",
    description:
      "Get a constantly updated stream of quality loads from trusted shippers — no stale or duplicated listings.",
  },
  {
    icon: TrendingUp,
    title: "Growing regional network",
    description:
      "Join a network of carriers and shippers across East & Central Africa. Fill trucks or find capacity fast.",
  },
  {
    icon: Zap,
    title: "Smart matching tools",
    description:
      "Search by route, cargo type, vehicle type, and timing to find exactly what fits your operations.",
  },
  {
    icon: Shield,
    title: "Secure, digital payments",
    description:
      "Transparent and secure payment flows so every trip is recorded, receipted, and easy to reconcile.",
  },
  {
    icon: MapPin,
    title: "GPS trip tracking",
    description:
      "Follow every shipment in real time from pickup to delivery with built-in GPS visibility.",
  },
  {
    icon: CheckCircle2,
    title: "KYC-verified users",
    description:
      "KYC verification for cargo owners, drivers, and fleet owners to keep every transaction trustworthy.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-16 text-slate-50 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why choose <span className="text-[#2d6a2a]">Fleet?</span>
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            High-quality, verified loads and vehicles — updated in real time.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2d6a2a]/60 hover:shadow-lg hover:shadow-[#2d6a2a]/25"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2d6a2a]/15 text-[#2d6a2a]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
