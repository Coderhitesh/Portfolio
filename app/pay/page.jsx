import { Suspense } from "react";
import PageShell from "@/components/PageShell";
import PayForm from "@/components/PayForm";

export const metadata = {
  title: "Pay Online — Hitesh Yadav",
  description: "Pay securely for web development services via Razorpay — UPI, cards, netbanking and wallets.",
};

export default function PayPage() {
  return (
    <PageShell wide>
      <p className="route-chip mb-4">
        <span className="verb !bg-coral">POST</span> /pay
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Pay securely online</h1>
      <p className="mb-10 mt-4 max-w-2xl text-lg text-moss">
        Choose a service, enter your details and pay with UPI, card, netbanking or wallet. Powered by Razorpay.
      </p>
      <Suspense fallback={<p className="font-mono text-sm text-moss">loading…</p>}>
        <PayForm />
      </Suspense>
    </PageShell>
  );
}
