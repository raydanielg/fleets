"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function FleetOwnerPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-slate-950">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/hero1.png"
              alt="Fleet owner dashboard"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Fleet Owners
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Grow your transport business with Fleet.
              </h1>
              <p className="mt-4 text-sm sm:text-base text-emerald-50 max-w-xl">
                Get better utilisation of your trucks, clear earnings per vehicle and trusted cargo demand across the region.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• Connect your drivers and vehicles to verified cargo.</li>
                <li>• See trips, payouts and performance in one place.</li>
                <li>• Access tools for safety, tracking and compliance.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
                >
                  Partner with Fleet
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
