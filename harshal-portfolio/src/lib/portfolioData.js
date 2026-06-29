import awsCloudFoundationsLogo from "../assets/AWS-Cloud-Foundations.png";
import azureDeveloperAssociateLogo from "../assets/Azure-Developer-Associate.png";
import azureFundamentalsLogo from "../assets/Azure-Fundamentals.png";
import githubActionsLogo from "../assets/GitHub-Actions.png";
import githubFoundationsLogo from "../assets/GitHub-Foundations.png";
import ibmDataFundamentalsLogo from "../assets/IBM-Data-Fundamentals.png";
import lumenoreLogo from "../assets/Lumenore.jpg";
import oracleFoundationsLogo from "../assets/Oracle-Foundations-Associate.png";
import sapLogo from "../assets/SAP.png";
import wiproLogo from "../assets/Wipro.png";

export const aboutStats = [
  { value: "15+", label: "Projects Built" },
  { value: "10+", label: "Certifications" },
  { value: "B.Tech", label: "CSE Graduate" },
  { value: "∞", label: "Curiosity" },
];

export const skillGroups = [
  {
    title: "Programming Language",
    accent: "#c43ddb",
    items: ["Java", "C++", "Python"],
  },
  {
    title: "Web Technologies",
    accent: "#2f92de",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    title: "Frameworks",
    accent: "#18b6a7",
    items: ["Spring Boot", "Mockito", "JUnit"],
  },
  {
    title: "Database",
    accent: "#7b22d9",
    items: ["MySQL", "H2", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    accent: "#f0813b",
    items: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Linux", "Ubuntu", "Vercel"],
  },
  {
    title: "UI/UX",
    accent: "#f5bf22",
    items: ["Figma", "Whimsical", "Canva", "Adobe XD", "Wireframing", "Google Forms", "InVision", "Zeplin"],
  },
  {
    title: "Other Build Tools",
    accent: "#df3f59",
    items: ["Git", "GitHub", "Apache Maven", "DockerHub", "Postman", "VS Code", "STS (Eclipse)", "MobaXterm", "Gradle", "Android Studio"],
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    year: "27th March 2025",
    logo: azureFundamentalsLogo,
    certificate: "/certificates/Microsoft Azure Fundamentals.pdf",
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    year: "17th June 2025",
    logo: azureDeveloperAssociateLogo,
    certificate: "/certificates/Microsoft Azure Developer Associate.pdf",
  },
  {
    name: "GitHub Foundations",
    issuer: "GitHub",
    year: "16th June 2024",
    logo: githubFoundationsLogo,
    certificate: "/certificates/GitHub Foundations Certificate.pdf",
  },
  {
    name: "GitHub Actions",
    issuer: "GitHub",
    year: "23rd June 2024",
    logo: githubActionsLogo,
    certificate: "/certificates/GitHub Actions Certificate.pdf",
  },
  {
    name: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    year: "02 September 2025",
    logo: oracleFoundationsLogo,
    certificate: "/certificates/Oracle OCI Associate.pdf",
  },
  {
    name: "AWS Academy - Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "23rd May 2025",
    logo: awsCloudFoundationsLogo,
    certificate: "/certificates/AWS_Academy-Cloud-Fundamentals.pdf",
  },
  {
    name: "Wipro - Java Full Stack Developer",
    issuer: "Wipro",
    year: "October 2025",
    logo: wiproLogo,
    certificate: "/certificates/Wipro-Full-Stack-Java-Dev-HC.pdf",
  },
  {
    name: "Lumenore Fundamentals",
    issuer: "Lumenore",
    year: "27th December 2023",
    logo: lumenoreLogo,
    certificate: "/certificates/lumenore-certificate(Fundamentles).pdf",
  },
  {
    name: "Lumenore Certified: Fundamentals of BI & Analytics",
    issuer: "Lumenore",
    year: "25th December 2023",
    logo: lumenoreLogo,
    certificate: "/certificates/lumenore-certificate(BI & Analytics).pdf",
  },
  {
    name: "IBM Certified: Data Fundamentals",
    issuer: "IBM",
    year: "31th January 2025",
    logo: ibmDataFundamentalsLogo,
    certificate: "/certificates/IBM Data Fundamental Certificate.pdf",
  },
  {
    name: "SAP - Getting Started With Web Development",
    issuer: "SAP",
    year: "28th May 2025",
    logo: sapLogo,
    certificate: "/certificates/SAP-WEB-DEV.pdf",
  },
  {
    name: "Lumenore Certified: Deep Dive",
    issuer: "Lumenore",
    year: "27th December 2023",
    logo: lumenoreLogo,
    certificate: "/certificates/lumenore-certificate (Deep drive).pdf",
  },
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
