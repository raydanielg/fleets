"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, Mail, Phone, MapPin, Clock3 } from "lucide-react";

export default function ContactPage() {
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
            <span className="font-medium text-slate-900">Contact</span>
          </div>
        </div>
      </div>

      {/* Hero + contact layout */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-start">
            {/* Left: Text + form */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Talk to the Fleet team
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Whether you are a shipper, driver, fleet owner, or merchant, we are here to help you move cargo safely and efficiently.
              </p>

              <form className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-900">Full name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2d6a2a] focus:outline-none focus:ring-1 focus:ring-[#2d6a2a]"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-900">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2d6a2a] focus:outline-none focus:ring-1 focus:ring-[#2d6a2a]"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-900">Phone number</label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2d6a2a] focus:outline-none focus:ring-1 focus:ring-[#2d6a2a]"
                      placeholder="e.g. +255..."
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-900">How can we help?</label>
                    <select
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-[#2d6a2a] focus:outline-none focus:ring-1 focus:ring-[#2d6a2a]"
                      defaultValue="support"
                    >
                      <option value="support">General support</option>
                      <option value="sales">Talk to sales</option>
                      <option value="drivers">Driver & fleet onboarding</option>
                      <option value="partnerships">Partnerships</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-900">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2d6a2a] focus:outline-none focus:ring-1 focus:ring-[#2d6a2a]"
                    placeholder="Share a bit more about what you need help with..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#2d6a2a] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4c8c47]"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Right: Contact info */}
            <div className="space-y-6 rounded-2xl bg-slate-50 p-6 sm:p-7">
              <h2 className="text-lg font-semibold text-slate-900">Contact information</h2>
              <p className="text-sm text-slate-600">
                Reach out to us using the details below and someone from the Fleet team will get back to you.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex gap-3">
                  <span className="mt-0.5 rounded-full bg-white p-2 text-[#2d6a2a] shadow-sm">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>support@fleet.africa</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 rounded-full bg-white p-2 text-[#2d6a2a] shadow-sm">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+255 700 000 000</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 rounded-full bg-white p-2 text-[#2d6a2a] shadow-sm">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium">Office</p>
                    <p>Dar es Salaam, Tanzania</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 rounded-full bg-white p-2 text-[#2d6a2a] shadow-sm">
                    <Clock3 className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium">Support hours</p>
                    <p>Monday – Saturday, 8:00 – 20:00 EAT</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-dashed border-emerald-200 bg-emerald-50/60 p-4 text-xs text-emerald-800">
                For emergencies or safety issues during a trip, please use the <strong>Report an Issue</strong> button on the
                Safety page so our team can assist you faster.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
