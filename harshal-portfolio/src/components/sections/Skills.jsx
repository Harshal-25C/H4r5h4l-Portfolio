import { motion } from "framer-motion";

import { Section } from "../layout/Section";
import { skillGroups } from "../../lib/portfolioData";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 - Skills"
      title={
        <>
          Tools of <span className="text-gradient-gold">the trade</span>
        </>
      }
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
              style={{ transformPerspective: 1000 }}
              className="glass rounded-2xl p-6 group hover:border-[var(--gold)]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
