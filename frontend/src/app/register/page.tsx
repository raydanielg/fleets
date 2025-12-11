"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    await new Promise((res) => setTimeout(res, 1400));

    setStatus("success");
    setIsSubmitting(false);
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left: Register content full height */}
        <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 lg:w-1/2 lg:py-16">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-md bg-[#5AA354]/10">
                <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-[#5AA354]">
                  F
                </span>
              </div>
              <span className="text-sm font-semibold tracking-tight text-[#5AA354]">Fleet</span>
            </div>
            <p className="hidden text-xs text-slate-500 sm:inline">Create your logistics workspace</p>
          </div>

          <div className="mb-4">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Create your Fleet account</h1>
            <p className="mt-1 text-sm text-slate-600">
              Sign up to start managing cargo, vehicles, and trips.
            </p>
          </div>

          {/* Alerts */}
          {status === "success" && (
            <div
              className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50/80 px-2 py-1 pr-3 text-xs text-emerald-900"
              role="alert"
            >
              <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold">
                <CheckCircle2 className="h-3 w-3" />
                Success
              </span>
              <span className="ml-2">Account created successfully.</span>
            </div>
          )}
          {status === "error" && (
            <div
              className="mb-4 inline-flex items-center rounded-full border border-red-200 bg-red-50/80 px-2 py-1 pr-3 text-xs text-red-900"
              role="alert"
            >
              <span className="flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-semibold">
                <AlertCircle className="h-3 w-3" />
                Error
              </span>
              <span className="ml-2">Could not create account. Please try again.</span>
            </div>
          )}

          <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-900" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-900" htmlFor="role">
                    Role
                  </label>
                  <select
                    id="role"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                    defaultValue="shipper"
                  >
                    <option value="shipper">Shipper</option>
                    <option value="driver">Driver</option>
                    <option value="owner">Fleet owner</option>
                    <option value="merchant">Merchant</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-medium text-slate-900" htmlFor="email">
                  Email
                </label>
                <div className="relative mt-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#5AA354]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-900" htmlFor="password">
                    Password
                  </label>
                  <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#5AA354]">
                      <Lock className="h-4 w-4" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="font-medium text-slate-900" htmlFor="confirmPassword">
                    Confirm password
                  </label>
                  <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#5AA354]">
                      <Lock className="h-4 w-4" />
                    </div>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#5AA354] focus:outline-none focus:ring-1 focus:ring-[#5AA354]"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-slate-600">
                <input type="checkbox" className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-[#5AA354]" required />
                <p>
                  I agree to the
                  <span className="mx-1 cursor-pointer text-[#5AA354] hover:text-emerald-700">Terms</span>
                  and
                  <span className="ml-1 cursor-pointer text-[#5AA354] hover:text-emerald-700">Privacy Policy</span>.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5AA354] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create account</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
          </form>

          <p className="mt-4 text-xs text-slate-600">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#5AA354] hover:text-emerald-700">
              Sign in
            </Link>
          </p>
        </div>

        {/* Right: Marketing panel */}
        <div className="hidden w-full items-center justify-center bg-gradient-to-br from-[#0f766e] via-[#059669] to-[#5AA354] p-10 text-white lg:flex lg:w-1/2">
          <div className="max-w-md space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold">
                F
              </span>
              <span>Designed for African logistics</span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight">
              Onboard your fleet, drivers, and shippers in minutes.
            </h2>
            <p className="text-sm text-emerald-50">
              Bring everyone into one platform and start moving cargo with full visibility from day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
