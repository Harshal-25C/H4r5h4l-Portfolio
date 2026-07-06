import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-3">
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
