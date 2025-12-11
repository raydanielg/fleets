"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";

export default function PrivacyPage() {
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
            <span className="font-medium text-slate-900">Privacy Policy</span>
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed text-slate-700">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
            <p className="text-xs text-slate-500">Last updated: November 2025</p>
            <p>
              This Privacy Policy explains how Fleet ("we", "our", "us") collects, uses, and protects your information
              when you use our apps, website, and services.
            </p>
          </header>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">1. Information we collect</h2>
            <p>We may collect the following information when you interact with Fleet:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Account details such as name, email address, and phone number.</li>
              <li>Vehicle and company details when you register as a driver or fleet owner.</li>
              <li>Trip and shipment information, routes, and timestamps.</li>
              <li>Device information and log data used to improve app performance and security.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">2. How we use your information</h2>
            <p>Your information is used to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Provide and maintain the Fleet platform and related services.</li>
              <li>Match shippers, drivers, and fleet owners with suitable trips.</li>
              <li>Improve safety, prevent fraud, and comply with legal obligations.</li>
              <li>Communicate updates, alerts, and support messages.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">3. Sharing and disclosure</h2>
            <p>
              We do not sell your personal data. We may share information with service providers that help us operate the
              platform, or with authorities when required by law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">4. Data retention and security</h2>
            <p>
              We keep your information only for as long as needed to provide our services and meet legal requirements. We
              apply technical and organisational measures to protect your data from unauthorised access.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">5. Your rights</h2>
            <p>You may have the right to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Request access, correction, or deletion of your personal data.</li>
              <li>Object to certain processing or withdraw consent where applicable.</li>
              <li>Contact your local data protection authority if you have concerns.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">6. Contact us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at
              <span className="font-semibold"> privacy@fleet.africa</span>.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
