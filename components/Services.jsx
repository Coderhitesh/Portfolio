import Link from "next/link";
import Reveal from "./Reveal";
import { services, profile, formatINR, amountFor } from "./data";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24 sm:px-6">
      <Reveal>
        <p className="route-chip mb-4">
          <span className="verb">GET</span> /services <span className="text-node">→ 200 · {services.length} plans</span>
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Services I offer — and what they cost
        </h2>
        <p className="mt-4 max-w-2xl text-moss">
          Clear starting prices in INR, no surprises. Pay a booking advance online in under a minute, or message me first
          for a custom quote.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const now = amountFor(s);
          return (
            <Reveal key={s.id} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-lift ${
                  s.popular ? "border-node/50 ring-2 ring-node/15" : "border-mist"
                }`}
              >
                {s.popular && (
                  <span className="absolute right-5 top-5 rounded-md bg-node px-2 py-1 font-mono text-[11px] font-medium text-white">
                    most booked
                  </span>
                )}
                <h3 className="pr-24 font-display text-xl font-semibold leading-snug">{s.title}</h3>
                <p className="mt-1.5 text-sm text-moss">{s.tagline}</p>

                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-mono text-xs text-moss">from</span>
                  <span className="font-display text-4xl font-bold">{formatINR(s.price)}</span>
                  <span className="font-mono text-xs text-moss">{s.unit === "per month" ? "/ month" : "one-time"}</span>
                </p>
                <p className="mt-1 font-mono text-xs text-moss">delivery: {s.delivery}</p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-node" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-2.5">
                  <Link
                    href={`/pay?service=${s.id}`}
                    className="block rounded-xl bg-ink px-5 py-3.5 text-center font-medium text-paper transition hover:bg-nodeDeep"
                  >
                    {s.advancePercent < 100 ? `Pay ${s.advancePercent}% advance · ${formatINR(now)}` : `Pay ${formatINR(now)}`}
                  </Link>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent("Enquiry: " + s.title)}`}
                    className="block rounded-xl border border-ink/15 px-5 py-3 text-center text-sm font-medium transition hover:border-ink/30"
                  >
                    Discuss first
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-6">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-mist bg-ink p-7 text-paper sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-display text-xl font-semibold">Need something else, or already have a quote?</p>
            <p className="mt-1 text-sm text-white/60">
              Pay any agreed amount securely via Razorpay — UPI, cards, netbanking and wallets. Taxes extra if applicable.
            </p>
          </div>
          <Link
            href="/pay?service=custom"
            className="shrink-0 rounded-xl bg-node px-6 py-3.5 font-medium text-white transition hover:bg-[#1da66f]"
          >
            Pay a custom amount
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
