import { motion } from "framer-motion";
import { Eye } from "lucide-react";

import { Section } from "../layout/Section";
import { certifications } from "../../lib/portfolioData";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="04 - Certifications"
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
            whileHover={{ y: -6, scale: 1.015 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="group relative overflow-hidden glass rounded-xl p-5 flex items-center gap-4 hover:border-[var(--gold)]/45 transition-colors"
          >
            <motion.div
              aria-hidden
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 12% 50%, oklch(0.82 0.16 80 / 0.16), transparent 32%)",
              }}
            />
            <motion.div
              whileHover={{ rotate: -3, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative shrink-0 w-12 h-12 rounded-lg bg-white/90 border border-white/20 p-2 shadow-[0_16px_40px_-28px_oklch(0_0_0/0.9)] flex items-center justify-center"
            >
              <img
                src={c.logo}
                alt={`${c.issuer} logo`}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
            <div className="relative flex-1 min-w-0">
              <div className="font-medium truncate">{c.name}</div>
              <div className="text-sm text-muted-foreground">
                {c.issuer} - {c.year}
              </div>
            </div>
            <motion.a
              href={c.certificate}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${c.name} certificate`}
              title={`View ${c.name} certificate`}
              whileHover={{ scale: 1.12, rotate: 6 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 360, damping: 18 }}
              className="relative shrink-0 w-10 h-10 rounded-full bg-white/8 border border-white/10 text-[var(--gold)] flex items-center justify-center transition-colors group-hover:bg-white/12 hover:bg-[var(--gold)] hover:text-primary-foreground hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            >
              <Eye className="w-4.5 h-4.5" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
