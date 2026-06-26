import { motion } from "framer-motion";

import { floatingShapes } from "../../lib/portfolioData";

export function FloatingShapes() {
  return (
    <>
      {floatingShapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-2xl border border-[oklch(0.82_0.16_80/0.2)] backdrop-blur-sm animate-float-slow"
          style={{
            ...s,
            width: s.size,
            height: s.size,
            background:
              "linear-gradient(135deg, oklch(0.82 0.16 80 / 0.08), transparent)",
            animationDelay: `${s.delay}s`,
            transform: `rotate(${s.rot}deg)`,
          }}
        />
      ))}
    </>
  );
}
