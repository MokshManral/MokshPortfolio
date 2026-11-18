export const headerData = {
  logo: "Moksh Manral",
  badge: "Open to Opportunities",
  links: [
    { id: "about", label: "About" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],
};

export const heroData = {
  location: "Aspiring Data Engineer • Gurugram, India",

  title: {
    line1: "Building",
    line2: "Data",
    highlight: "Driven Solutions",
  },

  description:
    "I'm a Computer Science Engineering student passionate about Data Engineering, backend development, and building practical software. I work with Python, SQL, ETL pipelines, FastAPI, and modern web technologies to turn ideas and raw data into useful solutions.",

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
    { value: "4th", label: "Year CSE Student" },
    { value: "04+", label: "Featured Projects" },
    { value: "100%", label: "Learning Mindset" },
  ],
};

export const timeline = [
  {
    year: "2026 - Present",
    role: "Data Engineering & Backend Development",
    co: "Building ShopFlow Analytics and practical data pipelines",
  },
  {
    year: "2025 - 2026",
    role: "Full Stack Developer",
    co: "Building AI-powered and web-based applications",
  },
  {
    year: "2023 - Present",
    role: "B.Tech Computer Science Engineering",
    co: "University",
  },
  {
    year: "2021 - 2023",
    role: "Senior Secondary Education",
    co: "Royal Public Sr. Sec. School, Gurugram",
  },
];

export const journey = [
  ["a1f9c2", "Started with HTML, CSS and JavaScript"],
  ["b3e07d", "Built responsive websites"],
  ["c58a11", "Learned React and component architecture"],
  ["d9021f", "Started backend development with Python"],
  ["e44b7c", "Learned FastAPI and REST APIs"],
  ["f10d3a", "Implemented authentication with JWT"],
  ["a77c9e", "Integrated PostgreSQL and SQLAlchemy"],
  ["b2f4d8", "Built AI-powered web applications"],
  ["c9e1a0", "Developed TailorCV"],
  ["d6b8f2", "Started exploring Data Engineering"],
  ["e5a3c1", "Built ShopFlow Analytics ETL pipeline"],
  ["HEAD", "Preparing for Data Engineer opportunities"],
];

