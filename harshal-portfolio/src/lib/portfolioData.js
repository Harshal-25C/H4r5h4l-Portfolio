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

const handDrawSourceUrl = "https://github.com/Harshal-25C/HandDraw-Studio";
const handDrawCaseStudyUrl = "https://harshal-25c.github.io/HandDraw-Studio/";

export const projects = [
  {
    title: "Hand-Draw Studio",
    category: "Frontend",
    tag: "Frontend · Design System",
    desc: "Hand-Draw Studio is an interactive Air Canvas application that enables real-time drawing using hand gestures and webcam input. Built with MediaPipe Hands, featuring smooth stroke rendering, color tools, undo/redo, eraser mode, and image export.",
    stack: ["HTML5 Canvas", "CSS3 Animation", "Vanilla JavaScript (ES6)", "Framer-Motion", "MediaPipe Camera Utils", "MediaPipe Drawing Utils", "Google MediaPipe Hands", "GitHub Pages"],
    accent: "var(--gold)",
    sourceUrl: handDrawSourceUrl,
    caseStudyUrl: handDrawCaseStudyUrl,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1600&q=80",
  },
  {
    title: "MediBook - An Online Appointment Booking System",
    category: "Full-Stack",
    tag: "Full-Stack",
    desc: "MediBook is a full-stack Online Appointment Booking System that enables patients to search for healthcare providers (doctors, consultants, therapists, specialists), view available time slots, and book appointments — all from a single unified platform.",
    stack: ["Java", "Spring-Boot", "Microservices", "Docker", "JWT", "Open-Feign", "RabbitMQ", "React.Js", "HTML", "CSS", "JavaScript", "Jenkins", "AWS", "CI/CD Pipeline", "JUnit", "Mockito", "Redis", "OAuth", "Razorpay"],
    accent: "var(--cyan)",
    sourceUrl: "https://github.com/Harshal-25C/MediBook-Microservices",
    caseStudyUrl: "https://medibook-client-beryl.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
  },
  {
    title: "Quantity Measurement Application",
    category: "Full-Stack",
    tag: "Full-Stack",
    desc: "A fully-featured Spring-Boot Microservice Architecture for performing quantity measurement operations — Add, Subtract, Multiply, Divide, Compare & Convert — across Length, Weight, Volume, and Temperature units. Built with enterprise-grade security, service discovery, and full operation history tracking.",
    stack: ["Java", "SpringBoot", "Microservices", "Docker", "JWT", "Open-Feign", "RabbitMQ", "React.Js", "HTML", "CSS", "TypeScript", "Jenkins", "AWS", "CI/CD Pipeline", "JUnit", "Mockito", "OAuth", "GitHub-API"],
    accent: "var(--gold)",
    sourceUrl: "https://github.com/Harshal-25C/QuantityMeasurementApp",
    caseStudyUrl: "https://quantity-measurement-app-frontend-lyart.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
  },
  {
    title: "HkMusicPlayerApp - An Android Music Player App",
    category: "Android-App",
    tag: "Android-Dev · Realtime",
    desc: "HK Music Player is a simple yet efficient Android music player application built using Java. It allows users to play, pause, seek, and adjust the volume of their favorite songs with a user-friendly interface.",
    stack: ["Java", "Android-Studio", "Gradle", "XML", "Android SDK", "USB Debugging", "JUnit", "Flutter", "Kotlin(Basics)"],
    accent: "var(--cyan)",
    sourceUrl: "https://github.com/Harshal-25C/HkMusicPlayerApp",
    caseStudyUrl: "https://github.com/Harshal-25C/HkMusicPlayerApp",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1600&q=80",
  },
  {
    title: "H4r5h4l-Portfolio - My Portfolio",
    category: "Frontend",
    tag: "Frontend · Animation",
    desc: "Glassmorphic component library with motion primitives, accessible by default and theme-aware.",
    stack: ["React.Js", "Vite", "HTML", "Tailwind CSS", "JavaScript", "Framer-Motion", "Json", "Radix"],
    accent: "var(--gold)",
    sourceUrl: "https://github.com/Harshal-25C/H4r5h4l-Portfolio",
    caseStudyUrl: "https://github.com/Harshal-25C/H4r5h4l-Portfolio",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&q=80",
  },
  {
    title: "QuickSlot - An Online Reservation System",
    category: "Backend",
    tag: "Backend · Vision",
    desc: "Developed a command-line-based Reservation Interface in Java. Integrating JDBC for MySQL database management to handle train bookings & Implemented features for record insertion, deletion, and retrieval, ensuring robust data handling.",
    stack: ["Java", "MySQL", "JDBC", "Command-Line"],
    accent: "var(--cyan)",
    sourceUrl: "https://github.com/Harshal-25C/QuickSlot_H_C_",
    caseStudyUrl: "https://github.com/Harshal-25C/QuickSlot_H_C_",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80",
  },
];

export const projectCategories = ["All", "Frontend", "Full-Stack", "AI", "Backend"];

export const educationItems = [
  {
    year: "2022 — 2026",
    title: "B.Tech, Computer Science & Engineering",
    where: "Technocrats Institute of Technology, Bhopal (M.P)",
    desc: "Coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Cloud Computing, and Artificial Intelligence. Strengthened academic foundations through enterprise-grade Java Full-Stack Development, Spring Boot, Microservices, Android Development, Cloud Computing, DevOps, and Generative AI, delivering scalable applications backed by industry certifications and hands-on project experience.",
  },
  {
    year: "2021 — 2022",
    title: "Higher Secondary Education (PCM) (Class XII)",
    where: "Saraswati Vidya Mandir, Burhanpur (M.P)",
    desc: "Specialized in Physics, Chemistry, and Mathematics (PCM), strengthening analytical reasoning and quantitative problem-solving skills.",
  },
  {
    year: "2019 — 2020",
    title: "Secondary School Education (Class X)",
    where: "Saraswati Vidya Mandir, Burhanpur (M.P)",
    desc: "Established a strong academic foundation with distinction in Mathematics and Science, demonstrating consistent academic excellence.",
  },
];

export const floatingShapes = [
  { top: "15%", left: "8%", size: 60, delay: 0, rot: 45 },
  { top: "70%", left: "15%", size: 40, delay: 1, rot: 0 },
  { top: "20%", right: "12%", size: 80, delay: 2, rot: 30 },
  { top: "60%", right: "20%", size: 50, delay: 0.5, rot: 15 },
  { top: "40%", left: "5%", size: 30, delay: 1.5, rot: 60 },
];
