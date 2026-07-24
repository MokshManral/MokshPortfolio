import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaJava,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import {
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPostman,
} from "react-icons/si";

import { MdApi,MdSecurity,MdEmail } from "react-icons/md";

export const headerData = {
  logo: "Moksh Singh",
  badge: "Available for Work",
  links: [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],
};

export const heroData = {
  location: "Backend & Full Stack Developer · Gurugram",

  title: {
    line1: "Building",
    line2: "Software",
    highlight: "That Solves Problems",
  },

  description:
    "Computer Science undergraduate passionate about building scalable backend systems, modern web applications, and continuously improving through real-world projects.",

  buttons: [
    {
      label: "View My Work →",
      target: "work",
      className: "btn-primary",
    },
    {
      label: "Get In Touch ↗",
      target: "contact",
      className: "btn-ghost",
    },
  ],

  stats: [
    {
      value: "4th",
      label: "Year Student",
    },
    {
      value: "∞",
      label: "Learning Mindset",
    },
  ],
};

export const timeline = [
  {
    year: "2026-Present",
    role: "Full Stack Developer",
    co: "Building CareerBridge & Personal Projects",
  },
  {
    year: "2025-2026",
    role: "Learning React, FastAPI & System Design",
    co: "Self Learning",
  },
  {
    year: "2023-Present",
    role: "B.Tech CSE",
    co: "University",
  },
  {
    year: "2021-2023",
    role: "Senior Secondary Education",
    co: "Royal Public Sr. Sec. School, Gurugram",
  },
];

export const journey = [
  ["a1f9c2", "Started with HTML, CSS, JavaScript"],
  ["b3e07d", "Built responsive websites"],
  ["c58a11", "Learned React"],
  ["d9021f", "Built portfolio website"],
  ["e44b7c", "Started backend development"],
  ["f10d3a", "Learned FastAPI"],
  ["a77c9e", "Built authentication APIs"],
  ["b2f4d8", "Integrated PostgreSQL"],
  ["c9e1a0", "Building CareerBridge"],
  ["d6b8f2", "Learning data engineering"],
  ["HEAD", "Preparing for software engineering internships"],
];

export const values = [
  "Always Learning",
  "Build Before Perfect",
  "Write Maintainable Code",
  "Solve Real Problems",
  "Stay Consistent",
  "Keep Improving",
];

export const stack = [
  {
    heading: "Languages",
    pills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: SiPostgresql },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    heading: "Frontend",
    pills: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    heading: "Backend",
    pills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST API", icon: MdApi },
      { name: "JWT", icon: MdSecurity },
      { name: "SQLAlchemy", icon: SiPython },
      { name: "Pydantic", icon: SiPython },
    ],
  },
  {
    heading: "Database",
    pills: [{ name: "PostgreSQL", icon: SiPostgresql }],
  },
  {
    heading: "Tools",
    pills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: FaCode },
    ],
  },
];

export const projects = [
  {
    title: "MutiClip",
    desc: "Chrome extension that lets users copy, store, and paste multiple clipboard items with a fast and intuitive workflow.",
    stack: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    tag: "Extension",
    year: "2026",
    link: "https://github.com/MokshManral/MultiClip-Extension"
  },
  {
    title: "Noise Removal",
    desc: "Image denoising project implementing Gaussian, Median, and Bilateral filtering techniques using OpenCV with visualization through Matplotlib.",
    stack: ["Python", "OpenCV", "NumPy", "Matplotlib"],
    tag: "Computer Vision",
    year: "2026",
    link: 'https://github.com/MokshManral/NoiseRemoval'
  },
  {
    title: "CareerBridge",
    desc: "AI-powered internship application tracker featuring ATS resume analysis, resume match scoring, authentication, application management, and analytics.",
    stack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Tailwind CSS"
    ],
    tag: "Full Stack",
    year: "2026",
    link: "https://github.com/MokshManral/CareerBridge"
  },
];

export const learningFeed = {
  month: "July 2026",
  commits: 7,
  author: "moksh",
  updates: [
    "Built JWT authentication with FastAPI",
    "Integrated PostgreSQL using SQLAlchemy",
    "Learned Docker basics",
    "Built CareerBridge backend",
    "Improved React component architecture",
    "Solved LeetCode problems consistently",
    "Started learning Data Engineering",
  ],
};

