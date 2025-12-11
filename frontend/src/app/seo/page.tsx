import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Overview – Fleet Cargo Transportation Platform",
  description:
    "Learn how Fleet optimizes cargo transportation visibility with SEO-friendly pages, structured data, and fast, mobile-first experiences across East & Central Africa.",
};

export default function SeoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="text-slate-700 hover:text-[#5AA354] transition"
              >
                Home
              </Link>
            </li>
            <li className="text-slate-400">/</li>
            <li className="font-medium text-slate-900">SEO Overview</li>
          </ol>
        </nav>

        <section className="mb-12 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Fleet SEO & Visibility Overview
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            This page explains how Fleet is structured for search engines and users.
            We focus on clear content, fast performance, and mobile-first design to
            help shippers, drivers, and merchants easily discover our platform.
          </p>
        </section>

        <section className="mb-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Clear structure for search engines
            </h2>
            <p className="text-slate-600">
              Fleet uses descriptive page titles, meta descriptions, and headings
              across key pages like
              {" "}
              <Link
                href="/features"
                className="font-medium text-[#5AA354] hover:underline"
              >
                Features
              </Link>
              ,
              {" "}
              <Link
                href="/about"
                className="font-medium text-[#5AA354] hover:underline"
              >
                About
              </Link>
              ,
              {" "}
              <Link
                href="/cities"
                className="font-medium text-[#5AA354] hover:underline"
              >
                Cities
              </Link>
              , and
              {" "}
              <Link
                href="/blog"
                className="font-medium text-[#5AA354] hover:underline"
              >
                Blog
              </Link>
              . This helps search engines understand what each page is about.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Performance & mobile experience
            </h2>
            <p className="text-slate-600">
              The Fleet platform is built on Next.js with image optimization,
              modern fonts, and responsive layouts. This leads to faster load
              times, better Core Web Vitals, and a smooth experience on low
              bandwidth connections common across East & Central Africa.
            </p>
          </div>
        </section>

        <section className="mb-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">
              Structured content
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Pages use semantic HTML with clear headings (H1–H3), readable
              paragraphs, and internal links so both users and crawlers can
              navigate effortlessly.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">
              Location & service signals
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We highlight key routes, cities, and services to make it easier for
              search engines to associate Fleet with logistics and cargo
              transportation across the region.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">
              Human-first content
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Content is written for real businesses and drivers, avoiding keyword
              stuffing and focusing on clarity, trust, and conversion.
            </p>
          </div>
        </section>

        <section className="mb-12 max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-900">
            How Fleet supports your business growth
          </h2>
          <p className="mt-3 text-slate-600">
            When your shipments, lanes, and vehicles are managed through a
            reliable digital platform, it becomes easier to reach new customers,
            keep existing clients informed, and ensure every load is tracked.
            Fleet combines technology, vetted drivers, and transparent pricing to
            help you move cargo confidently across borders and cities.
          </p>
          <p className="mt-3 text-slate-600">
            For businesses that care about visibility, Fleet offers tools to
            manage requests, communicate with drivers, and keep operations
            organized&mdash;all of which contribute to a better overall customer
            experience.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900">
            Frequently asked questions about Fleet & SEO
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Is this page only for search engines?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                No. While it is structured to be easy to crawl, it is also meant
                to explain to partners, drivers, and merchants how Fleet is
                positioned online and how the platform works.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Can I learn more about Fleet features?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Yes. Visit our
                {" "}
                <Link
                  href="/features"
                  className="font-medium text-[#5AA354] hover:underline"
                >
                  Features
                </Link>
                {" "}
                page to see how Fleet helps shippers, drivers, and merchants
                coordinate cargo transportation.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900">
                How can my company start using Fleet?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                You can
                {" "}
                <Link
                  href="/request-access"
                  className="font-medium text-[#5AA354] hover:underline"
                >
                  request access
                </Link>
                {" "}
                or reach out via our
                {" "}
                <Link
                  href="/contact"
                  className="font-medium text-[#5AA354] hover:underline"
                >
                  Contact
                </Link>
                {" "}
                page. Our team will guide you through onboarding and help you
                start shipping with Fleet.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
