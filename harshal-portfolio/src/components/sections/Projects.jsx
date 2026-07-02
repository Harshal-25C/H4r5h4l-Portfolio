import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Boxes, ExternalLink } from "lucide-react";

import { Section } from "../layout/Section";
import { Lightbox } from "../ui/Lightbox";
import { projectCategories, projects } from "../../lib/portfolioData";
import githubLogo from "../../assets/github.webp";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="05 - Projects"
      title={
        <>
          Selected <span className="text-gradient-gold">work</span>
        </>
      }
    >
      <div className="flex flex-wrap gap-2 mb-10">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`relative text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
              filter === c
                ? "text-primary-foreground border-transparent"
                : "text-muted-foreground border-border hover:text-foreground"
            }`}
          >
            {filter === c && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-[var(--gradient-gold)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              style={{ transformPerspective: 1200 }}
              className="group relative glass rounded-3xl overflow-hidden hover:border-[var(--gold)]/40 transition-colors"
            >
              <div
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: p.accent }}
              />
              <button
                onClick={() => setLightbox(p)}
                className="relative block w-full aspect-[16/9] overflow-hidden cursor-zoom-in"
                aria-label={`Open preview of ${p.title}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full glass">
                  Click to preview
                </span>
              </button>
              <div className="relative p-7">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  <Boxes className="w-3.5 h-3.5" /> {p.tag}
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-gradient-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border border-border bg-secondary/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <a
                    className="group/live relative inline-flex items-center gap-2 text-base font-semibold text-[var(--gold)] transition-all duration-300 [text-shadow:0_0_18px_oklch(0.82_0.16_80/0.28)] hover:-translate-y-0.5 hover:text-[oklch(0.9_0.14_85)] hover:[text-shadow:0_0_26px_oklch(0.82_0.16_80/0.5)]"
                    href={p.caseStudyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative">
                      Live
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-50 bg-[linear-gradient(90deg,var(--gold),transparent)] transition-transform duration-300 group-hover/live:scale-x-100" />
                    </span>
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5" />
                  </a>
                  <a
                    className="group/source relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 font-semibold text-foreground shadow-[0_12px_32px_-18px_oklch(0_0_0/0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)]/50 hover:bg-[var(--gold)]/10 hover:shadow-[0_18px_42px_-24px_oklch(0.82_0.16_80/0.8)]"
                    href={p.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,oklch(1_0_0/0.12),transparent)] transition-transform duration-700 group-hover/source:translate-x-full" />
                    <span className="relative grid h-6 w-6 place-items-center rounded-full bg-white shadow-[0_0_0_1px_oklch(1_0_0/0.12)]">
                      <img
                        src={githubLogo}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 object-contain"
                      />
                    </span>
                    <span className="relative">Source</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox project={lightbox} onClose={() => setLightbox(null)} />
    </Section>
  );
}
