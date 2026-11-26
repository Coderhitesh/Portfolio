"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { services, payment, profile, formatINR, amountFor } from "./data";

const inputCls =
  "w-full rounded-xl border border-mist bg-paper px-4 py-3 text-[15px] outline-none transition placeholder:text-moss/60 focus:border-node focus:ring-2 focus:ring-node/20";
const labelCls = "mb-1.5 block font-mono text-xs text-moss";

function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export default function PayForm() {
  const params = useSearchParams();
  const preset = params.get("service");
  const startId = preset === "custom" || services.some((s) => s.id === preset) ? preset : services[0].id;

  const [serviceId, setServiceId] = useState(startId);
  const [mode, setMode] = useState("advance");
  const [customAmount, setCustomAmount] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", note: "" });
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [error, setError] = useState("");
  const [receipt, setReceipt] = useState(null);
  const errorRef = useRef(null);

  // on phones the error sits far below the fields — bring it into view
  useEffect(() => {
    if (error) errorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [error]);

  const isCustom = serviceId === "custom";
  const service = isCustom ? null : services.find((s) => s.id === serviceId);
  const canSplit = !isCustom && service.advancePercent < 100;
  const amount = isCustom ? Number(customAmount) || 0 : amountFor(service, mode);
  const title = isCustom ? "Custom amount" : service.title;
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handlePay(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("Please enter a valid email address.");
    if (!/^[0-9+\-\s]{10,15}$/.test(form.phone)) return setError("Please enter a valid phone number.");
    if (isCustom && (amount < payment.minCustom || amount > payment.maxCustom)) {
      return setError(`Enter an amount between ${formatINR(payment.minCustom)} and ${formatINR(payment.maxCustom)}.`);
    }
    if (!agree) return setError("Please accept the Terms and the Refund Policy to continue.");

    setStatus("loading");
    try {
      const loaded = await loadRazorpay();
      if (!loaded) throw new Error("Could not load Razorpay. Check your internet connection and try again.");

      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceId, mode, amount: isCustom ? amount : undefined, ...form }),
      });
      const order = await res.json();
      if (!res.ok) throw new Error(order.error || "Could not start the payment.");

      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: profile.name,
        description: order.description,
        prefill: { name: form.name, email: form.email, contact: form.phone },
        theme: { color: "#178A5B" },
        modal: { ondismiss: () => setStatus("idle") },
        handler: async (response) => {
          try {
            const v = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const data = await v.json();
            if (!v.ok || !data.verified) throw new Error("verify failed");
            setReceipt({ paymentId: response.razorpay_payment_id, amount: order.amount / 100, title: order.description });
            setStatus("success");
          } catch {
            setError(
              `Your payment went through, but we could not confirm it automatically. Please email ${profile.email} with payment ID ${response.razorpay_payment_id}.`
            );
            setStatus("idle");
          }
        },
      });
      rzp.on("payment.failed", (r) => {
        setError(r?.error?.description || "Payment failed. Please try again.");
        setStatus("idle");
      });
      rzp.open();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "success" && receipt) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-mist bg-card p-8 text-center shadow-lift sm:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-node/10 text-node">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="route-chip mt-6 justify-center">
          <span className="verb">POST</span> /pay <span className="text-node">→ 200 OK</span>
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold">Payment successful</h2>
        <p className="mt-3 text-moss">
          Thank you, {form.name.split(" ")[0]}! I received {formatINR(receipt.amount)} for <strong>{receipt.title}</strong>. I&apos;ll
          contact you on {form.email} within 24 hours to get started.
        </p>
        <p className="mt-6 rounded-xl bg-paper px-4 py-3 font-mono text-xs text-moss">payment_id: {receipt.paymentId}</p>
        <Link href="/" className="mt-8 inline-block rounded-xl bg-ink px-6 py-3 font-medium text-paper transition hover:bg-nodeDeep">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handlePay} className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr]" noValidate>
      <div className="space-y-6">
        {/* step 1 */}
        <section className="rounded-2xl border border-mist bg-card p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-moss">1 · What are you paying for?</p>
          <div className="mt-5 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
            {[...services, { id: "custom", title: "Custom amount", tagline: "Pay an agreed quote or invoice" }].map((s) => {
              const active = s.id === serviceId;
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setServiceId(s.id)}
                  className={`rounded-xl border p-4 text-left transition ${
                    active ? "border-node bg-node/5 ring-2 ring-node/20" : "border-mist bg-paper hover:border-ink/30"
                  }`}
                >
                  <span className="block font-display text-[15px] font-semibold">{s.title}</span>
                  <span className="mt-0.5 block text-[13px] text-moss">
                    {s.price ? `from ${formatINR(s.price)}${s.unit === "per month" ? " / month" : ""}` : s.tagline}
                  </span>
                </button>
              );
            })}
          </div>

          {canSplit && (
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Payment option">
              {[
                ["advance", `Pay ${service.advancePercent}% advance · ${formatINR(amountFor(service, "advance"))}`],
                ["full", `Pay in full · ${formatINR(service.price)}`],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={mode === key}
                  onClick={() => setMode(key)}
                  className={`rounded-lg px-4 py-2 font-mono text-[13px] transition ${
                    mode === key ? "bg-ink text-paper" : "bg-paper text-moss shadow-chip hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {isCustom && (
            <div className="mt-5">
              <label htmlFor="amount" className={labelCls}>Amount (INR)</label>
              <input
                id="amount"
                type="number"
                inputMode="decimal"
                min={payment.minCustom}
                max={payment.maxCustom}
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="e.g. 25000"
                className={inputCls}
              />
              <p className="mt-2 text-xs text-moss">Use this after we have agreed on scope and price.</p>
            </div>
          )}
        </section>

        {/* step 2 */}
        <section className="rounded-2xl border border-mist bg-card p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-moss">2 · Your details</p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelCls}>Full name</label>
              <input id="name" autoComplete="name" value={form.name} onChange={set("name")} className={inputCls} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="phone" className={labelCls}>Phone</label>
              <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+91 98765 43210" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className={labelCls}>Email</label>
              <input id="email" type="email" autoComplete="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="note" className={labelCls}>Note (optional)</label>
              <textarea id="note" rows={3} maxLength={200} value={form.note} onChange={set("note")} className={inputCls} placeholder="Project name, invoice number or anything I should know" />
            </div>
          </div>
        </section>
      </div>

      {/* summary */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-2xl border border-ink/10 bg-ink p-6 text-paper shadow-lift sm:p-8">
          <p className="font-mono text-xs text-white/40">// order summary</p>
          <p className="mt-4 font-display text-xl font-semibold">{title}</p>
          {!isCustom && (
            <p className="mt-1 text-sm text-white/55">
              {canSplit && mode === "advance" ? `${service.advancePercent}% advance of ${formatINR(service.price)}` : "Full payment"}
            </p>
          )}
          <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
            <span className="font-mono text-xs text-white/50">you pay</span>
            <span className="font-display text-4xl font-bold text-node">{formatINR(amount)}</span>
          </div>
          <p className="mt-2 text-right font-mono text-[11px] text-white/40">taxes extra, if applicable</p>

          <label className="mt-6 flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-white/70">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-[#178A5B]"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms-and-conditions" target="_blank" className="underline hover:text-node">Terms</Link>,{" "}
              <Link href="/refund-policy" target="_blank" className="underline hover:text-node">Refund Policy</Link> and{" "}
              <Link href="/privacy-policy" target="_blank" className="underline hover:text-node">Privacy Policy</Link>.
            </span>
          </label>

          {error && (
            <p ref={errorRef} role="alert" className="mt-5 rounded-xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-[#FFB4AB]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading" || amount <= 0}
            className="mt-6 w-full rounded-xl bg-node px-6 py-4 font-medium text-white transition hover:bg-[#1da66f] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "Opening secure checkout…" : `Pay ${formatINR(amount)} securely`}
          </button>

          <p className="mt-5 text-center font-mono text-[11px] leading-relaxed text-white/45">
            UPI · Cards · Netbanking · Wallets
            <br />
            Processed by Razorpay. I never see your card or UPI details.
          </p>
        </div>
        <p className="mt-4 text-center text-sm text-moss">
          Questions before paying?{" "}
          <a href={`mailto:${profile.email}`} className="underline hover:text-ink">{profile.email}</a>
        </p>
      </aside>
    </form>
  );
}
