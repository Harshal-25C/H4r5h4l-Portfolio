import { useEffect, useState } from "react";

import { NAV_ITEMS } from "../lib/navigation";

export function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
      const readingLine = window.innerHeight * 0.38;

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= readingLine && rect.bottom > readingLine;
      });

      if (current) {
        setActive(current.id);
        return;
      }

      const closest = sections.reduce((best, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - readingLine);
        return distance < best.distance ? { id: section.id, distance } : best;
      }, { id: "home", distance: Number.POSITIVE_INFINITY });

      setActive(closest.id);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return active;
}
