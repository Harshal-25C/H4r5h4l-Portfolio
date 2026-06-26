import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export function Lightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-xl flex items-center justify-center p-6"
        >
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-6 right-6 w-11 h-11 rounded-full glass flex items-center justify-center hover:border-[var(--gold)]/50 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full glass rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="p-7 md:p-10">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-2">
                {project.tag}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full border border-border bg-secondary/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
