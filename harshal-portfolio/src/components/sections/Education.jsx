import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BookOpen, CalendarDays, GraduationCap, MapPin } from "lucide-react";

import graduateBoyVideo from "../../assets/graduate-boy-harsh-video.mp4";
import { educationItems } from "../../lib/portfolioData";
import { Section } from "../layout/Section";

const educationAccents = [
  {
    glow: "oklch(0.82 0.16 80 / 0.24)",
    beam: "oklch(0.82 0.16 80 / 0.16)",
    rim: "oklch(0.82 0.16 80 / 0.48)",
  },
  {
    glow: "oklch(0.78 0.16 215 / 0.24)",
    beam: "oklch(0.78 0.16 215 / 0.15)",
    rim: "oklch(0.78 0.16 215 / 0.44)",
  },
  {
    glow: "oklch(0.72 0.2 330 / 0.2)",
    beam: "oklch(0.72 0.2 330 / 0.12)",
    rim: "oklch(0.82 0.16 80 / 0.42)",
  },
];

export function Education() {
  const graduateVideoRef = useRef(null);

  useEffect(() => {
    const video = graduateVideoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.play().catch(() => {
      // The muted autoplay attributes below handle browsers that defer playback.
    });
  }, []);

  return (
    <Section
      id="education"
      eyebrow="06 - Education"
      title={
        <>
          Learning <span className="text-gradient-gold">milestones</span>
        </>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ transformPerspective: 1400 }}
        className="relative overflow-visible py-4 md:py-8"
      >
        <div
          aria-hidden
          className="absolute -inset-x-8 top-6 bottom-0 opacity-25 [background-image:linear-gradient(oklch(1_0_0/0.06)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.05)_1px,transparent_1px)] [background-size:52px_52px]"
        />
        <div
          aria-hidden
          className="absolute -right-28 bottom-0 h-72 w-[38rem] rotate-[-12deg] bg-[linear-gradient(90deg,transparent,oklch(0.82_0.16_80/0.18),oklch(0.78_0.16_215/0.12),transparent)] blur-2xl"
        />

        <div className="relative grid items-stretch gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-[34rem] overflow-visible lg:min-h-full"
          >
            <div
              aria-hidden
              className="absolute inset-x-8 bottom-3 h-28 rounded-[50%] bg-black/50 blur-2xl lg:bottom-4"
            />
            <motion.div
              className="absolute -bottom-10 left-1/2 flex h-[calc(100%+2rem)] -translate-x-1/2 items-end justify-center lg:-bottom-14 lg:h-[calc(100%+6rem)]"
              animate={{
                y: [0, -18, 0],
                rotate: [0, -2.8, 2.2, 0],
                scale: [1, 1.045, 1],
                filter: [
                  "drop-shadow(0 34px 55px oklch(0 0 0 / 0.6))",
                  "drop-shadow(0 46px 72px oklch(0.82 0.16 80 / 0.34))",
                  "drop-shadow(0 34px 55px oklch(0 0 0 / 0.6))",
                ],
              }}
              whileHover={{ scale: 1.14, rotate: -3 }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <video
                ref={graduateVideoRef}
                aria-label="Graduate student celebrating"
                className="h-full w-auto max-w-none object-contain"
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
                onLoadedData={(event) => event.currentTarget.play().catch(() => {})}
              >
                <source src={graduateBoyVideo} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              aria-hidden
              className="absolute left-5 top-4 bottom-4 w-px overflow-hidden rounded-full bg-gradient-to-b from-transparent via-[var(--gold)]/60 to-transparent md:left-8"
            >
              <motion.span
                className="absolute left-0 h-24 w-px bg-gradient-to-b from-transparent via-white to-transparent"
                animate={{ y: ["-30%", "720%"] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <div className="space-y-5">
              {educationItems.map((it, i) => {
                const accent = educationAccents[i % educationAccents.length];

                return (
                  <motion.article
                    key={it.title}
                    initial={{ opacity: 0, x: 58, rotateY: -18, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }}
                    whileHover={{
                      y: -10,
                      rotateY: -5,
                      rotateX: 2,
                      scale: 1.018,
                      transition: { duration: 0.32 },
                    }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.68, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      transformPerspective: 1100,
                      "--card-glow": accent.glow,
                      "--card-beam": accent.beam,
                      "--card-rim": accent.rim,
                    }}
                    className="group relative ml-12 max-w-[44rem] rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,oklch(0.25_0.04_270/0.82),oklch(0.12_0.025_270/0.9)_62%,oklch(0.1_0.022_270/0.94))] p-[1px] shadow-[0_28px_90px_-48px_oklch(0_0_0/0.95)] backdrop-blur transition-colors hover:border-[var(--card-rim)] md:ml-16"
                  >
                    <div
                      aria-hidden
                      className="absolute -inset-px rounded-[1.35rem] opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--card-glow), transparent 35%, oklch(0.78 0.16 215 / 0.16))",
                      }}
                    />
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 rounded-[1.35rem] bg-[linear-gradient(115deg,transparent_8%,oklch(1_0_0/0.17)_42%,transparent_58%)] opacity-0"
                      whileHover={{ x: ["-115%", "115%"], opacity: [0, 0.75, 0] }}
                      transition={{ duration: 1.25, ease: "easeInOut" }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-[1.35rem] opacity-70"
                      style={{
                        background:
                          "radial-gradient(circle at 16% 0%, var(--card-beam), transparent 34%), radial-gradient(circle at 92% 24%, oklch(0.78 0.16 215 / 0.1), transparent 32%)",
                      }}
                    />

                    <motion.div
                      className="absolute -left-[2.35rem] top-6 grid h-7 w-7 place-items-center rounded-full border border-[var(--gold)]/70 bg-background shadow-[0_0_24px_oklch(0.82_0.16_80/0.55)] md:-left-[3.1rem]"
                      animate={{
                        boxShadow: [
                          "0 0 18px oklch(0.82 0.16 80 / 0.42)",
                          "0 0 34px oklch(0.82 0.16 80 / 0.72)",
                          "0 0 18px oklch(0.82 0.16 80 / 0.42)",
                        ],
                      }}
                      transition={{ duration: 3.2, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <GraduationCap className="h-3.5 w-3.5 text-[var(--gold)]" />
                    </motion.div>

                    <div className="relative overflow-hidden rounded-[1.3rem] p-4 md:p-5">
                      <div
                        aria-hidden
                        className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70"
                      />
                      <div
                        aria-hidden
                        className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,var(--card-glow),transparent_66%)] blur-2xl transition-transform duration-700 group-hover:scale-125"
                      />

                      <div className="relative">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[linear-gradient(135deg,oklch(0.82_0.16_80/0.18),oklch(0.82_0.16_80/0.07))] px-3 py-1 text-[11px] font-semibold text-[var(--gold)] shadow-[inset_0_1px_0_oklch(1_0_0/0.12)]">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {it.year}
                        </div>
                        <h3 className="font-display text-xl font-bold leading-tight text-foreground drop-shadow-sm transition-colors group-hover:text-[var(--gold)] md:text-[1.35rem]">
                          {it.title}
                        </h3>
                        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                          <MapPin className="h-4 w-4 shrink-0 text-[var(--gold)]/85" />
                          <span>{it.where}</span>
                        </div>
                        <p className="mt-3 flex gap-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/75">
                          <BookOpen className="mt-1 h-4 w-4 shrink-0 text-[var(--gold)]/85" />
                          <span>{it.desc}</span>
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
