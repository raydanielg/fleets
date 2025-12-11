"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, Truck, Package, Share2, Leaf, Briefcase, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    icon: Truck,
    name: "Rides",
    description: "Fast and reliable cargo transportation for urgent shipments.",
    features: ["Real-time tracking", "Verified drivers", "Transparent pricing", "24/7 availability"],
  },
  {
    icon: Package,
    name: "Delivery",
    description: "Scheduled delivery service for parcels and goods across cities.",
    features: ["Scheduled pickups", "Safe handling", "Proof of delivery", "Insurance options"],
  },
  {
    icon: Share2,
    name: "Car-sharing",
    description: "Commercial vehicle rental for businesses and fleet operators.",
    features: ["Flexible terms", "Maintenance included", "Insurance covered", "24/7 support"],
  },
  {
    icon: Leaf,
    name: "Groceries & Farm Produce",
    description: "Specialized transport for perishable goods and agricultural products.",
    features: ["Temperature control", "Quick delivery", "Bulk handling", "Farm to market"],
  },
  {
    icon: Briefcase,
    name: "Business",
    description: "Enterprise solutions for corporate transportation and logistics needs.",
    features: ["Custom solutions", "Bulk discounts", "API integration", "Dedicated support"],
  },
  {
    icon: Zap,
    name: "Micromobility",
    description: "Light cargo options for small packages and quick deliveries.",
    features: ["Eco-friendly", "Fast delivery", "Low cost", "Urban optimized"],
  },
];

export default function ProductsPage() {
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
            <span className="font-medium text-slate-900">Products</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/row-green-delivery-vans-parked-front-warehouse-with-solar-panels_984420-36203.jpg"
            alt="Fleet delivery vans"
            fill
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2d6a2a]/70 backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Fleet Products
            </h1>
            <p className="mt-6 text-lg text-emerald-50">
              Comprehensive cargo transportation solutions tailored for every business need. From urgent rides to scheduled deliveries, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.name}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-[#2d6a2a] hover:shadow-lg transition"
                >
                  <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#2d6a2a]/10 group-hover:bg-[#2d6a2a] transition">
                    <Icon className="h-6 w-6 text-[#2d6a2a] group-hover:text-white transition" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 mb-6">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#2d6a2a]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d6a2a] hover:text-[#4c8c47] transition">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2d6a2a] py-16 sm:py-20 lg:py-24 text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-emerald-50">
            Choose the Fleet product that works best for your business and start shipping today.
          </p>
          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-[#2d6a2a] hover:bg-emerald-50 transition">
            Download Fleet App
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