export const interests = [
  "Full Stack Development",
  "Backend Engineering",
  "Artificial Intelligence",
  "Data Engineering",
  "Software Architecture",
  "Open Source",
  "Startups",
  "Problem Solving",
];

export const whyWorkWithMe = {
  points: [
    "I enjoy learning new technologies quickly",
    "I prefer building complete projects over watching tutorials",
    "I value writing clean, maintainable code",
    "I continuously improve through hands-on practice",
    "I enjoy solving challenging programming problems",
  ],
  quote:
  "Every project is an opportunity to learn something new, write cleaner code, and become a better engineer.",
};

export const currentLearning = [
  { icon: "⚛️", title: "Advanced React" },
  { icon: "🏗️", title: "Backend Architecture" },
  { icon: "📊", title: "Data Engineering Fundamentals" },
  { icon: "🗄️", title: "SQL Optimization" },
  { icon: "🐳", title: "Docker" },
  { icon: "🔐", title: "Authentication Systems" },
  { icon: "🧠", title: "System Design Basics" },
  { icon: "🧩", title: "Data Structures & Algorithms" },
];

export const skills = [
  {
    cat: "Languages",
    items: [
      ["Java", 92],
      ["JavaScript", 90],
      ["Python", 88],
    ],
  },
  {
    cat: "Frontend",
    items: [
      ["React", 92],
      ["HTML/CSS", 95],
      ["Tailwind CSS", 90],
    ],
  },
  {
    cat: "Backend",
    items: [
      ["FastAPI", 88],
      ["SQLAlchemy", 85],
      ["REST APIs", 90],
    ],
  },
  {
    cat: "Database & Tools",
    items: [
      ["PostgreSQL", 84],
      ["Git & GitHub", 90],
      ["Docker", 75],
    ],
  },
];

export const futureGoals = [
  { icon: "🏗️", title: "Master System Design" },
  { icon: "⚙️", title: "Become a Backend Engineer" },
  { icon: "☁️", title: "Learn Cloud Technologies (AWS)" },
  { icon: "🌍", title: "Contribute to Open Source" },
  { icon: "🚀", title: "Build SaaS Products" },
  { icon: "💼", title: "Crack Software Engineering Interviews" },
  { icon: "📊", title: "Become Proficient in Data Engineering" },
];

export const funFacts = [
  { icon: "☕", text: "Coffee-powered coding sessions" },
  { icon: "💻", text: "Love building projects from scratch" },
  { icon: "🧩", text: "Enjoy debugging challenging problems" },
  { icon: "📚", text: "Always learning something new" },
  { icon: "🚀", text: "Passionate about creating useful software" },
];

export const contactData = {
  title: "Lets Connect",
  
  heading: {
    line1: "Let's build",
    highlight: "great",
    line2: "things",
    line3: "together.",
  },
  
  links: [
    {
      label: "mokshmanral628@gmail.com",
      href: "mailto:mokshmanral628@gmail.com",
      icon: MdEmail,
    },
    {
      label: "github.com/MokshManral",
      href: "https://github.com/MokshManral",
      icon: FaGithub,
    },
    {
      label: "linkedin.com/in/mokshmanral",
      href: "https://linkedin.com/in/mokshmanral",
      icon: FaLinkedin,
    },
  ],
};

export const faqData = [
  {
    question: "Are you currently looking for internships?",
    answer:
    "Yes, I'm actively seeking Software Engineering, Backend, and Full Stack internship opportunities.",
  },
  {
    question: "What technologies do you enjoy working with?",
    answer:
    "React, FastAPI, PostgreSQL, Java, and Python.",
  },
  {
    question: "What are you currently learning?",
    answer:
    "Data Engineering, scalable backend development, Docker, and advanced DSA.",
  },
  {
    question: "Do you enjoy backend or frontend more?",
    answer:
    "While I enjoy full-stack development, I'm increasingly interested in backend engineering and designing scalable systems.",
  },
];