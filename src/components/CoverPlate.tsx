import Image from "next/image";
import { site } from "@/content/site";
import { ContourField } from "@/components/ContourField";

export function CoverPlate() {
  return (
    <section
      id="cover"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-[var(--frame)] pt-10 pb-8 md:pt-14 md:pb-10"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/valley-contours.png"
          alt="Abstract topographic contour field of a mountain valley."
          fill
          priority
          className="contour-shift object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        <div className="absolute inset-y-0 right-0 w-[58%] opacity-70 mix-blend-screen">
          <ContourField />
        </div>
      </div>

      <header className="relative z-10 flex items-start justify-between gap-6">
        <p className="kicker">
          Atlas / {site.shortName} / {site.coordinates}
        </p>
        <p className="kicker hidden sm:block">{site.location}</p>
      </header>

      <div className="relative z-10 mt-16 max-w-[18ch] md:mt-10">
        <p className="kicker mb-6 text-signal">Plate 00 · Cover</p>
        <h1 className="display-title text-[clamp(4.4rem,16vw,13.5rem)] text-paper">
          Connor
          <span className="block italic text-copper">Brennan</span>
        </h1>
        <p className="mt-8 max-w-[22rem] text-lg leading-relaxed text-paper/80 md:text-xl">
          {site.role}
        </p>
      </div>

      <footer className="relative z-10 mt-16 grid gap-6 border-t border-rule pt-6 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-xl text-sm leading-relaxed text-fog md:text-base">
          {site.summary}
        </p>
        <dl className="grid grid-cols-3 gap-6 font-mono text-[11px] tracking-[0.16em] uppercase">
          <div>
            <dt className="text-fog">Tenure</dt>
            <dd className="mt-1 text-paper">07 years</dd>
          </div>
          <div>
            <dt className="text-fog">Now</dt>
            <dd className="mt-1 text-paper">La Haus</dd>
          </div>
          <div>
            <dt className="text-fog">Focus</dt>
            <dd className="mt-1 text-paper">Production AI</dd>
          </div>
        </dl>
      </footer>
    </section>
  );
}
