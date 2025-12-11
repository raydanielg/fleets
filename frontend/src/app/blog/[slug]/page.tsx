"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    slug: "why-fleet-is-building-for-african-cargo-first",
    title: "Why Fleet is building for African cargo first",
    category: "World News",
    publishedLabel: "Published in World News",
    dateLabel: "August 3, 2025 · 2:20pm EAT",
    author: "Fleet team",
    heroImage:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Before going digital, you might be scribbling routes and capacity planning in a notebook. This article explains why we are building a digital-first cargo marketplace for African operators.",
    paragraphs: [
      "Fleet is a modern cargo transportation platform that connects shippers, drivers, and fleet owners across East and Central Africa. Instead of relying on phone calls and informal groups, we bring everyone into one coordinated marketplace.",
      "By focusing on African lanes first, we can solve real challenges such as fragmented routes, cash-heavy payments, and limited visibility on cargo once a truck leaves the yard.",
      "With Fleet, every trip starts from a verified profile, clear pricing, and GPS-backed tracking. Loads are matched to the right vehicle type in minutes, not hours.",
      "In this article we walk through the core principles behind Fleet: trust through KYC, visibility through tracking, and better economics for both shippers and carriers.",
    ],
  },
  {
    slug: "five-ways-to-keep-cargo-moving-during-peak-season",
    title: "Five ways to keep cargo moving during peak season",
    category: "Operations",
    publishedLabel: "Published in Operations",
    dateLabel: "July 12, 2025 · 11:00am EAT",
    author: "Fleet operations",
    heroImage:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Peak season does not have to mean chaos. With the right tools and planning, you can keep trucks loaded and customers happy.",
    paragraphs: [
      "High season brings more loads, tighter deadlines, and often more uncertainty. Without the right system, dispatchers spend the day on calls trying to find available trucks.",
      "Fleet provides instant visibility on vehicles, lanes, and preferred partners, so you can confirm loads faster and keep your trucks moving.",
      "We share five practical tactics used by our customers—from pre-booking lanes to using live pricing signals—to reduce empty mileage and protect margins.",
    ],
  },
  {
    slug: "safety-playbook-for-drivers-and-owners-on-fleet",
    title: "Safety playbook for drivers and owners on Fleet",
    category: "Safety",
    publishedLabel: "Published in Safety",
    dateLabel: "June 5, 2025 · 09:30am EAT",
    author: "Fleet safety team",
    heroImage:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Safety is at the centre of how Fleet works. From KYC to GPS and reporting, we design every trip with protection in mind.",
    paragraphs: [
      "Every shipment on Fleet starts from verified driver and vehicle profiles. Our KYC process checks IDs, licences, and key documents before any trip goes live.",
      "During a trip, GPS tracking and digital trip logs give shippers and fleet owners visibility on where their cargo is, reducing disputes and uncertainty.",
      "We also provide a clear incident reporting flow so that drivers and shippers can raise issues quickly and get support from our safety team.",
    ],
  },
];

interface BlogDetailPageProps {
  params: { slug: string };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug) ?? blogPosts[0];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Hero with image background */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-emerald-100">
            {post.publishedLabel}
          </p>
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-emerald-50 sm:text-base">
            {post.summary}
          </p>
        </div>
      </section>

      {/* Content card overlapping hero */}
      <section className="relative -mt-10 pb-16 sm:-mt-16 sm:pb-20 lg:-mt-20 lg:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
          {/* Main article */}
          <article className="w-full rounded-2xl bg-white p-6 shadow-lg sm:p-8 lg:w-2/3">
            {/* Breadcrumb + meta */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <a href="/" className="hover:text-[#5AA354]">
                Home
              </a>
              <span>•</span>
              <a href="/blog" className="hover:text-[#5AA354]">
                Blog
              </a>
              <span>•</span>
              <span className="font-medium text-slate-700">{post.category}</span>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span>
                By <span className="font-semibold text-slate-900">{post.author}</span>
              </span>
              <span>•</span>
              <span>{post.dateLabel}</span>
            </div>

            <div className="prose prose-sm max-w-none text-slate-700 prose-li:marker:text-[#5AA354] sm:prose-base">
              {post.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full space-y-6 lg:w-1/3">
            <div className="rounded-2xl bg-slate-900 p-6 text-sm text-slate-100 shadow-lg">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                Fleet news morning highlights
              </h2>
              <p className="mt-3 text-xs text-slate-200">
                Get stories and product updates about cargo, safety, and marketplace features delivered to your inbox.
              </p>
              <form className="mt-4 space-y-3">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-600 bg-slate-900/40 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-400 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#5AA354] px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Latest posts
              </h3>
              <div className="space-y-3">
                {blogPosts.slice(0, 3).map((item) => (
                  <div key={item.slug} className="flex gap-3">
                    <div className="mt-1 h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-emerald-50">
                      <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-[#5AA354]">
                        F
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <a
                        href={`/blog/${item.slug}`}
                        className="text-[11px] font-medium text-[#5AA354] hover:text-emerald-700"
                      >
                        Read in 3 minutes
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
