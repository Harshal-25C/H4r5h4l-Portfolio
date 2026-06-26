import { motion } from "framer-motion";
import { Award } from "lucide-react";

import { Section } from "../layout/Section";
import { certifications } from "../../lib/portfolioData";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="03 — Certifications"
      title={
        <>
          Recognised <span className="text-gradient-gold">credentials</span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-xl p-5 flex items-center gap-4 hover:border-[var(--gold)]/40 transition-all hover:translate-x-1"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.82_0.16_80/0.15)] border border-[oklch(0.82_0.16_80/0.3)] flex items-center justify-center">
              <Award className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{c.name}</div>
              <div className="text-sm text-muted-foreground">
                {c.issuer} · {c.year}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
