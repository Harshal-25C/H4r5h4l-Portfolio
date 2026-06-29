import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GitBranch, Network, Sparkles } from "lucide-react";

import { skillGroups } from "../../lib/portfolioData";
import { Section } from "../layout/Section";

const skillAssets = import.meta.glob("../../assets/*.{png,webp,svg,jpg,jpeg}", {
  eager: true,
  import: "default",
  query: "?url",
});

const assetByFile = Object.fromEntries(
  Object.entries(skillAssets).map(([path, src]) => [
    path
      .split("/")
      .pop()
      .replace(/\.(png|webp|svg|jpg|jpeg)$/i, "")
      .toLowerCase(),
    src,
  ]),
);

const skillImageNames = {
  "React.js": "react-js",
  "Tailwind CSS": "tailwand-css",
  "Framer Motion": "framer-motion",
  Vite: "Vite.js",
  "Spring Boot": "spring-boot-logo",
  MySQL: "Mysql_logo",
  PostgreSQL: "PostgreSQL",
  Redis: "Redis-Logo",
  H2: "h2-database",
  "Microsoft Azure": "ms-azure",
  "Google Cloud": "google-cloud",
  "CI/CD": "cicd",
  Jenkins: "jenkins-logo",
  "Google Forms": "google-form",
  "Adobe XD": "adobe-xd",
  InVision: "InVision_logo",
  "Apache Maven": "apache-maven",
  DockerHub: "dockerhub",
  Postman: "Postman",
  "VS Code": "vscode",
  "STS (Eclipse)": "sts",
  MobaXterm: "mobaxterm",
  "Android Studio": "android-studio",
  "C++": "cpp",
};

const branchY = [8, 22, 36, 50, 64, 78, 92];

