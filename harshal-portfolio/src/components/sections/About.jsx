import { motion } from "framer-motion";

import { Section } from "../layout/Section";
import { aboutStats } from "../../lib/portfolioData";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={
        <>
          The story behind <span className="text-gradient-gold">the code</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm{" "}
            <span className="text-foreground font-medium">
              Harshal Choudhary
            </span>
            , a B.Tech Computer Science graduate driven by a love for clean
            architecture, expressive interfaces, and the quiet satisfaction of
            shipping things that work.
          </p>
          <p>
            My focus is full-stack engineering — from typed APIs and reliable
            data layers to immersive front-ends. I treat every project as a
            chance to learn something deeper about the craft.
          </p>
          <p>
            When I'm not coding, you'll find me exploring system design,
            sketching UI ideas, or going down rabbit holes on whatever
            technology is keeping me curious that week.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {aboutStats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 hover:border-[var(--gold)]/40 transition-colors group"
            >
              <div className="text-4xl font-bold text-gradient-gold group-hover:scale-110 transition-transform origin-left">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
