import Reveal from "./Reveal";
import { experience, projects } from "./data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24 sm:px-6">
      <Reveal>
        <p className="route-chip mb-4">
          <span className="verb">GET</span> /experience <span className="text-node">→ 200</span>
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Where I&apos;ve shipped
        </h2>
      </Reveal>

      <div className="mt-12 space-y-0">
        {experience.map((job, i) => (
          <Reveal key={job.company}>
            <article className="relative grid gap-4 border-l-2 border-mist py-8 pl-8 sm:grid-cols-[220px_1fr] sm:gap-8 lg:grid-cols-[280px_1fr]">
              <span
                className={`absolute -left-[7px] top-10 h-3 w-3 rounded-full border-2 border-paper ${
                  job.current ? "bg-node ring-4 ring-node/20" : "bg-moss"
                }`}
              />
              <div>
                <p className="font-mono text-xs text-moss">{job.period}</p>
                <h3 className="mt-1.5 font-display text-xl font-semibold">{job.company}</h3>
                <p className="mt-0.5 text-sm text-moss">{job.role}</p>
                {job.current && (
                  <span className="mt-2 inline-block rounded-md bg-node/10 px-2 py-1 font-mono text-[11px] font-medium text-nodeDeep">
                    ● current
                  </span>
                )}
              </div>
              <ul className="space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-node" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 border-y border-mist bg-ink py-24 text-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="route-chip mb-4">
            <span className="verb !bg-node !text-ink">GET</span>
            <span className="text-white/60">/projects</span>
            <span className="text-node">→ 200 · 5 results</span>
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Selected work, live in production
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            Real platforms with real users and real money flowing through them — every one of these is online right now.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} className={i === 0 ? "md:col-span-2" : ""}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-node/50 hover:bg-white/[0.07] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-white/40">{p.id} · {p.highlight}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold transition group-hover:text-node sm:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/55">{p.tagline}</p>
                  </div>
                  <span className="rounded-full border border-white/15 p-2.5 transition group-hover:rotate-45 group-hover:border-node group-hover:text-node">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-white/70">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span key={tech} className="rounded-md bg-white/[0.07] px-2.5 py-1 font-mono text-xs text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
