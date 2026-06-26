import { useEffect, useState } from "react";

import { NAV_ITEMS } from "../lib/navigation";

export function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    NAV_ITEMS.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return active;
}
