"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CarSharingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Fleet Car Sharing
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                Share commercial vehicles without the chaos.
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl">
                Give teams access to vans, pickups and minibuses with clear bookings, digital keys and trip history in one place.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Self-service bookings for your staff.</li>
                <li>• Usage insights by team, cost centre or project.</li>
                <li>• Clear handover and return checklists.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                >
                  Talk to sales
                </Link>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src="/hero1.png"
                alt="Car sharing with Fleet"
                fill
                className="rounded-3xl object-cover shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
