import { deploymentsIntro, experience } from "@/content/site";

export function Deployments() {
  return (
    <section id="deployments" className="relative px-[var(--frame)] py-20 md:py-28">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
        <div>
          <p className="kicker text-signal">Plate 02 · Deployments</p>
          <h2 className="display-title mt-3 max-w-[12ch] text-5xl md:text-7xl">
            Survey of systems in the field
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-fog md:text-base">
          {deploymentsIntro}
        </p>
      </div>

      <ol className="deployments-spine relative">
        <span aria-hidden className="deployments-meridian" />

        {experience.map((job) => (
          <li
            key={job.id}
            className={`deployments-station relative grid gap-5 border-t border-rule py-12 md:grid-cols-[8.5rem_1fr] md:gap-12 md:py-16 ${
              job.current ? "is-current" : ""
            }`}
          >
            <div className="relative pl-7 md:pl-0">
              <span
                aria-hidden
                className={`deployments-node absolute top-1.5 left-0 md:left-auto md:right-0 ${
                  job.current ? "is-current" : ""
                }`}
              />
              <p className="kicker text-copper">{job.plate}</p>
              <p
                className={`mt-3 font-mono text-[10px] tracking-[0.18em] uppercase ${
                  job.current ? "text-signal" : "text-fog"
                }`}
              >
                {job.station}
              </p>
            </div>

            <article>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-mono text-xs tracking-[0.2em] text-fog uppercase">
                  {job.period}
                </p>
                <p className="font-mono text-xs tracking-[0.16em] text-fog uppercase">
                  {job.place}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h3 className="display-title text-4xl md:text-5xl">{job.company}</h3>
                {job.current ? (
                  <span className="border border-copper/50 px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] text-copper uppercase">
                    Present
                  </span>
                ) : null}
              </div>

              <p className="mt-2 text-lg text-signal md:text-xl">{job.role}</p>

              <ul className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-paper/80 md:text-[0.95rem]">
                {job.notes.map((note) => (
                  <li key={note} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="mt-[0.55rem] h-1 w-1 bg-copper" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-rule pt-5">
                <p className="kicker mb-3 text-fog">Stack legend</p>
                <ul className="flex flex-wrap gap-x-3 gap-y-2">
                  {job.stack.map((item, index) => (
                    <li
                      key={item}
                      className="font-mono text-[11px] tracking-[0.08em] text-paper/75"
                    >
                      {item}
                      {index < job.stack.length - 1 ? (
                        <span className="ml-3 text-copper/70">/</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
