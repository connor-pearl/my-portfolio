import Image from "next/image";
import { site } from "@/content/site";

export function Correspondence() {
  return (
    <section id="correspondence" className="relative overflow-hidden px-[var(--frame)] py-20 md:py-28">
      <div className="absolute top-0 right-0 h-[28rem] w-[28rem] opacity-30">
        <Image
          src="/images/copper-traces.png"
          alt="Macro abstract copper circuit traces on a dark substrate."
          fill
          className="object-cover"
          sizes="28rem"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink" />
      </div>

      <div className="relative max-w-5xl">
        <p className="kicker text-signal">Plate 05 · Dispatch</p>
        <h2 className="display-title mt-3 max-w-[10ch] text-5xl md:text-7xl">
          Open a channel
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-fog md:text-base">
          Available for production AI systems, full-stack platform work, and
          teams that need software that holds under load.
        </p>
      </div>

      <div className="relative mt-16 grid gap-px bg-rule md:grid-cols-3">
        <a
          href={`mailto:${site.email}`}
          className="group bg-ink p-8 no-underline transition-colors hover:bg-ink-2"
        >
          <p className="kicker">Email</p>
          <p className="mt-6 break-all font-display text-2xl italic group-hover:text-signal">
            {site.email}
          </p>
        </a>
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="group bg-ink p-8 no-underline transition-colors hover:bg-ink-2"
        >
          <p className="kicker">Voice</p>
          <p className="mt-6 font-display text-2xl italic group-hover:text-signal">
            {site.phone}
          </p>
        </a>
        <div className="bg-ink p-8">
          <p className="kicker">Station</p>
          <p className="mt-6 font-display text-2xl italic">{site.location}</p>
          <p className="mt-2 font-mono text-xs tracking-[0.14em] text-fog">
            {site.coordinates}
          </p>
        </div>
      </div>

      <footer className="relative mt-20 flex flex-wrap items-end justify-between gap-4 border-t border-rule pt-6">
        <p className="font-mono text-[10px] tracking-[0.22em] text-fog uppercase">
          {site.name} · Atlas 01 · {site.editionYear}
        </p>
        <p className="font-mono text-[10px] tracking-[0.18em] text-fog uppercase">
          No portraits · Cartographic edition
        </p>
      </footer>
    </section>
  );
}
