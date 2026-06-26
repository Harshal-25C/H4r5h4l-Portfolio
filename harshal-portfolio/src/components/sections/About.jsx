import { motion } from "framer-motion";
import { CalendarDays, Languages, Mail, MapPin, Phone } from "lucide-react";

import harshalPhoto from "../../assets/harshal-photo.jpg";
import { aboutStats } from "../../lib/portfolioData";
import { Section } from "../layout/Section";

const personalDetails = [
  { icon: CalendarDays, label: "Birthday", value: "25 Oct 2005" },
  { icon: Languages, label: "Languages", value: "English, Marathi, Hindi" },
  { icon: Mail, label: "Email", value: "harshalchoudhary340@gmail.com" },
  { icon: Phone, label: "Phone", value: "8349300794" },
  { icon: MapPin, label: "From", value: "Bhopal, M.P." },
];

export function About() {
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
    </Section>
  );
}
