import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

import developer3D from "../../assets/developer-3d.png";
import { BrandGithub, BrandLinkedin, BrandMail } from "../ui/SocialLogos";
import { FloatingShapes } from "./FloatingShapes";

export function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [12, -12]);
  const ry = useTransform(mx, [-0.5, 0.5], [-12, 12]);
  const sRx = useSpring(rx, { stiffness: 100, damping: 15 });
  const sRy = useSpring(ry, { stiffness: 100, damping: 15 });
  const imgRy = useTransform(mx, [-0.5, 0.5], [-18, 18]);
  const imgRx = useTransform(my, [-0.5, 0.5], [10, -10]);
  const sImgRx = useSpring(imgRx, { stiffness: 80, damping: 14 });
  const sImgRy = useSpring(imgRy, { stiffness: 80, damping: 14 });

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 200]);
  const heroOp = useTransform(scrollY, [0, 500], [1, 0]);

  function handleMove(e) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    mx.set(x - 0.5);
    my.set(y - 0.5);
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden cinema-grid"
      style={{ background: "var(--gradient-hero)" }}
    >
      <motion.div
        className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full blur-3xl opacity-40 animate-pulse-glow"
        style={{ background: "var(--gradient-gold)" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.16 215), transparent)",
          animationDelay: "2s",
        }}
      />

      <CornerAccents />
      <FloatingShapes />

      <motion.div
        style={{ y: heroY, opacity: heroOp }}
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:grid-cols-2 lg:pt-24"
      >
        <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground glass sm:mb-8 sm:px-4 sm:text-xs sm:tracking-[0.2em]"
          >
            <Sparkles className="w-3 h-3 text-[var(--gold)]" />
            Aspiring Software Engineer
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-2 font-display text-2xl font-medium text-[var(--gold)] sm:text-3xl md:text-4xl"
          >
            Hello, I'm
          </motion.div>

          <motion.div
            style={{ rotateX: sRx, rotateY: sRy, transformPerspective: 1200 }}
            className="will-change-transform"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl font-black leading-[0.95] tracking-tight text-gradient-rainbow sm:text-5xl md:text-7xl lg:text-8xl"
            >
              Harshal
              <br />
              Choudhary
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-5 text-lg font-light text-muted-foreground sm:text-2xl md:text-3xl"
          >
            Aspiring Software Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground/80 sm:text-base lg:mx-0 lg:max-w-xl"
          >
            B.Tech CSE Graduate crafting performant, elegant software — building
            the bridge between code and cinematic experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 sm:px-7 sm:py-3.5 sm:text-base"
              style={{
                background: "linear-gradient(90deg,#f59e0b,#ec4899,#a855f7)",
              }}
            >
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">
                ›
              </span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors glass hover:border-[var(--gold)]/50 sm:px-7 sm:py-3.5 sm:text-base"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-7 flex flex-wrap justify-center gap-4 text-xs sm:gap-6 sm:text-sm lg:justify-start"
          >
            <a
              href="https://linkedin.com/in/harshal-choudhary-a75117259"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-[var(--gold)] sm:gap-2"
            >
              <BrandLinkedin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Harshal-25C"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-[var(--gold)] sm:gap-2"
            >
              <BrandGithub className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              GitHub
            </a>
            <a
              href="mailto:harshalchoudhary340@gmail.com"
              className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-[var(--gold)] sm:gap-2"
            >
              <BrandMail className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            rotateX: sImgRx,
            rotateY: sImgRy,
            transformPerspective: 1400,
          }}
          className="relative mx-auto w-full max-w-[18rem] will-change-transform sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <div
            className="absolute inset-6 rounded-[2.5rem] blur-3xl opacity-50"
            style={{ background: "var(--gradient-gold)" }}
          />
          <motion.img
            src={developer3D}
            alt="3D illustration of Harshal Choudhary coding at a desk"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-auto drop-shadow-[0_25px_45px_oklch(0_0_0/0.5)]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs uppercase tracking-widest flex flex-col items-center gap-2"
      >
        Scroll
        <span className="w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </motion.div>
    </section>
  );
}

function CornerAccents() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <motion.div
        className="absolute left-6 top-28 h-24 w-24 rounded-[1.4rem] border border-[oklch(0.82_0.16_80/0.28)] bg-[linear-gradient(135deg,oklch(0.82_0.16_80/0.13),oklch(0.78_0.16_215/0.08),transparent)] backdrop-blur-[2px]"
        animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-24 top-[38%] h-10 w-10 rounded-full border border-[oklch(0.82_0.16_80/0.38)] bg-[oklch(0.82_0.16_80/0.06)]"
        animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-14 h-24 w-24 rounded-[1.35rem] border border-[oklch(0.82_0.16_80/0.28)] bg-[linear-gradient(135deg,oklch(0.78_0.16_215/0.1),oklch(0.82_0.16_80/0.1),transparent)] backdrop-blur-[2px]"
        animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-12 right-[18%] h-12 w-12 rounded-full border border-[oklch(0.78_0.16_215/0.35)] bg-[oklch(0.78_0.16_215/0.06)]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
    </div>
  );
}
