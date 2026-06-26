import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sparkles, Sun } from "lucide-react";

import { NAV_ITEMS } from "../../lib/navigation";

export function Nav({ active, theme, setTheme }) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[min(1400px,96vw)]"
    >
      <div className="relative rounded-full p-[1.5px] overflow-hidden shadow-[var(--shadow-elevated)]">
        <motion.div
          aria-hidden
          className="absolute inset-[-100%] opacity-80"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, oklch(0.82 0.16 80) 60deg, transparent 120deg, oklch(0.78 0.16 215) 200deg, transparent 260deg, oklch(0.82 0.16 80) 320deg, transparent 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <nav className="relative glass rounded-full pl-3 pr-3 py-2 flex items-center gap-3 bg-background/70">
          <a
            href="#home"
            className="group relative shrink-0 inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full"
          >
            <motion.span
              className="relative w-8 h-8 rounded-full flex items-center justify-center font-display font-black text-sm text-[oklch(0.18_0.02_260)]"
              style={{ background: "var(--gradient-gold)" }}
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.6 }}
            >
              HC
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 24px oklch(0.82 0.16 80 / 0.6)" }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
            </motion.span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-bold text-sm text-gradient-gold">
                Harshal
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Choudhary
              </span>
            </span>
          </a>

          <span className="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />

          <ul className="hidden md:flex flex-1 items-center justify-center gap-0.5">
            {NAV_ITEMS.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-colors inline-block ${
                    active === n.id
                      ? "text-[oklch(0.18_0.02_260)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === n.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full shadow-[0_4px_20px_oklch(0.82_0.16_80/0.5)]"
                      style={{ background: "var(--gradient-gold)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{n.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 shrink-0 ml-auto md:ml-0">
            <motion.button
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative w-9 h-9 rounded-full glass flex items-center justify-center hover:border-[var(--gold)]/50 transition-colors overflow-hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-[var(--gold)]" />
                  ) : (
                    <Moon className="w-4 h-4 text-[var(--gold)]" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
            <a
              href="#contact"
              className="group relative hidden sm:inline-flex text-xs px-4 py-2 rounded-full font-semibold text-[oklch(0.18_0.02_260)] overflow-hidden"
              style={{ background: "var(--gradient-gold)" }}
            >
              <motion.span
                aria-hidden
                className="absolute inset-0 -translate-x-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.5), transparent)",
                }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
              />
              <span className="relative inline-flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Let's Talk
              </span>
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
