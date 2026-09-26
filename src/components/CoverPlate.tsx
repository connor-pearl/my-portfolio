import Image from "next/image";
import { coverFacts, site } from "@/content/site";
import { ContourField } from "@/components/ContourField";

export function CoverPlate() {
  return (
    <section
      id="cover"
      className="cover-plate relative flex min-h-[calc(100svh-var(--index-bar))] flex-col justify-between overflow-hidden px-[var(--frame)] py-5 md:py-8 xl:min-h-[100svh] xl:py-10"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/valley-contours.png"
          alt="Abstract topographic contour field of a mountain valley."
          fill
          priority
          className="contour-shift object-cover object-[68%_40%] opacity-40 md:object-center md:opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-15% via-ink/88 to-ink/40 md:via-ink/72 md:to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/70" />
        <div className="absolute inset-y-0 right-0 hidden w-[58%] opacity-70 mix-blend-screen md:block">
          <ContourField />
        </div>
      </div>

      <header className="relative z-10 flex items-start justify-between gap-6 cover-rise">
        <p className="kicker">
          Atlas / {site.shortName} / {site.coordinates}
        </p>
        <p className="kicker text-right">{site.location}</p>
      </header>

      <div className="relative z-10 max-w-[16ch] cover-rise cover-rise-2">
        <p className="kicker mb-4 text-signal md:mb-6">Plate 00 · Cover</p>
        <h1 className="cover-title display-title text-paper">
          {site.givenName}
          <span className="block italic text-copper">{site.familyName}</span>
        </h1>
        <p className="mt-5 max-w-[22rem] text-base leading-snug text-paper/85 md:mt-8 md:text-xl md:leading-relaxed">
          {site.role}
        </p>
      </div>

      <footer className="relative z-10 grid gap-5 border-t border-rule pt-5 cover-rise cover-rise-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10 md:pt-6">
        <div className="max-w-md">
          <p className="text-sm leading-relaxed text-fog md:text-base">
            {site.coverLead}
          </p>
          <a
            href="#signal"
            className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-copper uppercase no-underline hover:text-signal"
          >
            Continue to signal
            <span aria-hidden>↓</span>
          </a>
        </div>
        <dl className="grid grid-cols-3 gap-4 font-mono text-[10px] tracking-[0.16em] uppercase sm:gap-6 sm:text-[11px]">
          {coverFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-fog">{fact.label}</dt>
              <dd className="mt-1 text-paper">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </footer>
    </section>
  );
}
