"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function RidesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0">
            <Image
              src="/hero1.png"
              alt="Fleet rides hero"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Fleet Rides
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Request safe, reliable rides in a few taps.
              </h1>
              <p className="mt-4 text-sm sm:text-base text-emerald-50 max-w-xl">
                Move teams, guests, and cargo with vetted drivers, real-time tracking, and transparent pricing across your city.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
                >
                  Request a ride
                </Link>
                <p className="text-xs text-emerald-100">
                  No long calls. Just share your pickup, drop-off, and schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Built for daily commutes and corporate movement.
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Whether you&apos;re moving staff between sites or sending visitors from the airport, Fleet Rides gives you visibility over every trip.
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Instant or scheduled pickups.</li>
                <li>• Verified drivers and vehicles.</li>
                <li>• Live trip tracking for your team.</li>
                <li>• Digital receipts and trip history.</li>
              </ul>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src="/heroimg/phone.webp"
                alt="Request rides with Fleet app"
                fill
                className="object-contain drop-shadow-2xl"
              />
              {/* Soft bottom fade into the page background */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
