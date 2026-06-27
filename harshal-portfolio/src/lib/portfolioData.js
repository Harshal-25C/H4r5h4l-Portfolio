import { Code2, Cpu, Database, Layers, Terminal, Cloud } from "lucide-react";

export const aboutStats = [
  { value: "15+", label: "Projects Built" },
  { value: "10+", label: "Certifications" },
  { value: "B.Tech", label: "CSE Graduate" },
  { value: "∞", label: "Curiosity" },
];

export const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    icon: Layers,
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    icon: Terminal,
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "FastAPI"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "MySQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Vercel", "GitHub Actions", "Linux"],
  },
  {
    icon: Cpu,
    title: "Foundations",
    items: ["DSA", "OOP", "System Design", "OS", "DBMS", "Networks"],
  },
];

export const certifications = [
  { name: "Full-Stack Web Development", issuer: "Coursera", year: "2024" },
  { name: "Data Structures & Algorithms", issuer: "NPTEL", year: "2023" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { name: "Python for Data Science", issuer: "IBM", year: "2023" },
  { name: "Database Management Systems", issuer: "NPTEL", year: "2023" },
  { name: "Git & GitHub Essentials", issuer: "Meta", year: "2024" },
];

export const projects = [
  {
    title: "Cinematic Portfolio Engine",
    category: "Frontend",
    tag: "Frontend · Animation",
    desc: "A reusable, animation-first portfolio framework with parallax, 3D tilt and scroll-driven storytelling.",
    stack: ["React", "Framer Motion", "Tailwind"],
    accent: "var(--gold)",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1600&q=80",
  },
  {
    title: "DevTracker — Task & Habit OS",
    category: "Full-Stack",
    tag: "Full-Stack",
    desc: "Self-hosted productivity dashboard with realtime sync, streak analytics, and a clean keyboard-first UX.",
    stack: ["Next.js", "PostgreSQL", "tRPC"],
    accent: "var(--cyan)",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
  },
  {
    title: "EduMate AI",
    category: "AI",
    tag: "AI · Education",
    desc: "AI study companion that summarises lectures, generates quizzes, and adapts to the learner's progress.",
    stack: ["Python", "FastAPI", "OpenAI"],
    accent: "var(--gold)",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
  },
  {
    title: "Pulse — Realtime Chat",
    category: "Backend",
    tag: "Backend · Realtime",
    desc: "Low-latency chat platform with rooms, presence, typing indicators, and end-to-end encrypted DMs.",
    stack: ["Node.js", "WebSockets", "Redis"],
    accent: "var(--cyan)",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1600&q=80",
  },
  {
    title: "Aurora UI Kit",
    category: "Frontend",
    tag: "Frontend · Design System",
    desc: "Glassmorphic component library with motion primitives, accessible by default and theme-aware.",
    stack: ["React", "Radix", "Tailwind"],
    accent: "var(--gold)",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&q=80",
  },
  {
    title: "VisionScan API",
    category: "AI",
    tag: "AI · Vision",
    desc: "Image classification + OCR microservice with caching, rate-limits and a typed SDK.",
    stack: ["Python", "FastAPI", "PyTorch"],
    accent: "var(--cyan)",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80",
  },
];

export const projectCategories = ["All", "Frontend", "Full-Stack", "AI", "Backend"];

export const educationItems = [
  {
    year: "2022 — 2026",
    title: "B.Tech, Computer Science & Engineering",
    where: "University / Institute Name",
    desc: "Coursework in DSA, OS, DBMS, Networks, AI/ML and Software Engineering. Active in coding clubs and open-source.",
  },
  {
    year: "2021 — 2022",
    title: "Senior Secondary (PCM)",
    where: "School Name",
    desc: "Built early foundations in programming with C++ and Python; first hackathons and personal websites.",
  },
  {
    year: "2019 — 2020",
    title: "Secondary School",
    where: "School Name",
    desc: "Discovered computers and the joy of breaking things to understand how they work.",
  },
];

export const floatingShapes = [
  { top: "15%", left: "8%", size: 60, delay: 0, rot: 45 },
  { top: "70%", left: "15%", size: 40, delay: 1, rot: 0 },
  { top: "20%", right: "12%", size: 80, delay: 2, rot: 30 },
  { top: "60%", right: "20%", size: 50, delay: 0.5, rot: 15 },
  { top: "40%", left: "5%", size: 30, delay: 1.5, rot: 60 },
];
