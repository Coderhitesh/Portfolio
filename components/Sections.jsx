import Reveal from "./Reveal";
import { stats, stack, marqueeItems, education, certification } from "./data";

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-mist bg-card py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm text-moss">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            {item} <span className="text-node">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24 sm:px-6">
      <Reveal>
        <p className="route-chip mb-4">
          <span className="verb">GET</span> /about <span className="text-node">→ 200</span>
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          The numbers behind the work
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-mist bg-mist sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={Math.min(i, 3)} className="bg-card p-8 transition hover:bg-paper">
            <p className="font-display text-5xl font-bold text-node">{s.value}</p>
            <p className="mt-3 text-sm leading-relaxed text-moss">{s.label}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-mist bg-card p-7">
          <p className="font-mono text-xs uppercase tracking-widest text-moss">Education</p>
          <p className="mt-3 font-display text-lg font-semibold">{education.degree}</p>
          <p className="mt-1 text-sm text-moss">{education.school}</p>
          <p className="mt-1 font-mono text-xs text-moss">{education.period}</p>
        </div>
        <div className="rounded-2xl border border-mist bg-card p-7">
          <p className="font-mono text-xs uppercase tracking-widest text-moss">Certification</p>
          <p className="mt-3 font-display text-lg font-semibold">{certification}</p>
          <p className="mt-1 text-sm text-moss">
            Hands-on training across the full MERN lifecycle — from schema design to deployment.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-28 border-y border-mist bg-card py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="route-chip mb-4">
            <span className="verb">GET</span> /stack <span className="text-node">→ 200</span>
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Full stack, layer by layer
          </h2>
          <p className="mt-4 max-w-2xl text-moss">
            Every project travels the same road — browser to server to database and back. I work at every stop on that route.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {stack.map((group, i) => (
            <Reveal key={group.layer}>
              <div className="group grid items-start gap-4 rounded-2xl border border-mist bg-paper p-6 transition hover:border-node/40 hover:shadow-lift sm:grid-cols-[200px_1fr] sm:p-7">
                <div>
                  <p className="font-mono text-xs text-moss">layer {i + 1}/5</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">{group.layer}</h3>
                  <p className="mt-1 text-sm text-moss">{group.note}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-card px-3.5 py-2 font-mono text-[13px] text-ink shadow-chip transition group-hover:shadow-[inset_0_0_0_1px_rgba(23,138,91,0.35)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
