import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

import { Section } from "../layout/Section";
import { Field } from "../ui/Field";
import { BrandGithub, BrandLinkedin } from "../ui/SocialLogos";

export function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const sent = status === "sent";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current || status === "sending") return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      formRef.current.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="07 - Contact"
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
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://linkedin.com/in/harshal-choudhary-a75117259"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white hover:text-[var(--gold)] hover:border-[var(--gold)]/40 transition-colors"
            >
              <BrandLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Harshal-25C"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white hover:text-[var(--gold)] hover:border-[var(--gold)]/40 transition-colors"
            >
              <BrandGithub className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Website"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white hover:text-[var(--gold)] hover:border-[var(--gold)]/40 transition-colors"
            >
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative lg:col-span-3 overflow-hidden rounded-3xl border border-border bg-[oklch(0.16_0.025_270/0.82)] p-7 shadow-[0_30px_90px_-35px_oklch(0_0_0/0.9)] transition-all duration-500 hover:border-[oklch(0.82_0.16_80/0.5)] hover:shadow-[0_0_0_1px_oklch(0.82_0.16_80/0.25),0_28px_90px_-35px_oklch(0.82_0.16_80/0.75)] focus-within:border-[oklch(0.82_0.16_80/0.65)] focus-within:shadow-[0_0_0_1px_oklch(0.82_0.16_80/0.32),0_0_42px_-18px_oklch(0.82_0.16_80/0.9),0_30px_90px_-38px_oklch(0.78_0.16_215/0.75)] space-y-4"
        >
          <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" style={{ background: "radial-gradient(circle at 52% 56%, oklch(0.82 0.16 80 / 0.18), transparent 28%), linear-gradient(135deg, oklch(0.82 0.16 80 / 0.13), transparent 42%, oklch(0.78 0.16 215 / 0.12))" }} />
          <motion.div aria-hidden className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.16 80 / 0.55), oklch(0.78 0.16 215 / 0.36), transparent)", backgroundSize: "220% 100%", mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", maskComposite: "exclude", padding: 1 }} />
          <div className="relative grid md:grid-cols-2 gap-4">
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
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me a little about what you're building..."
              className="mt-2 w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-[var(--gold)]/70 focus:shadow-[0_0_24px_-12px_oklch(0.82_0.16_80/0.9)] transition resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="relative mt-3 w-full overflow-hidden rounded-2xl px-6 py-4 text-base font-bold text-[oklch(0.12_0.02_270)] shadow-[0_18px_55px_-20px_oklch(0.82_0.16_80/0.95)] transition-transform hover:scale-[1.015] active:scale-[0.99]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(90deg,#f59e0b,#fb7185,#c084fc)]" />
            <span aria-hidden className="absolute inset-y-0 left-0 w-[6%] bg-[oklch(0.9_0.12_80/0.5)]" />
            <motion.span
              aria-hidden
              className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-white/30"
              animate={{ x: ["0%", "320%"] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            />
            <AnimatePresence mode="wait">
              <motion.span
                key={status}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="relative inline-block"
              >
                {sent ? "✓ Message sent" : "Send Message"}
              </motion.span>
            </AnimatePresence>
          </button>
          <AnimatePresence>
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="relative text-center text-sm font-medium text-[var(--gold)]"
              >
                Message could not be sent. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </Section>
  );
}
