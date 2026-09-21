export function RegistrationMarks() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-20 hidden md:block">
      <span className="absolute top-[var(--frame)] left-[var(--frame)] h-4 w-4 border-t border-l border-copper/80" />
      <span className="absolute top-[var(--frame)] right-[var(--frame)] h-4 w-4 border-t border-r border-copper/80" />
      <span className="absolute bottom-[var(--frame)] left-[var(--frame)] h-4 w-4 border-b border-l border-copper/80" />
      <span className="absolute right-[var(--frame)] bottom-[var(--frame)] h-4 w-4 border-b border-r border-copper/80" />
      <span className="absolute top-[var(--frame)] left-1/2 h-2 w-px -translate-x-1/2 bg-copper/50" />
      <span className="absolute bottom-[var(--frame)] left-1/2 h-2 w-px -translate-x-1/2 bg-copper/50" />
    </div>
  );
}
