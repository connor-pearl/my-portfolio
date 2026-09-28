"use client";

import { metrics, signalIntro } from "@/content/site";
import { useCountUp, useInViewOnce } from "@/hooks/useCountUp";

type Metric = (typeof metrics)[number];

function formatReading(value: number, format: Metric["format"]) {
  if (format === "pad2") return String(value).padStart(2, "0");
  return String(value);
}

function MetricCell({
  metric,
  active,
  delay,
}: {
  metric: Metric;
  active: boolean;
  delay: number;
}) {
  const value = useCountUp(metric.target, active, 1100, delay);

  return (
    <li className="signal-cell relative flex flex-col justify-between bg-paper px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex items-baseline justify-between gap-3">
        <p className="kicker text-copper">{metric.index}</p>
        <span aria-hidden className="h-px flex-1 bg-ink-rule" />
      </div>
      <p className="display-title mt-6 text-[clamp(3rem,7vw,4.8rem)] leading-none text-ink">
        <span className="signal-value">{formatReading(value, metric.format)}</span>
        <span className="text-copper">{metric.suffix}</span>
      </p>
      <p className="mt-5 max-w-[16rem] text-sm leading-snug text-ink-2">{metric.label}</p>
      <p className="kicker mt-4 text-fog-2">{metric.note}</p>
    </li>
  );
}

export function SignalPlate() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <section id="signal" className="relative bg-paper text-ink">
      <div className="px-[var(--frame)] py-16 md:py-24">
        <div
          ref={ref}
          className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16"
        >
          <div className="max-w-xl">
            <p className="kicker text-fog-2">Plate 01 · Signal</p>
            <h2 className="display-title mt-3 text-5xl text-ink md:text-7xl">
              Field readings
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-fog-2 md:text-base">
            {signalIntro}
          </p>
        </div>

        <ul className="signal-grid grid gap-px border border-ink-rule bg-ink-rule">
          {metrics.map((metric, index) => (
            <MetricCell
              key={metric.id}
              metric={metric}
              active={inView}
              delay={index * 90}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
