"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, Shield, CheckCircle, AlertCircle, Users, X } from "lucide-react";
import Image from "next/image";

const safetyGuidelines = [
  {
    category: "Driver Safety",
    icon: Shield,
    guidelines: [
      "Complete KYC verification and background checks",
      "Regular vehicle inspections and maintenance",
      "GPS tracking on all shipments",
      "Emergency support 24/7",
      "Insurance coverage for all trips",
      "Safe driving training programs",
    ],
  },
  {
    category: "Shipper Safety",
    icon: CheckCircle,
    guidelines: [
      "Verified driver and vehicle information",
      "Real-time shipment tracking",
      "Secure payment processing",
      "Cargo insurance options",
      "Damage claim procedures",
      "Customer support team",
    ],
  },
  {
    category: "Cargo Security",
    icon: AlertCircle,
    guidelines: [
      "Secure packaging requirements",
      "Temperature-controlled transport",
      "Theft prevention measures",
      "Proof of delivery verification",
      "Chain of custody documentation",
      "Insurance for high-value items",
    ],
  },
  {
    category: "Community Safety",
    icon: Users,
    guidelines: [
      "Rating and review system",
      "Dispute resolution process",
      "Fraud prevention measures",
      "Safe meeting points",
      "Emergency contact protocols",
      "Community guidelines enforcement",
    ],
  },
];

