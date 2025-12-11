"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function BecomeDriverPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-slate-900">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/who-we-are.jpg"
              alt="Fleet driver on duty"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Drive with Fleet
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Become a Fleet driver and earn on your schedule.
              </h1>
              <p className="mt-4 text-sm sm:text-base text-emerald-50 max-w-xl">
                Get access to verified trips, fair pricing and support whenever you&apos;re on the road.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• Verified customers and routes.</li>
                <li>• Trip details before you accept.</li>
                <li>• Fast payouts and clear earnings.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
                >
                  Apply as a driver
                </Link>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src="/heroimg/phone.webp"
                alt="Driver using Fleet app"
                fill
                className="rounded-3xl object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
