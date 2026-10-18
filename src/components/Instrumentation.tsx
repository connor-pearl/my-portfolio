"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { instrumentationIntro, skillGroups } from "@/content/site";

type GroupFilter = "all" | (typeof skillGroups)[number]["id"];

export function Instrumentation() {
  const searchId = useId();
  const [group, setGroup] = useState<GroupFilter>("all");
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();

  const visibleGroups = skillGroups
    .filter((entry) => group === "all" || entry.id === group)
    .map((entry) => ({
      ...entry,
      items: needle
        ? entry.items.filter((item) => item.toLowerCase().includes(needle))
        : entry.items,
    }))
    .filter((entry) => entry.items.length > 0);

  const matchCount = visibleGroups.reduce((sum, entry) => sum + entry.items.length, 0);
  const catalogCount = skillGroups.reduce((sum, entry) => sum + entry.items.length, 0);

  return (
    <section id="instrumentation" className="relative overflow-hidden">
      <div aria-hidden className="instrumentation-lattice pointer-events-none absolute inset-0">
        <Image
          src="/images/signal-lattice.png"
          alt=""
          fill
          className="object-cover opacity-[0.18] md:opacity-[0.22]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/88 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink/70" />
      </div>

      <div className="relative px-[var(--frame)] py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="kicker text-signal">Plate 03 · Instrumentation</p>
            <h2 className="display-title mt-3 max-w-[14ch] text-5xl md:text-7xl">
              Legend of the working stack
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-fog md:text-base">
              {instrumentationIntro}
            </p>
          </div>

          <p className="font-mono text-[10px] tracking-[0.22em] text-copper uppercase">
            {matchCount}
            <span className="text-fog"> / {catalogCount} readings</span>
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-y border-rule py-5 md:flex-row md:items-end md:justify-between md:gap-8">
          <div role="group" aria-label="Legend keys">
            <p className="kicker mb-3 text-fog">Key</p>
            <div className="flex flex-wrap gap-x-1 gap-y-2">
              <FilterButton
                label="All"
                active={group === "all"}
                onClick={() => setGroup("all")}
              />
              {skillGroups.map((entry) => (
                <FilterButton
                  key={entry.id}
                  label={entry.legend}
                  hint={entry.title}
                  active={group === entry.id}
                  onClick={() => setGroup(entry.id)}
                />
              ))}
            </div>
          </div>

          <div className="w-full max-w-sm">
            <label htmlFor={searchId} className="kicker mb-3 block text-fog">
              Survey
            </label>
            <div className="flex items-baseline gap-3 border-b border-rule-strong pb-2">
              <span aria-hidden className="font-mono text-[10px] tracking-[0.2em] text-copper">
                Q
              </span>
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the stack"
                autoComplete="off"
                className="w-full bg-transparent font-mono text-sm tracking-[0.04em] text-paper outline-none placeholder:text-fog-2"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="shrink-0 font-mono text-[10px] tracking-[0.18em] text-fog uppercase hover:text-paper"
                >
                  Clear
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {visibleGroups.length === 0 ? (
          <p className="mt-14 max-w-md font-mono text-sm tracking-[0.04em] text-fog">
            No instruments match this survey. Clear the filter or try another key.
          </p>
        ) : (
          <ol className="mt-14 grid gap-0 lg:max-w-[72%]">
            {visibleGroups.map((entry) => (
              <li
                key={entry.id}
                className="legend-band grid gap-4 border-t border-rule py-8 md:grid-cols-[6.5rem_1fr] md:gap-10"
              >
                <div>
                  <p className="font-display text-5xl leading-none text-copper italic md:text-6xl">
                    {entry.legend}
                  </p>
                  <p className="kicker mt-3 text-fog">{entry.title}</p>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.18em] text-fog uppercase">
                    {String(entry.items.length).padStart(2, "0")} marks
                  </p>
                </div>

                <ul className="flex flex-wrap content-start gap-x-1 gap-y-3 self-center">
                  {entry.items.map((item, index) => (
                    <li
                      key={item}
                      className="font-mono text-[12px] tracking-[0.06em] text-paper/80 md:text-[13px]"
                    >
                      <span className={needle && item.toLowerCase().includes(needle) ? "text-signal" : undefined}>
                        {item}
                      </span>
                      {index < entry.items.length - 1 ? (
                        <span className="mx-3 text-copper/60">/</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        )}

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-5 lg:max-w-[72%]">
          {skillGroups.map((entry) => (
            <p key={entry.id} className="font-mono text-[10px] tracking-[0.16em] text-fog uppercase">
              <span className="text-copper">{entry.legend}</span>
              <span className="mx-2 text-rule-strong">·</span>
              {entry.title}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterButton({
  label,
  hint,
  active,
  onClick,
}: {
  label: string;
  hint?: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={hint}
      aria-pressed={active}
      onClick={onClick}
      className={`min-w-11 border-b px-3 py-2 font-mono text-[11px] tracking-[0.22em] uppercase transition-colors ${
        active
          ? "border-copper text-paper"
          : "border-transparent text-fog hover:border-rule-strong hover:text-paper"
      }`}
    >
      {label}
    </button>
  );
}
