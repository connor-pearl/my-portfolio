import Image from "next/image";
import { skillGroups } from "@/content/site";

export function Instrumentation() {
  return (
    <section id="instrumentation" className="relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
        <Image
          src="/images/signal-lattice.png"
          alt="Abstract neural constellation lattice with copper and mint connections."
          fill
          className="object-cover opacity-50"
          sizes="42vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      </div>

      <div className="relative px-[var(--frame)] py-20 md:py-28">
        <div className="max-w-5xl">
          <p className="kicker text-signal">Plate 03 · Instrumentation</p>
          <h2 className="display-title mt-3 max-w-[14ch] text-5xl md:text-7xl">
            Legend of the working stack
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-fog md:text-base">
            Classified the way a map legend is classified: by system, not by
            buzzword. Tools used to ship, observe, and scale production software.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:max-w-[58%]">
          {skillGroups.map((group) => (
            <article key={group.id} className="neatline border border-rule p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl italic">{group.title}</h3>
                <span className="font-mono text-[11px] tracking-[0.28em] text-copper">
                  {group.legend}
                </span>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                {group.items.map((item, index) => (
                  <li
                    key={item}
                    className="font-mono text-[11px] tracking-[0.08em] text-paper/75"
                  >
                    {item}
                    {index < group.items.length - 1 ? (
                      <span className="ml-3 text-copper/70">/</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
