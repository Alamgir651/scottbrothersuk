// Rotating "15-year guarantee" stamp, the site's one ambient motion
export default function Seal({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`} role="img" aria-label="Backed by our 15-year guarantee">
      <svg viewBox="0 0 200 200" className="seal-ring absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="99" fill="var(--color-amber)" />
        <text className="wide" fontSize="15.5" fontWeight="700" letterSpacing="2.4" fill="var(--color-night)">
          <textPath href="#seal-circle">PRECISION ★ INTEGRITY ★ 15-YEAR GUARANTEE ★</textPath>
        </text>
      </svg>
      <div className="absolute inset-[24%] flex flex-col items-center justify-center rounded-full bg-night text-center text-white">
        <span className="display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-none">15</span>
        <span className="mt-1 text-[0.6rem] font-semibold leading-tight sm:text-xs">
          year
          <br />
          guarantee
        </span>
      </div>
    </div>
  );
}
