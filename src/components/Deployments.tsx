import { experience } from "@/content/site";

export function Deployments() {
  return (
    <section id="deployments" className="relative px-[var(--frame)] py-20 md:py-28">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="kicker text-signal">Plate 02 · Deployments</p>
          <h2 className="display-title mt-3 max-w-[12ch] text-5xl md:text-7xl">
            Survey of systems in the field
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-fog md:text-base">
          Three stations. Cali and Dublin. SaaS platforms, payment APIs, RAG
          pipelines, and production LLM systems.
        </p>
      </div>

      <ol className="relative space-y-0">
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[0.55rem] w-px bg-rule md:left-[7.35rem]"
        />
        {experience.map((job) => (
          <li
            key={job.id}
            className="relative grid gap-6 border-t border-rule py-12 md:grid-cols-[7rem_1fr] md:gap-12 md:py-16"
          >
            <p className="kicker pt-2 text-copper">{job.plate}</p>
            <article>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-mono text-xs tracking-[0.2em] text-fog uppercase">
                  {job.period}
                </p>
                <p className="font-mono text-xs tracking-[0.16em] text-fog uppercase">
                  {job.place}
                </p>
              </div>
              <h3 className="display-title mt-4 text-4xl md:text-5xl">{job.company}</h3>
              <p className="mt-2 text-lg text-signal md:text-xl">{job.role}</p>
              <ul className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-paper/80 md:text-[0.95rem]">
                {job.notes.map((note) => (
                  <li key={note} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-copper" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 flex flex-wrap gap-2">
                {job.stack.map((item) => (
                  <li
                    key={item}
                    className="border border-rule px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] text-fog uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
