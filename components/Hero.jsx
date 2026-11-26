"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "./data";

const jsonLines = [
  { indent: 0, text: "{", plain: true },
  { indent: 1, key: '"name"', value: '"Hitesh Yadav"', comma: true },
  { indent: 1, key: '"role"', value: '"Full Stack Developer"', comma: true },
  { indent: 1, key: '"stack"', value: '["MongoDB", "Express", "React", "Node"]', comma: true },
  { indent: 1, key: '"experience"', value: '"3+ years"', comma: true },
  { indent: 1, key: '"specialties"', value: '["LMS", "E-commerce", "Booking", "Real-time"]', comma: true },
  { indent: 1, key: '"location"', value: '"Delhi, India"', comma: true },
  { indent: 1, key: '"available_for_work"', value: "true", boolean: true },
  { indent: 0, text: "}", plain: true },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [status, setStatus] = useState("pending");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisibleLines(jsonLines.length);
      setStatus("ok");
      return;
    }

    const t1 = setTimeout(() => setStatus("ok"), 600);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= jsonLines.length) clearInterval(interval);
    }, 180);
    return () => {
      clearTimeout(t1);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* left — headline */}
        <div>
          <p className="route-chip mb-6">
            <span className="verb">GET</span> /api/developer
            <span className={`ml-1 ${status === "ok" ? "text-node" : "text-moss"}`}>
              {status === "ok" ? "→ 200 OK" : "→ ..."}
            </span>
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            APIs that hold.
            <br />
            <span className="text-node">Payments that clear.</span>
            <br />
            Apps that scale.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-moss">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-ink px-6 py-3.5 font-medium text-paper transition hover:-translate-y-0.5 hover:bg-nodeDeep hover:shadow-lift"
            >
              See the work
            </a>
            <a
              href="#services"
              className="rounded-xl bg-node px-6 py-3.5 font-medium text-white transition hover:-translate-y-0.5 hover:bg-nodeDeep hover:shadow-lift"
            >
              Services &amp; pricing
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl border border-ink/15 bg-card px-6 py-3.5 font-medium transition hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-lift"
            >
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 font-mono text-sm text-moss">
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-ink">
              github ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-ink">
              linkedin ↗
            </a>
            <span className="hidden sm:inline">· {profile.location}</span>
          </div>
        </div>

        {/* right — the JSON response card */}
        <div className="animate-floaty">
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ink text-paper shadow-lift">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-coral/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-node" />
              </div>
              <span className="font-mono text-[11px] text-white/50">
                response.json · {status === "ok" ? "200" : "···"}
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
              {jsonLines.slice(0, visibleLines).map((line, idx) => (
                <div key={idx}>
                  {"  ".repeat(line.indent)}
                  {line.plain ? (
                    <span className="text-white/60">{line.text}</span>
                  ) : (
                    <>
                      <span className="text-[#7FD8A8]">{line.key}</span>
                      <span className="text-white/60">: </span>
                      <span className={line.boolean ? "text-coral" : "text-[#E8E3B0]"}>
                        {line.value}
                      </span>
                      {line.comma && <span className="text-white/60">,</span>}
                    </>
                  )}
                </div>
              ))}
              {visibleLines < jsonLines.length && (
                <span className="inline-block h-4 w-2 animate-blink bg-node align-middle" />
              )}
            </pre>
          </div>
          <p className="mt-3 text-center font-mono text-xs text-moss">
            latency: 38ms · cached: false · uptime: 99.9%
          </p>
        </div>
      </div>
    </section>
  );
}
