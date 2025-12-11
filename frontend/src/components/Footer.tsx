import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#5AA354] text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Left - Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white">
                <Image
                  src="/logo.jpg"
                  alt="Fleet logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">Fleet</span>
            </div>
            <p className="text-sm leading-relaxed text-emerald-50">
              We provide reliable, safe, and efficient logistics solutions across Tanzania and the wider East & Central
              Africa region. Connect with us for all your transport and delivery needs.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-white hover:bg-emerald-500/25 transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-emerald-50">
              <li>
                <a href="/" className="transition hover:text-white">Home</a>
              </li>
              <li>
                <a href="/about" className="transition hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/features" className="transition hover:text-white">Fleet services</a>
              </li>
              <li>
                <a href="/blog" className="transition hover:text-white">Blog</a>
              </li>
              <li>
                <a href="/request-access" className="transition hover:text-white">Request access</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Information</h3>
            <ul className="space-y-2 text-sm text-emerald-50">
              <li>
                <a href="/privacy" className="transition hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="transition hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="/safety" className="transition hover:text-white">Safety Guidelines</a>
              </li>
              <li>
                <a href="/help/faq" className="transition hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-emerald-50">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Kisutu Posta, Dar es Salaam<br />Tanzania</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@fleetssystems.com" className="transition hover:text-white">info@fleetssystems.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+255683999333" className="transition hover:text-white">+255 683 999 333</a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Download our app</h3>
            <p className="text-sm text-emerald-50">
              Track shipments, book deliveries, and manage logistics from your phone.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:bg-emerald-50"
              >
                Google Play
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:bg-emerald-50"
              >
                App Store
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border & copyright */}
      <div className="border-t border-emerald-200/40">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-emerald-50">
            &copy; Fleet {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
