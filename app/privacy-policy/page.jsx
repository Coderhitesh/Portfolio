import LegalPage from "@/components/LegalPage";
import { privacy, LEGAL_UPDATED } from "@/components/legal";

export const metadata = {
  title: "Privacy Policy — Hitesh Yadav",
  description: "Privacy Policy for Hitesh Yadav's web development services.",
};

export default function Page() {
  return <LegalPage {...privacy} updated={LEGAL_UPDATED} />;
}
