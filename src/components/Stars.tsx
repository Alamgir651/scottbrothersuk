export default function Stars({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`tracking-[0.18em] text-amber ${className}`}>
      ★★★★★
    </span>
  );
}
