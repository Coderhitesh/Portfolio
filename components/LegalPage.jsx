import PageShell from "./PageShell";

export default function LegalPage({ route, title, updated, intro, sections }) {
  return (
    <PageShell>
      <p className="route-chip mb-4">
        <span className="verb">GET</span> {route} <span className="text-node">→ 200</span>
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-3 font-mono text-xs text-moss">Last updated: {updated}</p>
      {intro && <p className="mt-8 text-lg leading-relaxed text-moss">{intro}</p>}

      <div className="mt-6">
        {sections.map((s, i) => (
          <section key={s.h} className="mt-10">
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              <span className="mr-2 font-mono text-sm text-node">{String(i + 1).padStart(2, "0")}</span>
              {s.h}
            </h2>
            {s.p?.map((para) => (
              <p key={para} className="mt-3 leading-relaxed text-ink/80">{para}</p>
            ))}
            {s.list && (
              <ul className="mt-3 space-y-2">
                {s.list.map((li) => (
                  <li key={li} className="flex gap-3 leading-relaxed text-ink/80">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-node" />
                    {li}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </PageShell>
  );
}
