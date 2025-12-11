"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Fleet?",
    answer:
      "Fleet is a digital platform that connects shippers, drivers, and fleet owners to move cargo safely and efficiently across African cities.",
  },
  {
    question: "Which regions do you operate in?",
    answer:
      "We are focused on East and Central Africa, starting with major cities in Tanzania, Kenya, Uganda, and Rwanda.",
  },
  {
    question: "How do I become a driver or fleet owner?",
    answer:
      "You can sign up from the Fleet app or website, submit your vehicle and ID details, and complete our onboarding and verification steps.",
  },
  {
    question: "Is my cargo insured?",
    answer:
      "Depending on your plan and route, you can enable cargo insurance options during booking. Talk to our support team for more details.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us via the contact page, in-app chat, or email support@fleet.africa.",
  },
];

export default function FAQPage() {
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
            <span className="font-medium text-slate-900">FAQ</span>
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Help & FAQ</h1>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Answers to common questions about using Fleet as a shipper, driver, or fleet owner.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 sm:px-5 sm:py-4"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-3 text-left"
                >
                  <div className="flex gap-2">
                    <HelpCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#5AA354]" />
                    <h2 className="text-sm font-semibold text-slate-900 sm:text-base">{item.question}</h2>
                  </div>
                </button>
                <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
