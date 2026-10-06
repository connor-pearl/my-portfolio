"use client";

import { useEffect, useState } from "react";
import { plates } from "@/content/site";

export type PlateId = (typeof plates)[number]["id"];

export function useActivePlate(enabled = true) {
  const [active, setActive] = useState<PlateId>(plates[0].id);

  useEffect(() => {
    if (!enabled) return;

    const fromHash = window.location.hash.replace("#", "") as PlateId;
    if (plates.some((plate) => plate.id === fromHash)) {
      setActive(fromHash);
    }

    const nodes = plates
      .map((plate) => document.getElementById(plate.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const nextId = visible?.target.id as PlateId | undefined;
        if (!nextId) return;
        setActive((current) => (current === nextId ? current : nextId));
        if (window.location.hash !== `#${nextId}`) {
          history.replaceState(null, "", `#${nextId}`);
        }
      },
      { rootMargin: "-22% 0px -48% 0px", threshold: [0.12, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [enabled]);

  return { active, setActive };
}
