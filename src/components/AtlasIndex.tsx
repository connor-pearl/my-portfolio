"use client";

import { useEffect, useState } from "react";
import { plates } from "@/content/site";

type PlateId = (typeof plates)[number]["id"];

export function AtlasIndex() {
  const [active, setActive] = useState<PlateId>(plates[0].id);

  useEffect(() => {
    const nodes = plates
      .map((plate) => document.getElementById(plate.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const nextId = visible?.target.id as PlateId | undefined;
        if (nextId) setActive(nextId);
      },
      { rootMargin: "-28% 0px -48% 0px", threshold: [0.12, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Atlas index"
      className="pointer-events-none fixed top-1/2 right-[max(1rem,calc(var(--frame)-0.4rem))] z-30 hidden -translate-y-1/2 xl:block"
    >
      <ol className="pointer-events-auto flex flex-col gap-3 border-l border-rule pl-4">
        {plates.map((plate) => {
          const isActive = active === plate.id;
          return (
            <li key={plate.id}>
              <a
                href={`#${plate.id}`}
                className={`group flex items-baseline gap-3 no-underline transition-colors ${
                  isActive ? "text-paper" : "text-fog hover:text-paper"
                }`}
              >
                <span className="font-mono text-[10px] tracking-[0.22em]">{plate.index}</span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase">
                  {plate.label}
                </span>
                <span
                  className={`h-px w-6 transition-all ${
                    isActive ? "bg-copper" : "bg-transparent group-hover:bg-rule-strong"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
