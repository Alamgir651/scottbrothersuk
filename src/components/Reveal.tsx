"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type Kind = "up" | "clip" | "left" | "right" | "scale";

// One shared observer for every Reveal on the page
let observer: IntersectionObserver | null = null;
const onEnter = new WeakMap<Element, () => void>();

function watch(el: Element, cb: () => void) {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        onEnter.get(e.target)?.();
        onEnter.delete(e.target);
        observer?.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  onEnter.set(el, cb);
  observer.observe(el);
  return () => {
    onEnter.delete(el);
    observer?.unobserve(el);
  };
}

/**
 * Animates its element in when it scrolls into view.
 * Content starts hidden only when JS is on (html.js, set before paint), so there is no flash;
 * elements on screen when the page opens animate straight away, the rest as they scroll in.
 */
export default function Reveal({
  as = "div",
  kind = "up",
  delay = 0,
  className,
  style,
  children,
  ...rest
}: {
  as?: ElementType;
  kind?: Kind;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Mark as handled by JS (the CSS fallback that force-shows content skips armed elements)
    el.classList.add("rv-armed");
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      // Already on screen (page just opened): play straight away, on the next frame so the transition runs
      const id = requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("is-in")));
      return () => cancelAnimationFrame(id);
    }
    return watch(el, () => el.classList.add("is-in"));
  }, []);

  const Tag = as;
  return (
    <Tag {...rest} ref={ref} data-reveal={kind} className={className} style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
