"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";

export default function RequestAccessPage() {
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
            <span className="font-medium text-slate-900">Request access</span>
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Request early access</h1>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Fleet is rolling out city by city. Share your details and we&apos;ll get in touch when we are ready to onboard
              shippers, drivers, or fleets in your area.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form className="grid gap-4 text-sm sm:grid-cols-2">
              <div className="space-y-1.5 sm:col-span-1">
                <label className="font-medium text-slate-900" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-1.5 sm:col-span-1">
                <label className="font-medium text-slate-900" htmlFor="company">
                  Company (optional)
                </label>
                <input
                  id="company"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                  placeholder="Company name"
                />
              </div>
              <div className="space-y-1.5 sm:col-span-1">
                <label className="font-medium text-slate-900" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-1.5 sm:col-span-1">
                <label className="font-medium text-slate-900" htmlFor="role">
                  I am a
                </label>
                <select
                  id="role"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                  defaultValue="shipper"
                >
                  <option value="shipper">Shipper</option>
                  <option value="driver">Driver</option>
                  <option value="owner">Fleet owner</option>
                  <option value="merchant">Merchant</option>
                </select>
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label className="font-medium text-slate-900" htmlFor="message">
                  What do you need from Fleet?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                  placeholder="Tell us about your lanes, volumes, and current challenges."
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#5AA354] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                >
                  Submit request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
