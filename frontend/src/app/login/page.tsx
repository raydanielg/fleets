"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    // Fake request delay
    await new Promise((res) => setTimeout(res, 1200));

    // For now always success; you can plug real API logic here later
    setStatus("success");
    setIsSubmitting(false);
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left: Login content full height */}
        <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 lg:w-1/2 lg:py-16">
          {/* Logo + title */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-md bg-[#5AA354]/10">
                <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-[#5AA354]">
                  F
                </span>
              </div>
              <span className="text-sm font-semibold tracking-tight text-[#5AA354]">Fleet</span>
            </div>
            <p className="hidden text-xs text-slate-500 sm:inline">Cargo transportation platform</p>
          </div>

          <div className="mb-4">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Welcome back</h1>
            <p className="mt-1 text-sm text-slate-600">
              Sign in to continue to Fleet cargo management.
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
              <span className="ml-2">Signed in successfully.</span>
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
              <span className="ml-2">Something went wrong. Please try again.</span>
            </div>
          )}

          {/* Social buttons */}
          <div className="mb-4 grid gap-3 sm:grid-cols-2">
              <button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
                  {/* Simple Google icon */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M21.8 10.2h-9v3.6h5.2a4.6 4.6 0 0 1-2 3"
                      fill="none"
                      stroke="#4285F4"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 13.8A4.6 4.6 0 0 1 5 10l-2.6-2"
                      fill="none"
                      stroke="#EA4335"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 10A4.6 4.6 0 0 1 12 6.5"
                      fill="none"
                      stroke="#FBBC05"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 17.5A4.6 4.6 0 0 1 5 13.8L2.4 16"
                      fill="none"
                      stroke="#34A853"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Continue with Google
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
                  {/* Simple Apple icon */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M16.5 3.5c-.8.1-1.7.5-2.3 1.1-.5.5-.9 1.3-.8 2.1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.4 7.2C11.7 6.3 10.7 5.8 9.7 5.8c-2.1 0-3.9 1.9-3.9 4.7 0 1.5.4 2.9 1.2 4.1.5.8 1.2 1.7 2.2 1.7.9 0 1.2-.6 2.4-.6 1.2 0 1.5.6 2.4.6 1 0 1.7-.9 2.2-1.7.7-1.1 1.1-2.5 1.1-3.9 0-2.6-1.6-4-3.1-4-.9 0-1.7.5-2.3 1.1-.5.4-.8.8-1.1 0z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Continue with Apple
              </button>
            </div>

          <div className="mb-4 flex items-center gap-3 text-xs text-slate-400">
              <div className="h-px flex-1 bg-slate-200" />
              <span>or</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

          {/* Email/password form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1.5 text-sm">
                <label htmlFor="email" className="font-medium text-slate-900">
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

              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="font-medium text-slate-900">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-[#5AA354] hover:text-emerald-700"
                  >
                    Forgot password?
                  </Link>
                </div>
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

              <div className="flex items-center justify-between text-xs text-slate-600">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-3.5 w-3.5 rounded border-slate-300 text-[#5AA354]" />
                  <span>Remember me</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5AA354] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign in to your account</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
          </form>

          <p className="mt-4 text-xs text-slate-600">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-[#5AA354] hover:text-emerald-700">
              Sign up
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
              <span>Fleet for logistics teams</span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight">
              Explore powerful cargo management for fleets and shippers.
            </h2>
            <p className="text-sm text-emerald-50">
              Centralise loads, vehicles, and trips in one modern platform. Designed for companies that care about speed,
              safety, and a great experience for partners.
            </p>
            <div className="flex items-center gap-4 text-xs text-emerald-50/90">
              <div className="space-y-1">
                <p className="font-semibold uppercase tracking-wide text-[10px] text-emerald-100">Trusted by teams</p>
                <p>Fleet owners, drivers, and shippers across East Africa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
