import LegalPage from "@/components/LegalPage";
import { shipping, LEGAL_UPDATED } from "@/components/legal";

export const metadata = {
  title: "Shipping & Delivery Policy — Hitesh Yadav",
  description: "Shipping & Delivery Policy for Hitesh Yadav's web development services.",
};

export default function Page() {
  return <LegalPage {...shipping} updated={LEGAL_UPDATED} />;
}
