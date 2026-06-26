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

      <FloatingShapes />

      <motion.div
        style={{ y: heroY, opacity: heroOp }}
        className="relative z-10 px-6 pt-32 lg:pt-24 pb-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center"
      >
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Sparkles className="w-3 h-3 text-[var(--gold)]" />
            Aspiring Software Engineer
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-medium text-[var(--gold)] mb-2"
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
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-gradient-rainbow"
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
            className="mt-6 text-2xl md:text-3xl font-light text-muted-foreground"
          >
            Aspiring Software Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-3 text-base text-muted-foreground/80 max-w-xl mx-auto lg:mx-0"
          >
            B.Tech CSE Graduate crafting performant, elegant software — building
            the bridge between code and cinematic experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="group px-7 py-3.5 rounded-full text-white font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
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
              className="px-7 py-3.5 rounded-full glass font-medium hover:border-[var(--gold)]/50 transition-colors inline-flex items-center gap-2"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex flex-wrap gap-7 justify-center lg:justify-start text-base"
          >
            <a
              href="https://linkedin.com/in/harshal-choudhary-a75117259"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-[var(--gold)] transition-colors group"
            >
              <BrandLinkedin className="h-6 w-6" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Harshal-25C"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-[var(--gold)] transition-colors group"
            >
              <BrandGithub className="h-6 w-6" />
              GitHub
            </a>
            <a
              href="mailto:harshalchoudhary340@gmail.com"
              className="inline-flex items-center gap-2 text-white hover:text-[var(--gold)] transition-colors group"
            >
              <BrandMail className="h-6 w-6" />
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
          className="relative will-change-transform mx-auto max-w-sm md:max-w-md lg:max-w-lg"
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
