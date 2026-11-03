"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

// Photo grid that opens a full-screen viewer on click
export default function Gallery({ images, label }: { images: string[]; label: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  // Layout varies with count so small sets don't look sparse
  const cols = images.length === 1 ? "" : images.length === 2 || images.length === 4 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <ul className={`grid gap-2 sm:gap-3 md:gap-4 ${cols}`}>
        {images.map((src, i) => (
          <Reveal as="li" key={src} kind="clip" delay={(i % 3) * 120} className={images.length > 4 && i % 7 === 0 ? "sm:col-span-2 lg:row-span-2" : ""}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block h-full min-h-48 w-full overflow-hidden rounded-sm bg-limewash sm:min-h-56"
            >
              <span className="sr-only">
                Open photo {i + 1} of {images.length} from {label}
              </span>
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className={`block ${images.length === 1 ? "aspect-[16/9]" : "aspect-[4/3]"}`} />
            </button>
          </Reveal>
        ))}
      </ul>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label={`${label} photos`} className="fixed inset-0 z-50 flex items-center justify-center bg-night/95 p-4">
          <button type="button" onClick={close} className="absolute inset-0 cursor-zoom-out" aria-label="Close photo viewer" />
          <div className="pointer-events-none relative h-[80vh] w-full max-w-6xl">
            <Image src={images[open]} alt="" fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {open + 1} / {images.length}
          </p>
          {images.length > 1 && (
            <>
              <button type="button" onClick={() => step(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white hover:bg-white/20 md:left-8">
                <span className="sr-only">Previous photo</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button type="button" onClick={() => step(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white hover:bg-white/20 md:right-8">
                <span className="sr-only">Next photo</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}
          <button type="button" onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" autoFocus>
            <span className="sr-only">Close</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
      )}
    </>
  );
}
