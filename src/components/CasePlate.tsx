import Image from "next/image";
import Link from "next/link";
import type { caseStudies } from "@/content/site";

type CaseStudy = (typeof caseStudies)[keyof typeof caseStudies];

function OutcomeValue({ value }: { value: string }) {
  const match = value.match(/^(~?)(\d+k?)([%+]?)$/);
  if (!match) {
    return <span>{value}</span>;
  }

  const [, prefix, number, suffix] = match;
  return (
    <>
      {prefix ? <span className="text-copper">{prefix}</span> : null}
      <span>{number}</span>
      {suffix ? <span className="text-copper">{suffix}</span> : null}
    </>
  );
}

export function CasePlate({ study }: { study: CaseStudy }) {
  return (
    <main className="relative pb-20">
      <section className="relative overflow-hidden px-[var(--frame)] pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <Image
            src={study.image.src}
            alt={study.image.alt}
            fill
            priority
            className="object-cover opacity-45"
            sizes="46vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent" />
        </div>

        <div className="relative max-w-3xl">
          <p className="kicker text-signal">{study.plate}</p>
          <p className="mt-6 font-mono text-xs tracking-[0.2em] text-fog uppercase">
            {study.company} · {study.period} · {study.place}
          </p>
          <h1 className="display-title mt-4 max-w-[14ch] text-[clamp(3rem,10vw,6.5rem)] text-paper">
            {study.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fog md:text-lg">
            {study.lead}
          </p>
          <p className="mt-4 text-signal">{study.role}</p>
          <Link
            href={study.backHref}
            className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-copper uppercase no-underline hover:text-signal"
          >
            ← {study.backLabel}
          </Link>
        </div>
      </section>

      <section className="border-y border-rule bg-paper text-ink">
        <div className="grid gap-px bg-ink-rule sm:grid-cols-2 xl:grid-cols-4">
          {study.outcomes.items.map((item) => (
            <div key={item.label} className="bg-paper px-[var(--frame)] py-10 md:px-8">
              <p className="display-title text-[clamp(2.8rem,5vw,4.2rem)] leading-none text-ink">
                <OutcomeValue value={item.value} />
              </p>
              <p className="mt-4 max-w-[16rem] text-sm leading-snug text-ink-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[var(--frame)] py-16 md:py-24">
        <ol className="mx-auto grid max-w-4xl gap-12 md:gap-16">
          <li className="neatline border border-rule p-6 md:p-8">
            <p className="kicker text-copper">01 · {study.problem.heading}</p>
            <p className="mt-5 text-base leading-relaxed text-paper/85 md:text-lg">
              {study.problem.body}
            </p>
          </li>

          <li className="neatline border border-rule p-6 md:p-8">
            <p className="kicker text-copper">02 · {study.system.heading}</p>
            <p className="mt-5 text-base leading-relaxed text-paper/85 md:text-lg">
              {study.system.body}
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2 border-t border-rule pt-5">
              {study.system.stack.map((item, index) => (
                <li
                  key={item}
                  className="font-mono text-[11px] tracking-[0.08em] text-paper/75"
                >
                  {item}
                  {index < study.system.stack.length - 1 ? (
                    <span className="ml-3 text-copper/70">/</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </li>

          <li className="neatline border border-rule p-6 md:p-8">
            <p className="kicker text-copper">03 · {study.outcomes.heading}</p>
            <ul className="mt-5 space-y-4 text-base leading-relaxed text-paper/85 md:text-lg">
              {study.outcomes.items.map((item) => (
                <li key={item.label} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="mt-[0.7rem] h-1 w-1 bg-copper" />
                  <span>
                    <span className="text-signal">{item.value}</span>
                    {" — "}
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ol>

        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
          <Link
            href={study.backHref}
            className="font-mono text-[10px] tracking-[0.22em] text-copper uppercase no-underline hover:text-signal"
          >
            ← {study.backLabel}
          </Link>
          <Link
            href="/#correspondence"
            className="font-mono text-[10px] tracking-[0.22em] text-fog uppercase no-underline hover:text-paper"
          >
            Open dispatch →
          </Link>
        </div>
      </section>
    </main>
  );
}
