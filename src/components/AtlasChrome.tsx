"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { plates } from "@/content/site";
import { useActivePlate, type PlateId } from "@/hooks/useActivePlate";

function RegistrationMarks() {
  return (
    <div aria-hidden className="atlas-marks pointer-events-none fixed inset-0 z-20 hidden lg:block">
      <span className="absolute top-[var(--frame)] left-[var(--frame)] h-3.5 w-3.5 border-t border-l border-copper/80" />
      <span className="absolute top-[var(--frame)] right-[var(--frame)] h-3.5 w-3.5 border-t border-r border-copper/70" />
      <span className="absolute bottom-[var(--frame)] left-[var(--frame)] h-3.5 w-3.5 border-b border-l border-copper/80" />
      <span className="absolute right-[var(--frame)] bottom-[var(--frame)] h-3.5 w-3.5 border-b border-r border-copper/70" />
      <span className="absolute top-[var(--frame)] left-1/2 h-1.5 w-px -translate-x-1/2 bg-copper/45" />
      <span className="absolute bottom-[var(--frame)] left-1/2 h-1.5 w-px -translate-x-1/2 bg-copper/45" />
    </div>
  );
}

export function AtlasChrome() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const { active, setActive } = useActivePlate(onHome);
  const stripRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!onHome) return;
    const current = stripRef.current?.querySelector<HTMLElement>(`[data-plate="${active}"]`);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    current?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: reduced ? "auto" : "smooth",
    });
  }, [active, onHome]);

  const plateHref = (id: PlateId) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <a href={plateHref("cover")} className="skip-link">
        Skip to cover
      </a>
      <RegistrationMarks />

      <nav
        ref={stripRef}
        aria-label="Atlas plates"
        className="sticky top-0 z-30 flex h-[var(--index-bar)] items-center border-b border-rule bg-ink/85 px-[var(--frame)] backdrop-blur-md lg:hidden"
      >
        <p className="kicker mr-4 hidden shrink-0 text-copper sm:block">Atlas</p>
        <ol className="atlas-strip flex min-w-0 flex-1 gap-1 overflow-x-auto">
          {plates.map((plate) => {
            const isActive = onHome && active === plate.id;
            return (
              <li key={plate.id} className="shrink-0">
                <a
                  href={plateHref(plate.id)}
                  data-plate={plate.id}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    if (onHome) setActive(plate.id);
                  }}
                  className={`inline-flex items-center gap-2 px-2.5 py-1.5 font-mono text-[10px] tracking-[0.18em] uppercase no-underline transition-colors ${
                    isActive ? "bg-paper/8 text-paper" : "text-fog hover:text-paper"
                  }`}
                >
                  <span className={isActive ? "text-copper" : ""}>{plate.index}</span>
                  {plate.label}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <nav
        aria-label="Atlas plates"
        className="pointer-events-none fixed top-1/2 right-[var(--frame)] z-30 hidden w-[9.5rem] -translate-y-1/2 lg:block"
      >
        <div className="pointer-events-auto border-l border-rule pl-4">
          <p className="kicker mb-4 text-copper">{onHome ? "Index" : "Atlas"}</p>
          <ol className="flex flex-col gap-2.5">
            {plates.map((plate) => {
              const isActive = onHome && active === plate.id;
              return (
                <li key={plate.id}>
                  <a
                    href={plateHref(plate.id)}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => {
                      if (onHome) setActive(plate.id);
                    }}
                    className={`group flex items-baseline gap-3 no-underline transition-colors ${
                      isActive ? "text-paper" : "text-fog hover:text-paper"
                    }`}
                  >
                    <span className="font-mono text-[10px] tracking-[0.22em] text-copper">
                      {plate.index}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase">
                      {plate.label}
                    </span>
                    <span
                      className={`ml-auto h-px w-5 transition-all ${
                        isActive ? "bg-copper" : "bg-transparent group-hover:bg-rule-strong"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
