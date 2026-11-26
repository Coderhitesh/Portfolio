import Reveal from "./Reveal";
import Link from "next/link";
import { profile, legalLinks } from "./data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24 sm:px-6">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-mist bg-card">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 sm:p-12">
              <p className="route-chip mb-4">
                <span className="verb !bg-coral">POST</span> /contact
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Have a product that needs to ship?
              </h2>
              <p className="mt-5 max-w-lg text-lg text-moss">
                I&apos;m open to full-time roles and serious freelance projects — especially LMS, e-commerce, booking and real-time systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-xl bg-ink px-6 py-3.5 font-medium text-paper transition hover:-translate-y-0.5 hover:bg-nodeDeep hover:shadow-lift"
                >
                  Send an email
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="rounded-xl border border-ink/15 bg-paper px-6 py-3.5 font-medium transition hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-lift"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
            <div className="border-t border-mist bg-ink p-8 font-mono text-sm text-white/70 sm:p-12 lg:border-l lg:border-t-0">
              <p className="text-white/40">// request body</p>
              <p className="mt-4">{"{"}</p>
              <p className="pl-4">
                <span className="text-[#7FD8A8]">&quot;to&quot;</span>:{" "}
                <span className="text-[#E8E3B0]">&quot;{profile.email}&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#7FD8A8]">&quot;subject&quot;</span>:{" "}
                <span className="text-[#E8E3B0]">&quot;Let&apos;s build something&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#7FD8A8]">&quot;response_time&quot;</span>:{" "}
                <span className="text-[#E8E3B0]">&quot;within 24 hours&quot;</span>
              </p>
              <p>{"}"}</p>
              <div className="mt-8 space-y-2 border-t border-white/10 pt-6">
                <a href={profile.github} target="_blank" rel="noreferrer" className="block transition hover:text-node">
                  → github.com/Coderhitesh
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block transition hover:text-node">
                  → linkedin.com/in/coderhitesh
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-mist py-8">
      <div className="mx-auto max-w-6xl px-4 font-mono text-xs text-moss sm:px-6">
        <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-start">
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </Link>
          ))}
          <Link href="/pay" className="text-node transition hover:text-nodeDeep">
            Pay online
          </Link>
        </nav>
        <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {new Date().getFullYear()} Hitesh Yadav · Delhi, India</p>
          <p>
            payments by Razorpay · status: <span className="text-node">200 OK</span> · built with Next.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