function getSkillImage(skill) {
  const fileName =
    skillImageNames[skill] ??
    skill
      .toLowerCase()
      .replace(/\+\+/g, "pp")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return assetByFile[fileName.toLowerCase()];
}

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(skillGroups.length - 1);
  const activeGroup = skillGroups[activeIndex];
  const totalSkills = useMemo(
    () => skillGroups.reduce((sum, group) => sum + group.items.length, 0),
    [],
  );

  return (
    <Section
      id="skills"
      eyebrow="03 - Skills"
      title={
        <>
          Cinematic <span className="text-gradient-gold">skill map</span>
        </>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 34, rotateX: -8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ transformPerspective: 1400 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,oklch(0.16_0.03_270/0.96),oklch(0.1_0.025_270/0.98))] p-4 shadow-[0_35px_110px_-45px_oklch(0_0_0/0.9)] md:p-6"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-45 [background-image:radial-gradient(oklch(1_0_0/0.16)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div aria-hidden className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
        <div aria-hidden className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[var(--gold)]/16 blur-3xl" />

        <div className="relative hidden min-h-[41rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/18 p-4 backdrop-blur lg:grid lg:grid-cols-[10.5rem_5.5rem_minmax(20rem,24rem)_minmax(0,1fr)] lg:gap-3">
          <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
            {totalSkills} mapped skills
          </div>

          <motion.div
            whileHover={{ rotateY: -8, scale: 1.02 }}
            className="relative z-10 mt-24 flex h-[19rem] flex-col justify-center rounded-2xl border border-[var(--gold)]/35 bg-[linear-gradient(145deg,oklch(0.22_0.035_270/0.78),oklch(0.12_0.025_270/0.74))] p-5 text-left shadow-[0_25px_70px_-36px_oklch(0.82_0.16_80/0.9)] backdrop-blur"
          >
            <Network className="mb-4 h-7 w-7 text-[var(--gold)]" />
            <h3 className="font-display text-2xl font-bold">Skills</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Click a branch to open its tools as an expanded visual board.
            </p>
          </motion.div>

          <svg
            className="pointer-events-none relative z-0 mt-18 h-[31rem] w-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="skillMapGlow">
                <feGaussianBlur stdDeviation="0.6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {skillGroups.map((group, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.path
                  key={group.title}
                  d={`M 0 50 C 38 50, 34 ${branchY[index]}, 100 ${branchY[index]}`}
                  stroke={group.accent}
                  strokeWidth={isActive ? 4.2 : 2.4}
                  strokeLinecap="round"
                  fill="none"
                  opacity={isActive ? 1 : 0.72}
                  filter={isActive ? "url(#skillMapGlow)" : "none"}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: index * 0.05 }}
                />
              );
            })}
          </svg>

          <div className="relative z-20 mt-14 flex min-w-0 flex-col gap-2.5">
            {skillGroups.map((group, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={group.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  layout
                  whileHover={{ x: 7, scale: 1.01 }}
                  animate={{
                    opacity: isActive ? 1 : 0.74,
                    filter: isActive ? "saturate(1.2)" : "saturate(0.75)",
                  }}
                  className="w-full overflow-hidden rounded-2xl border p-3.5 text-left backdrop-blur transition-colors"
                  style={{
                    borderColor: isActive ? group.accent : "oklch(1 0 0 / 0.12)",
                    background: isActive
                      ? `linear-gradient(135deg, ${group.accent}30, oklch(1 0 0 / 0.07))`
                      : "oklch(1 0 0 / 0.055)",
                    boxShadow: isActive ? `0 24px 60px -38px ${group.accent}` : "none",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <GitBranch className="h-5 w-5 shrink-0" style={{ color: group.accent }} />
                    <span className="font-display text-lg font-semibold">{group.title}</span>
                    <span
                      className="ml-auto grid h-8 w-8 place-items-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: group.accent }}
                    >
                      {group.items.length}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 flex flex-wrap gap-2">
                          {group.items.slice(0, 5).map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-muted-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                          {group.items.length > 5 ? (
                            <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-muted-foreground">
                              +{group.items.length - 5} more
                            </span>
                          ) : null}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            layout
            className="relative z-10 my-4 min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,oklch(0.17_0.03_270/0.78),oklch(0.08_0.02_270/0.84))] p-4 shadow-2xl shadow-black/30"
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-28 opacity-50"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${activeGroup.accent}55, transparent 62%)`,
              }}
            />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: activeGroup.accent }}
                  />
                  Expanded branch
                </div>
                <AnimatePresence mode="wait">
              <motion.h3
                    key={activeGroup.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-2 font-display text-2xl font-bold"
                  >
                    {activeGroup.title}
                  </motion.h3>
                </AnimatePresence>
              </div>
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-base font-bold text-white shadow-lg"
                style={{
                  backgroundColor: activeGroup.accent,
                  boxShadow: `0 18px 40px -22px ${activeGroup.accent}`,
                }}
              >
                {activeGroup.items.length}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.title}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.32 }}
                className="relative mt-4 grid grid-cols-2 gap-3 2xl:grid-cols-3"
              >
                {activeGroup.items.map((skill, index) => {
                  const image = getSkillImage(skill);

                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 16, rotateX: -18 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ delay: index * 0.035, duration: 0.34 }}
                      whileHover={{ y: -8, rotateX: 8, rotateY: -8, scale: 1.04 }}
                      style={{ transformPerspective: 900 }}
                      className="group relative min-h-24 min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-2.5 text-center shadow-[0_16px_45px_-34px_oklch(1_0_0/0.8)] backdrop-blur"
                    >
                      <div
                        aria-hidden
                        className="absolute inset-x-3 top-3 h-14 rounded-full opacity-25 blur-2xl transition-opacity group-hover:opacity-50"
                        style={{ backgroundColor: activeGroup.accent }}
                      />
                      <div className="relative mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/90 p-1.5 shadow-lg">
                        {image ? (
                          <img
                            src={image}
                            alt=""
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <span className="font-display text-xl font-bold text-slate-950">
                            {skill.slice(0, 2)}
                          </span>
                        )}
                      </div>
                      <div className="relative mt-2 min-h-7 break-words content-center text-xs font-semibold leading-tight text-white">
                        {skill}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="relative grid gap-4 p-4 lg:hidden">
          <div className="rounded-2xl border border-[var(--gold)]/35 bg-white/8 p-5">
            <Network className="mb-3 h-5 w-5 text-[var(--gold)]" />
            <div className="font-display text-2xl font-bold">Skills</div>
          </div>
          {skillGroups.map((group, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.button
                key={group.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="rounded-2xl border bg-white/7 p-4 text-left backdrop-blur"
                style={{
                  borderColor: isActive ? group.accent : "oklch(1 0 0 / 0.12)",
                }}
              >
                <div className="flex items-center gap-3">
                  <GitBranch className="h-4 w-4" style={{ color: group.accent }} />
                  <span className="font-display text-lg font-semibold">{group.title}</span>
                  <span
                    className="ml-auto grid h-7 w-7 place-items-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: group.accent }}
                  >
                    {group.items.length}
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {group.items.map((skill) => {
                          const image = getSkillImage(skill);

                          return (
                            <span
                              key={skill}
                              className="rounded-2xl border border-white/15 bg-white/8 p-3 text-center"
                            >
                              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/90 p-2">
                                {image ? (
                                  <img src={image} alt="" className="h-full w-full object-contain" />
                                ) : (
                                  <span className="text-sm font-bold text-slate-950">
                                    {skill.slice(0, 2)}
                                  </span>
                                )}
                              </span>
                              <span className="mt-2 block text-xs font-semibold">{skill}</span>
                            </span>
                          );
                        })}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
