"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Truck, Package, Share2, Leaf, Briefcase, Zap, Users, Shield, MapPin } from "lucide-react";

const countries = [
  { code: "TZ", name: "Tanzania", flag: "🇹🇿" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "UG", name: "Uganda", flag: "🇺🇬" },
  { code: "RW", name: "Rwanda", flag: "🇷🇼" },
];

const languages = [
  { code: "EN", name: "English" },
  { code: "SW", name: "Swahili" },
  { code: "FR", name: "Français" },
];

export function Header() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200/50">
      {/* Main nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden">
            <Image
              src="/logo.jpg"
              alt="Fleet logo"
              fill
              sizes="36px"
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold text-[#5AA354]">Fleet</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          <div className="relative group">
            <button
              type="button"
              onClick={() => setIsMegaOpen((open) => !open)}
              className="flex items-center gap-1 text-slate-700 transition hover:text-[#5AA354]"
            >
              Products
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <Link href="/features" className="text-slate-700 transition hover:text-[#5AA354]">
            Features
          </Link>
          <Link href="/about" className="text-slate-700 transition hover:text-[#5AA354]">
            Company
          </Link>
          <Link href="/contact" className="text-slate-700 transition hover:text-[#5AA354]">
            Contact
          </Link>
        </nav>

        {/* Right buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#5AA354] transition"
         >
            Login
          </Link>
          <Link
            href="/register"
            className="inline-flex px-5 py-2 rounded-lg bg-[#5AA354] text-sm font-semibold text-white shadow-sm transition hover:bg-[#4c8c47]"
          >
            Sign up
          </Link>
        </div>
      </div>
      {/* Mega menu panel */}
      {isMegaOpen && (
        <div className="border-b border-slate-200 bg-white animate-in fade-in duration-200">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Products Column */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Products
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Truck, label: "Rides", desc: "Request in seconds", href: "/rides" },
                    { icon: Package, label: "Delivery", desc: "Fast & reliable", href: "/delivery" },
                    { icon: Share2, label: "Car-sharing", desc: "Commercial rental", href: "/car-sharing" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex gap-3 rounded-lg p-2 hover:bg-slate-50 transition transform hover:scale-105"
                      >
                        <Icon className="h-5 w-5 text-[#5AA354] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-[#5AA354]">
                            {item.label}
                          </p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Earn Column */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Earn with Fleet
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Truck, label: "Become a driver", desc: "Make money driving", href: "/become-driver" },
                    { icon: Package, label: "Become a courier", desc: "Deliver & earn", href: "/become-courier" },
                    { icon: Briefcase, label: "Fleet owner", desc: "Grow your business", href: "/fleet-owner" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex gap-3 rounded-lg p-2 hover:bg-slate-50 transition transform hover:scale-105"
                      >
                        <Icon className="h-5 w-5 text-[#2d6a2a] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-[#2d6a2a]">
                            {item.label}
                          </p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Company & Support Column */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Company
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Users, label: "About Fleet", desc: "Our mission", href: "/about" },
                    { icon: Shield, label: "Safety", desc: "Your protection", href: "/safety" },
                    { icon: MapPin, label: "Cities", desc: "Service areas", href: "/cities" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex gap-3 rounded-lg p-2 hover:bg-slate-50 transition transform hover:scale-105"
                      >
                        <Icon className="h-5 w-5 text-[#2d6a2a] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-[#2d6a2a]">
                            {item.label}
                          </p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
