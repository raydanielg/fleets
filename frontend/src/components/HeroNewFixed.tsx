import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#f1f9f2]">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <a
          href="/features"
          className="mb-5 inline-flex items-center gap-3 rounded-full bg-slate-100 px-3 py-1 pr-3 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-200/80 hover:ring-slate-300 transition"
        >
          <span className="inline-flex items-center rounded-full bg-[#1d4ed8] px-3 py-0.5 text-[11px] font-semibold text-white">
            New
          </span>
          <span className="text-[11px] sm:text-xs font-normal text-slate-700">
            Fleet now helps businesses manage cargo across East & Central Africa.
            See what&apos;s new.
          </span>
          
        </a>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Turn <span className="text-[#2d6a2a]">Fleet</span> into your
          <br className="hidden sm:inline" /> powerful cargo channel.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-700 sm:text-base">
          Accept cargo requests, match verified vehicles, and manage every trip in
          one place — from pricing and KYC to GPS tracking and secure payments.
        </p>
        <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#2d6a2a] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#4c8c47]">
          Get started today
        </button>

        <div className="relative mt-10 w-full max-w-5xl">
          <div className="relative mx-auto flex max-w-3xl items-center justify-center">
            {/* Main hero image */}
            <div className="relative z-10 w-full max-w-3xl">
              <Image
                src="/heroimg/phone.webp"
                alt="Fleet mobile app"
                width={1024}
                height={480}
                className="h-auto w-full object-contain"
                priority
              />
              {/* Soft fade at the bottom so the phone doesn't end with a hard line */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f1f9f2] to-transparent" />
            </div>

            {/* Floating overlay cards using provided assets */}
            {/* Left chart card – slightly behind phone */}
            <div className="hero-float-slow pointer-events-none absolute left-0 bottom-4 z-0 hidden w-44 sm:w-48 sm:block">
              <Image
                src="/heroimg/sales-over-time.png"
                alt="Sales over time chart"
                width={320}
                height={190}
                className="h-auto w-full"
              />
            </div>

            {/* Top-right sales card – above phone */}
            <div className="hero-float-fast pointer-events-none absolute right-2 top-2 z-20 hidden w-52 sm:w-56 sm:block">
              <Image
                src="/heroimg/sales-summary.png"
                alt="Sales summary"
                width={320}
                height={160}
                className="h-auto w-full"
              />
            </div>

            {/* Bottom-right toggle card – same layer as phone, hugging edge */}
            <div className="hero-float-slow pointer-events-none absolute right-1 bottom-2 z-10 hidden w-40 sm:w-44 sm:block">
              <Image
                src="/heroimg/ordering-mode.png"
                alt="Ordering mode toggle"
                width={280}
                height={120}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
