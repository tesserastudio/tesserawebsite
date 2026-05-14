import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding pt-36 sm:pt-40">
      <div className="site-container max-w-3xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-[-0.06em] sm:text-6xl">
          This page wandered off the mosaic.
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/[0.58]">
          The route you tried does not exist, or it has been moved while the site was evolving.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:bg-[#f5f1ff]"
          >
            Return home
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-white/[0.1] px-6 py-3 font-semibold text-white transition hover:bg-white/[0.05]"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
