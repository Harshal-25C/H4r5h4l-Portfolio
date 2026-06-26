import { motion, useScroll, useSpring } from "framer-motion";

import { Footer } from "../components/layout/Footer";
import { Nav } from "../components/layout/Nav";
import { About } from "../components/sections/About";
import { Certifications } from "../components/sections/Certifications";
import { Contact } from "../components/sections/Contact";
import { Education } from "../components/sections/Education";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";

export function Portfolio() {
  const active = useActiveSection();
  const [theme, setTheme] = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[var(--gold)] via-[var(--cyan)] to-[var(--gold)] z-50"
      />
      <Nav active={active} theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