export const stack = [
  {
    heading: "Languages",
    pills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    heading: "Data Engineering",
    pills: [
      { name: "ETL Pipelines" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Data Cleaning" },
      { name: "Data Validation" },
      { name: "Medallion Architecture" },
    ],
  },
  {
    heading: "Frontend",
    pills: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Vite" }],
  },
  {
    heading: "Backend",
    pills: [
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "JWT" },
      { name: "SQLAlchemy" },
      { name: "Pydantic" },
    ],
  },
  {
    heading: "Database",
    pills: [{ name: "PostgreSQL" }, { name: "SQL" }],
  },
  {
    heading: "Cloud & Tools",
    pills: [
      { name: "AWS (Learning)" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
];

export const projects = [
  {
    title: "ShopFlow Analytics",
    desc: "An end-to-end e-commerce data engineering project using the Brazilian Olist dataset. Implements data ingestion, profiling, validation, and Bronze, Silver, and Gold transformations to create analytics-ready datasets.",
    stack: ["Python", "Pandas", "SQL", "ETL", "Medallion Architecture"],
    tag: "Data Engineering",
    year: "2026",
    link: "https://github.com/MokshManral/ShopFlow",
  },
  {
    title: "TailorCV",
    desc: "An AI-powered resume tailoring platform that analyzes resumes against job descriptions, identifies matching and missing keywords, generates improvement suggestions, and helps users create role-specific resumes.",
    stack: ["React", "FastAPI", "Gemini API", "Python", "Tailwind CSS"],
    tag: "AI Full Stack Product",
    year: "2026",
    link: "https://tailor-cv-jet.vercel.app/",
  },
  {
    title: "EcoCycle",
    desc: "A smart waste management platform focused on waste segregation, recycling recommendations, e-waste management, and streamlined waste collection workflows.",
    stack: ["React", "FastAPI", "Python", "Firebase", "AWS", "Tailwind CSS"],
    tag: "Sustainability Platform",
    year: "2026",
    link: "https://main.d1cxpw7q8iu6oo.amplifyapp.com/",
  },
  {
    title: "SupportSphere",
    desc: "A role-based customer support and ticket management platform designed to streamline customer query handling. It enables admins to manage support operations, assign tickets to employees, track issue status, and monitor resolution workflows.",
    stack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Tailwind CSS",
    ],
    tag: "Full Stack Product",
    year: "2026",
    link: "https://support-sphere-wine.vercel.app/                                           ",
  },
];

export const learningFeed = {
  month: "November 2026",
  commits: 7,
  author: "MokshManral",
  updates: [
    "Built an e-commerce ETL pipeline using Python and Pandas",
    "Implemented Bronze, Silver and Gold data layers",
    "Performed data profiling and validation",
    "Created customer, seller and sales analytics datasets",
    "Worked with real-world Olist transactional data",
    "Improved SQL and data transformation skills",
    "Exploring AWS data engineering services",
  ],
};

export const interests = [
  "Data Engineering",
  "Backend Engineering",
  "Python Development",
  "ETL Pipeline Development",
  "AWS & Cloud Technologies",
  "Artificial Intelligence",
  "Database Systems",
  "Software Architecture",
  "Open Source",
  "Problem Solving",
];

export const whyWorkWithMe = {
  points: [
    "I enjoy learning technologies by building practical projects",
    "I focus on understanding how systems work behind the scenes",
    "I value clean, maintainable and reliable code",
    "I enjoy working with real-world datasets and solving data problems",
    "I continuously improve through experimentation and hands-on practice",
  ],

  quote:
    "I believe the best way to become an engineer is to build real things, understand the problems behind them, and keep improving with every iteration.",
};

export const currentLearning = [
  "Advanced Python",
  "SQL and Query Optimization",
  "Data Engineering Fundamentals",
  "ETL Pipeline Development",
  "AWS S3",
  "AWS Glue",
  "Amazon Athena",
  "Data Modeling",
  "Docker",
  "System Design Basics",
];

export const funFacts = [
  "Coffee-powered coding sessions",
  "Love building projects from scratch",
  "Enjoy exploring how data moves through systems",
  "Prefer learning by implementing",
  "Always experimenting with new technologies",
];

export const contactData = {
  title: "Let's Connect",

  heading: {
    line1: "Let's build",
    highlight: "something",
    line2: "meaningful",
    line3: "together.",
  },

  links: [
    {
      label: "mokshmanral628@gmail.com",
      href: "mailto:mokshmanral628@gmail.com",
    },
    {
      label: "github.com/MokshManral",
      href: "https://github.com/MokshManral",
    },
    {
      label: "linkedin.com/in/mokshsingh",
      href: "https://www.linkedin.com/in/mokshsingh/",
    },
  ],
};

export const faqData = [
  {
    question: "Are you currently looking for opportunities?",
    answer:
      "Yes, I'm actively looking for entry-level Data Engineering, Backend Development, and Software Engineering internship opportunities.",
  },
  {
    question: "What technologies do you primarily work with?",
    answer:
      "Python, SQL, Pandas, FastAPI, PostgreSQL, React, and Git. I'm currently expanding my knowledge of AWS.",
  },
  {
    question: "What are you currently building?",
    answer:
      "ShopFlow Analytics, an e-commerce data engineering pipeline built around real-world transactional data using Medallion Architecture.",
  },
  {
    question: "Are you more interested in frontend or backend development?",
    answer:
      "I have full-stack development experience, but my current focus is on Data Engineering, backend systems, data pipelines, and cloud technologies.",
  },
  {
    question: "What are your career goals?",
    answer:
      "My immediate goal is to become job-ready for an entry-level Data Engineer role, gain practical industry experience, and build scalable data solutions.",
  },
];
