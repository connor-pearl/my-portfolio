import Image from "next/image";
import { education } from "@/content/site";

export function OriginPlate() {
  return (
    <section id="origin" className="relative bg-paper text-ink">
      <div className="grid min-h-[70vh] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-between px-[var(--frame)] py-16 md:py-24">
          <div>
            <p className="kicker text-fog-2">Plate 04 · Origin</p>
            <h2 className="display-title mt-3 text-5xl md:text-7xl">
              Survey origin
            </h2>
          </div>
          <div className="mt-16 max-w-xl">
            <p className="font-mono text-xs tracking-[0.22em] text-fog-2 uppercase">
              {education.period}
            </p>
            <h3 className="display-title mt-4 text-4xl leading-[1.05] md:text-5xl">
              {education.degree}
            </h3>
            <p className="mt-6 text-lg text-copper">{education.school}</p>
            <p className="mt-2 text-sm text-fog-2">{education.place}</p>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-ink-2">
              Intelligent systems as the formal starting coordinate. The work
              since has been putting that training into production: models,
              APIs, interfaces, and the infrastructure that keeps them alive.
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px]">
          <Image
            src="/images/andes-geometry.png"
            alt="Abstract geometric terraces suggesting Andean landforms and infrastructure."
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
