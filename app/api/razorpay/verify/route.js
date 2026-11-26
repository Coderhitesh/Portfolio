import crypto from "crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) return NextResponse.json({ error: "Not configured." }, { status: 500 });

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature } = body || {};
  if (![orderId, paymentId, signature].every((v) => typeof v === "string" && v.length > 0)) {
    return NextResponse.json({ error: "Missing payment details." }, { status: 400 });
  }

  const expected = crypto.createHmac("sha256", secret).update(`${orderId}|${paymentId}`).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  const verified = a.length === b.length && crypto.timingSafeEqual(a, b);

  if (!verified) {
    return NextResponse.json({ verified: false, error: "Signature mismatch." }, { status: 400 });
  }
  return NextResponse.json({ verified: true, paymentId });
}
