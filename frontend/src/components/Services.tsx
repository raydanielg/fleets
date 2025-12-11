import Image from "next/image";
import { Truck, Package, Share2, Leaf, Briefcase, Zap } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Rides",
    description: "Request in seconds, move cargo in minutes.",
  },
  {
    icon: Package,
    title: "Delivery",
    description: "Your important goods, delivered fast and safely.",
  },
  {
    icon: Share2,
    title: "Car-sharing",
    description: "High-quality commercial vehicle rental made simple.",
  },
  {
    icon: Leaf,
    title: "Groceries & farm produce",
    description: "Move food and produce whenever you need it.",
  },
  {
    icon: Briefcase,
    title: "Business",
    description: "Manage transport for your teams, clients, and branches.",
  },
  {
    icon: Zap,
    title: "Micromobility",
    description: "2-wheel and light cargo options at your fingertips.",
  },
];

export function Services() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side - Image */}
          <div className="flex items-center">
            <Image
              src="/who-we-are.jpg"
              alt="Fleet team"
              width={500}
              height={400}
              className="h-auto w-full rounded-3xl object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Designed for business teams
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Deliver great service experiences fast – without the complexity of traditional logistics solutions. Accelerate critical transport work, eliminate toll, and deploy changes with ease.
            </p>

            {/* Features list */}
            <div className="mt-8 space-y-6">
              {services.slice(0, 3).map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d6a2a]/10">
                        <Icon className="h-5 w-5 text-[#2d6a2a]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {service.description}
                      </p>
                      <a
                        href="#"
                        className="mt-2 inline-flex text-sm font-medium text-[#2d6a2a] hover:text-[#4c8c47]"
                      >
                        Learn more →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-sm text-slate-600">
              Deliver great service experiences fast – without the complexity of traditional logistics solutions. Accelerate critical transport work, eliminate toll, and deploy changes with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
