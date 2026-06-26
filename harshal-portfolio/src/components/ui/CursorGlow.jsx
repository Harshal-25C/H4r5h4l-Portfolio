import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 34 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 34 });

  useEffect(() => {
    function handlePointerMove(event) {
      x.set(event.clientX);
      y.set(event.clientY);
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[55] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[oklch(0.82_0.16_80/0.75)] bg-[oklch(0.82_0.16_80/0.14)] shadow-[0_0_18px_oklch(0.82_0.16_80/0.45)] mix-blend-screen lg:block"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[54] hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.16_80/0.22),oklch(0.78_0.16_215/0.08)_45%,transparent_72%)] blur-sm mix-blend-screen lg:block"
        style={{ x: smoothX, y: smoothY }}
      />
    </>
  );
}