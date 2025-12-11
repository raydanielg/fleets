"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, Truck, ShieldCheck, Clock3, Users, Globe2 } from "lucide-react";
import Image from "next/image";

const featureBlocks = [
  {
    title: "Smart dispatching",
    description:
      "Match the right vehicle to every load with real-time availability, pricing, and route optimization.",
    icon: Truck,
    points: [
      "Instant matching for urgent jobs",
      "Optimized routes to reduce empty mileage",
      "Live status updates for every trip",
    ],
  },
  {
    title: "Safety & compliance",
    description:
      "Built-in checks for drivers, vehicles, and cargo so every trip meets your safety standards.",
    icon: ShieldCheck,
    points: [
      "Verified drivers and vehicles",
      "Digital trip logs and documents",
      "Incident reporting and tracking",
    ],
  },
  {
    title: "Real-time visibility",
    description:
      "Track every shipment from pickup to delivery on one dashboard for your whole team.",
    icon: Clock3,
    points: [
      "Live GPS tracking",
      "Status notifications",
      "Delivery proof and history",
    ],
  },
  {
    title: "Multi-user workspace",
    description:
      "Give your operations, finance, and support teams the tools they need to work together.",
    icon: Users,
    points: [
      "Role-based access control",
      "Shared shipment timelines",
      "Comments and internal notes",
    ],
  },
  {
    title: "Regional coverage",
    description:
      "Operate across cities and borders with a network of trusted partners and drivers.",
    icon: Globe2,
    points: [
      "Coverage across East Africa",
      "Support for cross-border routes",
      "Local language and currency support",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-[#2d6a2a]/20 bg-[#2d6a2a]/5 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <a href="/" className="text-slate-700 hover:text-[#2d6a2a] transition">
              Home
            </a>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="font-medium text-slate-900">Features</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/row-green-delivery-vans-parked-front-warehouse-with-solar-panels_984420-36203.jpg"
            alt="Fleet logistics operations"
            fill
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2d6a2a]/70 backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built for modern cargo operations
            </h1>
            <p className="mt-6 text-lg text-emerald-50">
              Fleet brings together dispatching, tracking, safety, and collaboration tools in one platform so your team can move faster with less chaos.
            </p>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Everything you need in one place</h2>
            <p className="mt-4 text-lg text-slate-600">
              From single shipments to full fleet operations, Fleet gives you visibility and control over every step of the journey.
            </p>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {featureBlocks.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d6a2a]/10 lg:h-14 lg:w-14">
                      <Icon className="h-6 w-6 text-[#2d6a2a] lg:h-7 lg:w-7" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="mb-4 text-slate-600">{feature.description}</p>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center justify-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2d6a2a]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
