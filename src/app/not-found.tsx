import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col justify-between px-[var(--frame)] py-16">
      <p className="kicker">Plate 404 · Off-map</p>
      <div>
        <h1 className="display-title text-[clamp(4rem,12vw,9rem)]">
          Uncharted
        </h1>
        <p className="mt-6 max-w-md text-fog">
          This coordinate is not on the atlas. Return to the cover plate to
          continue the survey.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block border border-copper px-5 py-3 font-mono text-[11px] tracking-[0.22em] text-copper uppercase no-underline hover:bg-copper hover:text-ink"
        >
          Return to cover
        </Link>
      </div>
      <p className="font-mono text-[10px] tracking-[0.2em] text-fog uppercase">
        Connor Brennan · Atlas 01
      </p>
    </main>
  );
}
