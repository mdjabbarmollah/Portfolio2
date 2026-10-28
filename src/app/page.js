import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { profile } from "@/data/profile";


export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Skills />
      <About />
      
      <Contact />
      <footer className="footer container">
        © {profile.name}.
      </footer>
    </main>
  );
}