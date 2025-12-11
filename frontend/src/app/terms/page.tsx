"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";

export default function TermsPage() {
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
            <span className="font-medium text-slate-900">Terms of Service</span>
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed text-slate-700">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
            <p className="text-xs text-slate-500">Last updated: November 2025</p>
            <p>
              These Terms of Service ("Terms") govern your access to and use of Fleet&apos;s apps, website, and services.
              By using the platform you agree to these Terms.
            </p>
          </header>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">1. Using Fleet</h2>
            <p>
              You agree to provide accurate information, keep your account secure, and use the platform only for lawful
              cargo transportation activities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">2. Responsibilities</h2>
            <p>
              Shippers, drivers, and fleet owners are responsible for complying with local regulations, permits, and
              safety requirements for each trip.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">3. Payments</h2>
            <p>
              Payment terms, fees, and payout schedules may be updated from time to time. All charges will be clearly
              communicated before a trip is confirmed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">4. Limitation of liability</h2>
            <p>
              Fleet is not liable for indirect, incidental, or consequential damages resulting from the use of the
              platform beyond what is required by law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">5. Changes</h2>
            <p>
              We may update these Terms from time to time. When we do, we will update the date above and, where
              appropriate, notify you in the app.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
