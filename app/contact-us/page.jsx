import PageShell from "@/components/PageShell";
import Link from "next/link";
import { profile, business } from "@/components/data";

export const metadata = {
  title: "Contact Us — Hitesh Yadav",
  description: "Get in touch with Hitesh Yadav for web development projects, support and payment queries.",
};

const cards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone / WhatsApp", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "Location", value: business.address },
  { label: "Working hours", value: business.hours },
];

export default function ContactPage() {
  return (
    <PageShell>
      <p className="route-chip mb-4">
        <span className="verb !bg-coral">POST</span> /contact-us
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Contact us</h1>
      <p className="mt-5 text-lg leading-relaxed text-moss">
        Project enquiry, payment query or refund request — write to me and I will reply {business.responseTime}.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <div key={c.label} className="rounded-2xl border border-mist bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-moss">{c.label}</p>
            {c.href ? (
              <a href={c.href} className="mt-2 block break-words font-display text-lg font-semibold hover:text-node">
                {c.value}
              </a>
            ) : (
              <p className="mt-2 font-display text-lg font-semibold">{c.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/pay" className="rounded-xl bg-ink px-6 py-3.5 font-medium text-paper transition hover:bg-nodeDeep">
          Pay online
        </Link>
        <Link href="/#services" className="rounded-xl border border-ink/15 bg-card px-6 py-3.5 font-medium transition hover:border-ink/30">
          View services &amp; pricing
        </Link>
      </div>
    </PageShell>
  );
}
