import { plates } from "@/content/site";

export function MobileIndex() {
  return (
    <nav
      aria-label="Atlas index"
      className="sticky top-0 z-30 border-b border-rule bg-ink/80 px-[var(--frame)] py-3 backdrop-blur-md xl:hidden"
    >
      <ol className="flex gap-5 overflow-x-auto">
        {plates.map((plate) => (
          <li key={plate.id} className="shrink-0">
            <a
              href={`#${plate.id}`}
              className="font-mono text-[10px] tracking-[0.2em] text-fog uppercase no-underline hover:text-paper"
            >
              {plate.index} {plate.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
