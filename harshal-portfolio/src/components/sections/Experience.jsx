import { motion } from "framer-motion";
import { BriefcaseBusiness, Building2, CalendarDays, Code2 } from "lucide-react";

import capgeminiOffice from "../../assets/capgemini-office.jpg";
import oasisInfobyte from "../../assets/oasis-infobyte.png";
import { Section } from "../layout/Section";

const experiences = [
  {
    role: "IT Trainee - Full-Stack Java Development + Python Gen-AI",
    company: "Capgemini",
    period: "December 2025 - May 2026",
    description:
      "Successfully completed Capgemini's Full Stack Java Development, Python, and Generative AI training program, gaining hands-on experience in enterprise application development, cloud technologies, microservices, and DevOps practices.",
    image: capgeminiOffice,
    highlights: [
      "Core Java, OOP, Collections, Java 8, Streams API, Lambda Expressions, Exception Handling, File I/O, Design Patterns, JDBC, MySQL, and DSA.",
      "Spring Core, Dependency Injection, IoC, Bean Lifecycle, Spring MVC, Spring AOP, Spring Boot REST APIs, Spring Data JPA, Hibernate, Spring Security, and JWT Authentication.",
      "Microservices architecture using Spring Cloud, Eureka Service Discovery, API Gateway, OpenFeign, Config Server, and Resilience4j.",
      "Cloud and DevOps practice with AWS EC2, Docker, Kubernetes, Jenkins CI/CD, Vercel, and Netlify deployment.",
      "Python fundamentals, automation concepts, and Generative AI applications.",
    ],
    stack: ["Java", "Spring Boot", "Microservices", "AWS", "Docker", "Kubernetes", "Jenkins", "Python", "Gen-AI"],
  },
  {
    role: "Internship - Full-Stack Java Developer",
    company: "Oasis Infobyte",
    period: "March 2024 - April 2024",
    description:
      "Built a File Sharing Interface project, applying OOP concepts, backend development, and UI integration to create a simple and effective platform for sharing files.",
    image: oasisInfobyte,
    highlights: [
      "Designed backend features with Java, Spring Boot, JDBC, Hibernate, and MySQL.",
      "Integrated a clean UI using HTML, CSS, JavaScript, and JSON-based data flow.",
      "Practiced full-stack development by connecting database operations, service logic, and user-facing screens.",
    ],
    stack: ["Java", "Spring Boot", "JDBC", "Hibernate", "MySQL", "HTML", "CSS", "JavaScript", "JSON"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 - Experience"
      title={
        <>
          Practical <span className="text-gradient-gold">experience</span>
        </>
      }
    >
      <div className="relative">
        <div className="absolute left-4 top-6 bottom-6 hidden w-px bg-gradient-to-b from-transparent via-[var(--gold)]/50 to-transparent md:block" />
        <div className="space-y-5 md:pl-12">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={experience.image ? { y: -5, scale: 1.005 } : { y: -4 }}
              className={`group relative overflow-hidden rounded-3xl border border-border p-5 shadow-[var(--shadow-elevated)] transition-all duration-500 hover:border-[var(--gold)]/45 hover:shadow-[0_26px_90px_-40px_oklch(0.82_0.16_80/0.8)] md:p-6 ${
                experience.image
                  ? "min-h-[27rem] bg-black md:min-h-[24rem]"
                  : "bg-[linear-gradient(160deg,oklch(0.19_0.025_270/0.82),oklch(0.13_0.02_270/0.72))]"
              }`}
            >
              {experience.image ? (
                <>
                  <motion.img
                    src={experience.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity duration-700 group-hover:opacity-95"
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[linear-gradient(115deg,oklch(0.08_0.025_270/0.84),oklch(0.12_0.025_270/0.56)_48%,oklch(0.1_0.02_270/0.22))]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,oklch(0.82_0.16_80/0.18),transparent_34%),linear-gradient(to_top,oklch(0.08_0.018_270/0.74),transparent_58%)]"
                  />
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,oklch(1_0_0/0.13)_42%,transparent_64%)] opacity-0"
                    whileHover={{ x: ["-120%", "120%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                  />
                </>
              ) : (
                <div
                  aria-hidden
                  className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.16_80/0.2),transparent_66%)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                />
              )}
              <div
                className={`relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between ${
                  experience.image
                    ? "h-full rounded-[1.35rem] border border-white/15 bg-[oklch(0.1_0.018_270/0.24)] p-4 shadow-2xl shadow-black/25 backdrop-blur-[1.5px] md:p-5"
                    : ""
                }`}
              >
                <div className="max-w-3xl">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground md:text-sm">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.82_0.16_80/0.12)] text-[var(--gold)] ring-1 ring-[oklch(0.82_0.16_80/0.28)]">
                      <BriefcaseBusiness className="h-4 w-4" />
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[var(--gold)]" />
                      {experience.company}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-[var(--gold)]" />
                      {experience.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground md:text-2xl">
                    {experience.role}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed md:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
                      <Code2 className="h-4 w-4" />
                      Technical Skills & Learning
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed md:text-[0.95rem]">
                      {experience.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                  {experience.stack.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1.5 text-xs ${
                        experience.image
                          ? "border-white/20 bg-white/10 text-white shadow-sm backdrop-blur"
                          : "border-border bg-secondary/60 text-secondary-foreground"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
