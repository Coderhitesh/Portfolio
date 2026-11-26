import { NextResponse } from "next/server";
import { services, payment, amountFor } from "@/components/data";

export const runtime = "nodejs";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[0-9+\-\s]{10,15}$/;
const clean = (v, max = 100) => String(v ?? "").replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
const fail = (error, status = 400) => NextResponse.json({ error }, { status });

export async function POST(req) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return fail("Online payments are not configured yet. Please contact me directly.", 500);

  let body;
  try {
    body = await req.json();
  } catch {
    return fail("Invalid request.");
  }

  const name = clean(body.name);
  const email = clean(body.email, 120);
  const phone = clean(body.phone, 20);
  const note = clean(body.note, 200);
  if (!name) return fail("Please enter your name.");
  if (!emailRe.test(email)) return fail("Please enter a valid email address.");
  if (!phoneRe.test(phone)) return fail("Please enter a valid phone number.");

  // The amount is decided on the server — never trust the browser for it.
  let rupees;
  let description;
  let serviceId = clean(body.serviceId, 40);

  if (serviceId === "custom") {
    rupees = Number(body.amount);
    if (!Number.isFinite(rupees) || rupees < payment.minCustom || rupees > payment.maxCustom) {
      return fail(`Amount must be between ₹${payment.minCustom} and ₹${payment.maxCustom}.`);
    }
    description = "Custom payment";
  } else {
    const service = services.find((s) => s.id === serviceId);
    if (!service) return fail("Unknown service selected.");
    const mode = body.mode === "full" ? "full" : "advance";
    rupees = amountFor(service, mode);
    const part = mode === "full" || service.advancePercent >= 100 ? "" : ` (${service.advancePercent}% advance)`;
    description = `${service.title}${part}`;
  }

  const paise = Math.round(rupees * 100);

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
    },
    body: JSON.stringify({
      amount: paise,
      currency: payment.currency,
      receipt: `rcpt_${Date.now()}`,
      notes: { name, email, phone, service: serviceId, description, note },
    }),
  });

  if (!res.ok) {
    console.error("Razorpay order error:", res.status, await res.text());
    return fail("Could not start the payment. Please try again in a moment.", 502);
  }

  const order = await res.json();
  return NextResponse.json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    keyId,
    description,
  });
}
