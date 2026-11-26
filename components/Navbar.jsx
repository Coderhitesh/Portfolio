"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "./data";

const links = [
  { href: "/#about", label: "/about" },
  { href: "/#stack", label: "/stack" },
  { href: "/#experience", label: "/experience" },
  { href: "/#projects", label: "/projects" },
  { href: "/#services", label: "/services" },
  { href: "/#contact", label: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-mist bg-paper/85 shadow-lift backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono text-sm font-semibold text-paper">
            HY
          </span>
          <span className="hidden font-mono text-xs text-moss xl:block">
            ~/hitesh-yadav <span className="text-node">●</span> live
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 font-mono text-[13px] text-moss transition hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="ml-2 rounded-lg border border-ink/15 px-4 py-2 font-mono text-[13px] font-medium transition hover:border-ink/30"
          >
            POST /hire-me
          </a>
          <Link
            href="/pay"
            className="rounded-lg bg-node px-4 py-2 font-mono text-[13px] font-medium text-white transition hover:bg-nodeDeep"
          >
            Pay now
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 hover:bg-ink/5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-h-[calc(100dvh-6rem)] max-w-6xl overflow-y-auto rounded-2xl border border-mist bg-paper p-3 shadow-lift lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 font-mono text-sm text-moss hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/pay"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-node px-3 py-2.5 text-center font-mono text-sm font-medium text-white"
          >
            Pay now
          </Link>
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-ink px-3 py-2.5 text-center font-mono text-sm font-medium text-paper"
          >
            POST /hire-me
          </a>
        </div>
      )}
    </header>
  );
}
