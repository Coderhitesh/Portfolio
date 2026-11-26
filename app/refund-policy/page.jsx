import LegalPage from "@/components/LegalPage";
import { refund, LEGAL_UPDATED } from "@/components/legal";

export const metadata = {
  title: "Cancellation & Refund Policy — Hitesh Yadav",
  description: "Cancellation & Refund Policy for Hitesh Yadav's web development services.",
};

export default function Page() {
  return <LegalPage {...refund} updated={LEGAL_UPDATED} />;
}
