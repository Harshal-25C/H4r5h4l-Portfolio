import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BookOpen, CalendarDays, GraduationCap, MapPin } from "lucide-react";

import graduateBoyVideo from "../../assets/graduate-boy-harsh-video.mp4";
import { educationItems } from "../../lib/portfolioData";
import { Section } from "../layout/Section";

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
            <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent md:left-8" />
            <div className="space-y-4">
              {educationItems.map((it, i) => (
                <motion.article
                  key={it.title}
                  initial={{ opacity: 0, x: 48, rotateY: -16 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  whileHover={{ y: -8, rotateY: -5, scale: 1.02 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                  style={{ transformPerspective: 1000 }}
                  className="group relative ml-12 max-w-[44rem] rounded-2xl border border-white/10 bg-[linear-gradient(145deg,oklch(0.22_0.035_270/0.88),oklch(0.14_0.03_270/0.84))] p-4 shadow-[0_22px_70px_-42px_oklch(0_0_0/0.9)] backdrop-blur transition-colors hover:border-[var(--gold)]/55 md:ml-16 md:p-5"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(120deg, oklch(0.82 0.16 80 / 0.12), transparent 42%, oklch(0.78 0.16 215 / 0.1))",
                    }}
                  />
                  <div className="absolute -left-[2.35rem] top-6 grid h-7 w-7 place-items-center rounded-full border border-[var(--gold)]/70 bg-background shadow-[0_0_24px_oklch(0.82_0.16_80/0.55)] md:-left-[3.1rem]">
                    <GraduationCap className="h-3.5 w-3.5 text-[var(--gold)]" />
                  </div>

                  <div className="relative">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--gold)]">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {it.year}
                    </div>
                    <h3 className="font-display text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-[var(--gold)] md:text-[1.35rem]">
                      {it.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0 text-[var(--gold)]/80" />
                      <span>{it.where}</span>
                    </div>
                    <p className="mt-3 flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <BookOpen className="mt-1 h-4 w-4 shrink-0 text-[var(--gold)]/80" />
                      <span>{it.desc}</span>
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
