import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Section } from "../layout/Section";
import { Field } from "../ui/Field";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title={
        <>
          Let's build <span className="text-gradient-gold">something</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Have an idea, an opportunity, or just want to say hi? My inbox is
            open and I usually reply within a day.
          </p>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:harshalchoudhary340@gmail.com"
              className="flex items-center gap-3 group"
            >
              <span className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:border-[var(--gold)]/40">
                <Mail className="w-4 h-4 text-[var(--gold)]" />
              </span>
              harshalchoudhary340@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                <Phone className="w-4 h-4 text-[var(--gold)]" />
              </span>
              +91 8349300794
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[var(--gold)]" />
              </span>
              India
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <a
              href="https://github.com/Harshal-25C"
              className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:border-[var(--gold)]/40 transition"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/harshal-choudhary-a75117259"
              className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:border-[var(--gold)]/40 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:border-[var(--gold)]/40 transition"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-3xl p-7 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@email.com"
            />
          </div>
          <Field
            label="Subject"
            name="subject"
            placeholder="What's it about?"
          />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell me a little about what you're building..."
              className="mt-2 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]/60 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3.5 rounded-xl bg-[var(--gradient-gold)] text-primary-foreground font-medium glow-gold hover:scale-[1.01] active:scale-100 transition-transform"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={sent ? "sent" : "send"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                {sent ? "✓ Message sent" : "Send Message"}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
