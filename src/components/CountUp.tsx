"use client";

import { useEffect, useRef } from "react";

// Counts from 0 to `to` the first time it scrolls into view. Renders the final number on the server.
export default function CountUp({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.textContent = `0${suffix}`;
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1600, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(eased * to)}${suffix}`;
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, suffix]);

  return (
    <span ref={ref} className={className}>
      {to}
      {suffix}
    </span>
  );
}
