import LegalPage from "@/components/LegalPage";
import { terms, LEGAL_UPDATED } from "@/components/legal";

export const metadata = {
  title: "Terms & Conditions — Hitesh Yadav",
  description: "Terms & Conditions for Hitesh Yadav's web development services.",
};

export default function Page() {
  return <LegalPage {...terms} updated={LEGAL_UPDATED} />;
}
