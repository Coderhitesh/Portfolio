import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Marquee, About, Stack } from "@/components/Sections";
import { Experience, Projects } from "@/components/Work";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
