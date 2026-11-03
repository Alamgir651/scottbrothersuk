"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Social from "./Social";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isCurrent = (href: string) => pathname === href;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-transparent shadow-[0_8px_30px_-18px_rgb(13_26_49/0.45)]" : "border-ink/10"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 transition-[height] duration-300 md:px-10 ${
          scrolled ? "h-16" : "h-[4.5rem] md:h-20"
        }`}
      >
        <Link href="/" aria-label="Scott Brothers UK, home" className="shrink-0">
          <Image
            src="/img/logo.png"
            alt="Scott Brothers UK Ltd"
            width={600}
            height={210}
            className={`w-auto transition-[height] duration-300 ${scrolled ? "h-10" : "h-11 md:h-12"}`}
            priority
          />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7 text-[0.95rem] font-medium text-ink/80">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="py-2 transition-colors hover:text-blue aria-[current=page]:text-blue aria-[current=page]:underline aria-[current=page]:decoration-amber aria-[current=page]:decoration-[3px] aria-[current=page]:underline-offset-8"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <Social networks={["facebook", "instagram"]} className="hidden text-blue md:flex" />
          <a
            href={site.phoneHref}
            className="wide hidden rounded-full bg-blue px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-deep sm:inline-block"
          >
            {site.phone}
          </a>
          {/* Small screens: one-tap call button */}
          <a href={site.phoneHref} className="flex h-11 w-11 items-center justify-center rounded-full bg-blue text-white sm:hidden">
            <span className="sr-only">Call {site.phone}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" />
            </svg>
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="menu-in max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-ink/10 bg-white shadow-[0_20px_40px_-24px_rgb(13_26_49/0.5)] xl:hidden"
        >
          <ul className="mx-auto max-w-[90rem] px-5 py-3 md:px-10">
            {nav.map((item, i) => (
              <li key={item.label} className="menu-in border-b border-ink/5" style={{ animationDelay: `${60 + i * 40}ms` }}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="display block py-3 text-2xl text-ink aria-[current=page]:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="menu-in flex items-center justify-between gap-4 py-5" style={{ animationDelay: `${60 + nav.length * 40}ms` }}>
              <a href={site.phoneHref} className="wide rounded-full bg-blue px-5 py-3 font-bold text-white">
                {site.phone}
              </a>
              <Social networks={["facebook", "instagram"]} className="text-blue" iconClassName="h-6 w-6" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
