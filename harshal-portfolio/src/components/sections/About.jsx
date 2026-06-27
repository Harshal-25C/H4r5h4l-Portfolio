import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Download,
  Eye,
  Languages,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";

import harshalPhoto from "../../assets/harshal-photo.jpg";
import { aboutStats } from "../../lib/portfolioData";
import { Section } from "../layout/Section";

const RESUME_URL = "/resume/harshal-choudhary-resume.pdf";

const personalDetails = [
  { icon: CalendarDays, label: "Birthday", value: "25 Oct 2005" },
  { icon: Languages, label: "Languages", value: "English, Marathi, Hindi" },
  { icon: Mail, label: "Email", value: "harshalchoudhary340@gmail.com" },
  { icon: Phone, label: "Phone", value: "8349300794" },
  { icon: MapPin, label: "From", value: "Bhopal, M.P." },
];

export function About() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <Section
      id="about"
      eyebrow="01 - About"
      title={
        <>
          A closer look at <span className="text-gradient-gold">my journey</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-[0.9fr_1.15fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]"
        >
          <div className="about-photo-frame">
            <img
              src={harshalPhoto}
              alt="Harshal Choudhary wearing a blazer"
              className="about-photo"
            />
          </div>

          <motion.button
            type="button"
            onClick={() => setResumeOpen(true)}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative mx-auto mt-8 flex w-[min(100%,260px)] overflow-hidden rounded-2xl px-5 py-3 text-sm font-semibold text-[oklch(0.13_0.02_270)] shadow-[0_18px_50px_-28px_oklch(0.82_0.16_80/0.85)]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(90deg,#f59e0b,#fb7185,#c084fc)]" />
            <motion.span
              aria-hidden
              className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/35"
              animate={{ x: ["0%", "430%"] }}
              transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
            />
            <span className="relative inline-flex items-center justify-center gap-2">
              <Eye className="h-4 w-4" />
              View Resume
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)] mb-3">
                Aspiring Software Engineer
              </p>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Hi there, I'm{" "}
                <span className="text-gradient-rainbow">Harshal Choudhary</span>
              </h3>
            </div>
            <p>
              I enjoy building clean, responsive web experiences where design
              and logic feel connected. My work leans toward full-stack
              development, polished interfaces, and practical software that is
              easy to use.
            </p>
            <p>
              I like turning ideas into real products, learning deeply while I
              build, and bringing a cinematic touch to interfaces without losing
              clarity or performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {personalDetails.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass rounded-xl p-4 flex items-start gap-3 hover:border-[var(--gold)]/40 transition-colors"
              >
                <span className="mt-0.5 h-9 w-9 shrink-0 rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </div>
                  <div className="mt-1 text-sm md:text-base text-foreground break-words">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aboutStats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl p-4 hover:border-[var(--gold)]/40 transition-colors group"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold group-hover:scale-105 transition-transform origin-left">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <ResumePreview open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </Section>
  );
}

function ResumePreview({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-background/85 backdrop-blur-xl p-4 md:p-8 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="relative w-full max-w-5xl h-[86vh] overflow-hidden rounded-3xl border border-border bg-[oklch(0.14_0.02_270)] shadow-[var(--shadow-elevated)]"
          >
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-3 border-b border-border bg-background/82 px-4 py-3 backdrop-blur-xl">
              <div>
                <div className="text-sm font-semibold text-foreground">Harshal Choudhary Resume</div>
                <div className="text-xs text-muted-foreground">Preview and download</div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={RESUME_URL}
                  download="Harshal Choudhary Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-4 py-2 text-xs font-bold text-primary-foreground hover:scale-105 transition-transform"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full glass hover:border-[var(--gold)]/50 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <iframe
              title="Harshal Choudhary Resume"
              src={RESUME_URL}
              className="h-full w-full pt-[65px] bg-white"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}