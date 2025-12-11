import Image from "next/image";

export function AppBanner() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-#2d6a2a sm:text-4xl">
              Let's create more tools and ideas that brings us together.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Fleet helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.
            </p>

            {/* Download badges */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#" className="inline-block hover:opacity-80 transition">
                <Image
                  src="/app-store-badge.png"
                  alt="Download on App Store"
                  width={180}
                  height={60}
                  className="h-auto w-auto"
                />
              </a>
              <a href="#" className="inline-block hover:opacity-80 transition">
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="h-auto w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/green-industry-showcase-sustainable-logistics-solutions-streamlined-operations_980716-121874.jpg"
                alt="Fleet logistics solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
