"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-slate-950">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/who-we-are.jpg"
              alt="Fleet delivery operations"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Fleet Delivery
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Deliver parcels and cargo with full visibility.
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-100 max-w-xl">
                From same-city drops to intercity freight, track every shipment from pickup to proof of delivery in one dashboard.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
                >
                  Start sending
                </Link>
                <p className="text-xs text-emerald-100">
                  Share pickup, drop-off and cargo details. Fleet handles the rest.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative h-64 sm:h-80 lg:h-96 order-2 lg:order-1">
              <Image
                src="/fleetsimg.png"
                alt="Delivery trucks managed with Fleet"
                fill
                className="rounded-3xl object-cover shadow-lg"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Same-day deliveries, scheduled routes, and bulk shipments.
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Use Fleet to coordinate everything from motorcycles to trailers, with clear ETAs and delivery evidence for your customers.
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Real-time GPS and status updates.</li>
                <li>• Digital proof of delivery (POD).</li>
                <li>• Optimised multi-stop routes.</li>
                <li>• Clear pricing before every job.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
