import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white text-slate-900">
      <div className="px-4 py-16 mx-auto max-w-screen-xl sm:py-20 lg:py-24 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-6xl sm:text-7xl lg:text-9xl tracking-tight font-extrabold text-emerald-600">
            404
          </h1>
          <p className="mb-4 text-2xl sm:text-3xl md:text-4xl tracking-tight font-bold text-slate-900">
            Something&apos;s missing.
          </p>
          <p className="mb-6 text-base sm:text-lg font-light text-slate-500">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the
            home page.
          </p>
          <Link
            href="/"
            className="inline-flex w-full sm:w-auto items-center justify-center text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-full text-sm px-6 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
