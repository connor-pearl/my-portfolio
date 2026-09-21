export function ContourField({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      className={`h-full w-full ${className}`}
      fill="none"
    >
      <path
        className="dash-draw"
        d="M40 620 C 180 560, 240 480, 360 500 S 540 640, 700 580 980 420, 1160 460"
        stroke="#c56a3a"
        strokeWidth="1.1"
        opacity="0.7"
      />
      <path
        d="M20 540 C 160 500, 260 420, 400 440 S 620 560, 780 500 1020 360, 1180 400"
        stroke="#8ee0c6"
        strokeWidth="0.8"
        opacity="0.45"
      />
      <path
        d="M0 430 C 140 390, 280 340, 430 370 S 680 490, 840 430 1080 280, 1200 320"
        stroke="#c56a3a"
        strokeWidth="0.7"
        opacity="0.4"
      />
      <path
        d="M80 300 C 220 250, 360 280, 500 240 S 760 140, 920 190 1120 260, 1200 210"
        stroke="#ece7db"
        strokeWidth="0.6"
        opacity="0.22"
      />
      <circle className="pulse-node" cx="360" cy="500" r="3.5" fill="#8ee0c6" />
      <circle className="pulse-node" cx="700" cy="580" r="2.5" fill="#c56a3a" />
      <circle className="pulse-node" cx="980" cy="420" r="3" fill="#ece7db" />
    </svg>
  );
}
