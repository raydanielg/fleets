"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-[#5AA354]/20 bg-[#5AA354]/5 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <a href="/" className="text-slate-700 hover:text-[#5AA354] transition">
              Home
            </a>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="font-medium text-slate-900">About</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/row-green-delivery-vans-parked-front-warehouse-with-solar-panels_984420-36203.jpg"
            alt="Fleet green delivery vans"
            fill
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#5AA354]/70 backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Fleet
            </h1>
            <p className="mt-6 text-lg text-emerald-50">
              We're revolutionizing cargo transportation across East and Central Africa through innovative technology, reliable service, and a commitment to connecting shippers, drivers, and merchants.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-lg text-slate-600">
                To provide a seamless, affordable, and reliable cargo transportation platform that empowers shippers, drivers, and merchants to grow their businesses across Africa.
              </p>
              <p className="text-slate-600">
                We believe in the power of technology to solve real-world logistics challenges and create economic opportunities for communities across the continent.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
              <p className="text-lg text-slate-600">
                To become the leading cargo transportation platform in Africa, enabling millions of transactions and creating sustainable livelihoods for drivers and merchants.
              </p>
              <p className="text-slate-600">
                We envision a future where logistics is no longer a barrier to trade, but a catalyst for economic growth and development across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-[#5AA354] py-16 sm:py-20 lg:py-24 text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Stay Updated with Fleet
          </h2>
          <p className="mt-4 text-lg text-emerald-50">
            Subscribe to our newsletter for the latest updates, features, and cargo transportation insights.
          </p>

          <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg bg-white/20 px-4 py-3 text-white placeholder:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-[#5AA354] hover:bg-emerald-50 transition"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-sm text-emerald-100">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
