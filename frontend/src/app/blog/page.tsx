"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    title: "Why Fleet is building for African cargo first",
    slug: "why-fleet-is-building-for-african-cargo-first",
    category: "Article",
    date: "Nov 2025 · 8 min read",
    summary:
      "How we are designing Fleet for fragmented routes, multi-currency payments, and the realities of African logistics.",
    heroImage:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80",
    author: "Fleet product team",
  },
  {
    title: "Five ways to keep cargo moving during peak season",
    slug: "five-ways-to-keep-cargo-moving-during-peak-season",
    category: "Article",
    date: "Oct 2025 · 6 min read",
    summary:
      "Practical tips for shippers and fleet owners to reduce delays, keep trucks loaded, and protect margins.",
    heroImage:
      "https://images.unsplash.com/photo-1534448311378-1e193fb2570e?auto=format&fit=crop&w=900&q=80",
    author: "Fleet operations",
  },
  {
    title: "Safety playbook for drivers and owners on Fleet",
    slug: "safety-playbook-for-drivers-and-owners-on-fleet",
    category: "Article",
    date: "Sep 2025 · 7 min read",
    summary:
      "Our approach to driver vetting, trip tracking, and incident reporting inside the Fleet platform.",
    heroImage:
      "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=900&q=80",
    author: "Fleet safety team",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-[#5AA354]/20 bg-[#5AA354]/5 backdrop-blur-sm">
        <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <a href="/" className="text-slate-700 hover:text-[#5AA354] transition">
              Home
            </a>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="font-medium text-slate-900">Blog</span>
          </div>
        </div>
      </div>

      {/* Blog section - three cards with images */}
      <section className="bg-white py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Blog
            </h1>
            <p className="mx-auto max-w-2xl text-sm font-light text-slate-500 sm:text-lg">
              We use an agile approach to test assumptions and connect with the needs of shippers, drivers, and fleet
              owners early and often across Tanzania and East & Central Africa.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 w-full sm:h-48">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-3 p-5 sm:p-6">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-0.5 text-[11px] font-medium text-[#5AA354]">
                    {post.category}
                  </span>
                  <h2 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>
                  <p className="text-sm font-light text-slate-600">{post.summary}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-[#5AA354]">
                        F
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <a
                      href={`/blog/${post.slug}`}
                      className="hidden items-center text-[11px] font-medium text-[#5AA354] hover:underline sm:inline-flex"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
