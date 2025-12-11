"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, MapPin, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

const cities = [
  {
    name: "Dar es Salaam",
    country: "Tanzania",
    drivers: "2,500+",
    merchants: "1,200+",
    description: "East Africa's largest port city and major commercial hub.",
  },
  {
    name: "Nairobi",
    country: "Kenya",
    drivers: "3,100+",
    merchants: "1,800+",
    description: "Kenya's capital and East Africa's leading business center.",
  },
  {
    name: "Kampala",
    country: "Uganda",
    drivers: "1,800+",
    merchants: "900+",
    description: "Uganda's vibrant capital with growing logistics demand.",
  },
  {
    name: "Kigali",
    country: "Rwanda",
    drivers: "1,200+",
    merchants: "600+",
    description: "Rwanda's modern capital with expanding trade networks.",
  },
  {
    name: "Mombasa",
    country: "Kenya",
    drivers: "1,500+",
    merchants: "700+",
    description: "Kenya's coastal city and important trade gateway.",
  },
  {
    name: "Mwanza",
    country: "Tanzania",
    drivers: "900+",
    merchants: "450+",
    description: "Growing commercial center in northwestern Tanzania.",
  },
  {
    name: "Arusha",
    country: "Tanzania",
    drivers: "800+",
    merchants: "400+",
    description: "Northern Tanzania's business and tourism hub.",
  },
  {
    name: "Kisumu",
    country: "Kenya",
    drivers: "700+",
    merchants: "350+",
    description: "Western Kenya's major port city on Lake Victoria.",
  },
];

export default function CitiesPage() {
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
            <a href="/about" className="text-slate-700 hover:text-[#2d6a2a] transition">
              Company
            </a>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="font-medium text-slate-900">Cities</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/row-green-trucks-with-word-green-front_789498-322.jpg"
            alt="Fleet green trucks"
            fill
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2d6a2a]/70 backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Fleet Service Areas
            </h1>
            <p className="mt-6 text-lg text-emerald-50">
              We're expanding across East and Central Africa, connecting shippers, drivers, and merchants in major cities and growing markets.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Operating in {cities.length} Cities
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              Serving millions of transactions across East Africa
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <div
                key={city.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#2d6a2a] hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {city.name}
                    </h3>
                    <p className="text-sm text-slate-500">{city.country}</p>
                  </div>
                  <MapPin className="h-5 w-5 text-[#2d6a2a] flex-shrink-0" />
                </div>

                <p className="text-sm text-slate-600 mb-4">
                  {city.description}
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-[#2d6a2a]" />
                    <span className="text-slate-600">
                      <span className="font-semibold text-slate-900">
                        {city.drivers}
                      </span>{" "}
                      drivers
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-[#2d6a2a]" />
                    <span className="text-slate-600">
                      <span className="font-semibold text-slate-900">
                        {city.merchants}
                      </span>{" "}
                      merchants
                    </span>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-lg bg-[#2d6a2a]/10 px-4 py-2 text-sm font-semibold text-[#2d6a2a] hover:bg-[#2d6a2a] hover:text-white transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Section */}
      <section className="bg-slate-50/50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Coming Soon to More Cities
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Fleet is rapidly expanding across East and Central Africa. We're working to bring our platform to more cities and communities. If you're interested in bringing Fleet to your city, get in touch with our partnerships team.
            </p>
            <button className="rounded-lg bg-[#2d6a2a] px-6 py-3 font-semibold text-white hover:bg-[#4c8c47] transition">
              Partner with Fleet
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
