import Navbar from "./Navbar";
import { Footer } from "./Contact";

export default function PageShell({ children, wide = false }) {
  return (
    <>
      <Navbar />
      <main className={`mx-auto px-4 pb-24 pt-32 sm:px-6 sm:pt-40 ${wide ? "max-w-6xl" : "max-w-3xl"}`}>{children}</main>
      <Footer />
    </>
  );
}
