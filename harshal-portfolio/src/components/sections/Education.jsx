import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { Section } from "../layout/Section";
import { educationItems } from "../../lib/portfolioData";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="06 - Education"
      title={
        <>
          The <span className="text-gradient-gold">journey</span>
        </>
      }
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/50 to-transparent" />
        <div className="space-y-12">
          {educationItems.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div
                className={`pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="text-sm text-[var(--gold)] font-mono mb-2">
                  {it.year}
                </div>
                <h3 className="text-2xl font-semibold mb-1">{it.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">
                  {it.where}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--gradient-gold)] glow-gold ring-4 ring-background">
                <GraduationCap className="absolute inset-0 m-auto w-2.5 h-2.5 text-primary-foreground" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
