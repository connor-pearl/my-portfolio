import { metrics } from "@/content/site";

export function SignalPlate() {
  return (
    <section id="signal" className="relative bg-paper text-ink">
      <div className="px-[var(--frame)] py-16 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker text-fog-2">Plate 01 · Signal</p>
            <h2 className="display-title mt-3 text-5xl text-ink md:text-7xl">
              Field readings
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-fog-2">
            Production outcomes measured across deployed AI systems, platform
            services, and infrastructure work.
          </p>
        </div>

        <ul className="grid gap-px bg-ink-rule sm:grid-cols-2 xl:grid-cols-5">
          {metrics.map((metric) => (
            <li key={metric.label} className="bg-paper px-0 py-8 sm:px-6 sm:py-10">
              <p className="display-title text-[clamp(3.4rem,6vw,5.4rem)] leading-none text-ink">
                {metric.value}
                <span className="text-copper">{metric.suffix}</span>
              </p>
              <p className="mt-5 max-w-[16rem] text-sm leading-snug text-ink-2">
                {metric.label}
              </p>
              <p className="kicker mt-4 text-fog-2">{metric.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