export default function SafetyPage() {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);

  function handleSubmitReport(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = "FLT-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setTicketId(id);
  }

  const isSubmitted = Boolean(ticketId);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-[#2d6a2a]/20 bg-[#2d6a2a]/5 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <a href="/" className="text-slate-700 hover:text-[#2d6a2a] transition">
              Home
            </a>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <a href="/about" className="text-slate-700 hover:text-[#2d6a2a] transition">
              Company
            </a>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="font-medium text-slate-900">Safety</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/truck-forest-road-moving-lorry-freight-transport-scene_169016-68018.jpg"
            alt="Fleet truck on forest road"
            fill
            priority
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2d6a2a]/70 backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Safety at Fleet
            </h1>
            <p className="mt-6 text-lg text-emerald-50">
              Your safety is our priority. We've implemented comprehensive measures to protect drivers, shippers, merchants, and cargo across our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {safetyGuidelines.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.category}
                  className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#2d6a2a]/10">
                      <Icon className="h-6 w-6 text-[#2d6a2a]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {section.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {section.guidelines.map((guideline) => (
                      <li key={guideline} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#2d6a2a] mt-2 flex-shrink-0" />
                        {guideline}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="bg-slate-50/50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Verification Process
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Identity Verification",
                  description: "Government-issued ID verification and background checks",
                },
                {
                  step: "2",
                  title: "Vehicle Inspection",
                  description: "Regular vehicle inspections and maintenance verification",
                },
                {
                  step: "3",
                  title: "Continuous Monitoring",
                  description: "Ongoing monitoring and rating system for all users",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#2d6a2a] text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Report a Safety Issue
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            If you encounter any safety concerns or suspicious activity, please report it immediately to our safety team.
          </p>
          <button
            className="rounded-lg bg-[#2d6a2a] px-8 py-3 font-semibold text-white hover:bg-[#4c8c47] transition"
            onClick={() => {
              setIsReportOpen(true);
              setTicketId(null);
            }}
          >
            Report an Issue
          </button>
        </div>
      </section>

      {isReportOpen && (
        <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/40 backdrop-blur-sm px-4 py-6 sm:items-center">
          <div className="relative w-full max-w-xl rounded-2xl bg-white p-5 shadow-xl sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-slate-200 p-1 text-slate-500 hover:border-slate-300 hover:text-slate-700"
              onClick={() => setIsReportOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="mb-2 text-xl font-bold text-slate-900">Report a Safety Issue</h3>
            <p className="mb-4 text-sm text-slate-600">
              Tell us what happened so our safety team can review your report and take action. Attach photos or video if you have them.
            </p>

            {/* Steps indicator */}
            <div className="mb-6 flex items-center justify-between gap-3 text-xs font-medium text-slate-500">
              <div className="flex flex-1 items-center gap-2">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                  !isSubmitted ? "bg-[#2d6a2a] text-white" : "bg-emerald-50 text-[#2d6a2a]"
                }`}>
                  1
                </span>
                <span className="hidden sm:inline">Details</span>
              </div>
              <div className="h-px flex-1 bg-slate-200" />
              <div className="flex flex-1 items-center gap-2">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                  !isSubmitted ? "bg-[#2d6a2a] text-white" : "bg-emerald-50 text-[#2d6a2a]"
                }`}>
                  2
                </span>
                <span className="hidden sm:inline">Attachments</span>
              </div>
              <div className="h-px flex-1 bg-slate-200" />
              <div className="flex flex-1 items-center gap-2 justify-end">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                  isSubmitted ? "bg-[#2d6a2a] text-white" : "bg-slate-100 text-slate-400"
                }`}>
                  3
                </span>
                <span className="hidden sm:inline">Ticket ID</span>
              </div>
            </div>

            {ticketId ? (
              <div className="space-y-4">
                <div className="rounded-xl bg-emerald-50 p-4 text-left text-sm text-emerald-800">
                  <p className="font-semibold">Step 3 · Ticket created</p>
                  <p className="mt-1">
                    Thank you for your report. Your ticket ID is
                    <span className="font-mono font-bold text-emerald-900"> {ticketId}</span>.
                  </p>
                  <p className="mt-1">
                    Our safety team will review the details and may contact you for more information.
                  </p>
                </div>
                <button
                  type="button"
                  className="w-full rounded-lg bg-[#2d6a2a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4c8c47]"
                  onClick={() => setIsReportOpen(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmitReport}>
                <div className="text-left space-y-2">
                  <label className="text-sm font-medium text-slate-900">Vehicle type</label>
                  <input
                    name="vehicleType"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2d6a2a] focus:outline-none focus:ring-1 focus:ring-[#2d6a2a]"
                    placeholder="e.g. 10T truck, pick-up, motorcycle"
                    required
                  />
                </div>

                <div className="text-left space-y-2">
                  <span className="text-sm font-medium text-slate-900">Cargo type</span>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    {[
                      { id: "general", label: "General", icon: "box" },
                      { id: "food", label: "Food", icon: "leaf" },
                      { id: "fuel", label: "Fuel", icon: "drop" },
                      { id: "construction", label: "Construction", icon: "truck" },
                      { id: "farm", label: "Farm", icon: "tractor" },
                      { id: "other", label: "Other", icon: "dots" },
                    ].map((item) => (
                      <label
                        key={item.id}
                        className="group flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2 py-3 text-center hover:border-[#2d6a2a] hover:bg-emerald-50"
                      >
                        <input type="radio" name="cargoType" value={item.id} className="hidden" required={item.id === "general"} />
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2d6a2a] shadow-sm">
                          {item.icon === "box" && (
                            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                              <path
                                d="M4 7.5 12 4l8 3.5-8 3.5L4 7.5Zm0 3.5 8 3.5 8-3.5M4 14.5 12 18l8-3.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {item.icon === "leaf" && (
                            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                              <path
                                d="M5 19s6.5 1 10.5-3S19 5 19 5 8.5 5 5.5 9 5 19 5 19Zm0 0 6-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {item.icon === "drop" && (
                            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                              <path
                                d="M12 3S7 9 7 13a5 5 0 0 0 10 0c0-4-5-10-5-10Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {item.icon === "truck" && (
                            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                              <path
                                d="M3 7h10v7H3V7Zm10 3h4.5L21 12v2h-8M6 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {item.icon === "tractor" && (
                            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                              <path
                                d="M4 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm0 0H2v-4l2-5h3l1 3h4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {item.icon === "dots" && (
                            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                              <circle cx="6" cy="12" r="1.5" fill="currentColor" />
                              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                              <circle cx="18" cy="12" r="1.5" fill="currentColor" />
                            </svg>
                          )}
                        </span>
                        <span className="text-xs font-medium text-slate-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="text-left space-y-2">
                  <label className="text-sm font-medium text-slate-900">What happened?</label>
                  <textarea
                    name="description"
                    rows={4}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2d6a2a] focus:outline-none focus:ring-1 focus:ring-[#2d6a2a]"
                    placeholder="Describe the issue, location, time, and any important details."
                    required
                  />
                </div>

                <div className="text-left space-y-2">
                  <label className="text-sm font-medium text-slate-900">Photos or video (optional)</label>
                  <input
                    type="file"
                    name="attachments"
                    accept="image/*,video/*"
                    multiple
                    className="block w-full text-xs text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-[#2d6a2a]/10 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#2d6a2a] hover:file:bg-[#2d6a2a]/20"
                  />
                  <p className="text-xs text-slate-400">
                    You can attach up to 5 files. Supported formats: JPG, PNG, MP4.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#2d6a2a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4c8c47]"
                >
                  Submit report
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
