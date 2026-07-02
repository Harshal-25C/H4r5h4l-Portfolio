import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, Sparkles, X } from "lucide-react";

import { NAV_ITEMS } from "../../lib/navigation";

export function Nav({ active }) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
            onClick={() => setMobileOpen(false)}
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
            <span className="flex flex-col leading-none">
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

            <motion.button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileOpen((open) => !open)}
              className="relative md:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:border-[var(--gold)]/50 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "menu"}
                  initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 45, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[calc(100%+0.75rem)] md:hidden w-[min(280px,92vw)] overflow-hidden rounded-3xl border border-[oklch(1_0_0/0.1)] bg-[linear-gradient(160deg,oklch(0.18_0.05_286/0.96),oklch(0.33_0.18_300/0.96),oklch(0.53_0.2_294/0.96))] p-4 shadow-[0_26px_80px_-30px_oklch(0_0_0/0.9)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,oklch(0.82_0.16_80/0.22),transparent_32%),radial-gradient(circle_at_100%_100%,oklch(0.78_0.16_215/0.16),transparent_36%)]" />
            <div className="relative space-y-1 py-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                  className={`block rounded-2xl px-4 py-3 text-center font-semibold transition-colors ${
                    active === item.id
                      ? "bg-white/18 text-white"
                      : "text-white/90 hover:bg-white/12 hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <a
              href="tel:+918349300794"
              className="relative mt-4 flex items-center justify-center gap-2 rounded-2xl bg-white/14 px-4 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              <Phone className="h-4 w-4 text-[var(--gold)]" />
              +91 8349300794
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
