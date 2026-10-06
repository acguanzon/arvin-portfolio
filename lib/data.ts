export const profile = {
  name: "Arvin John D. Guanzon",
  shortName: "ARVIN_GUANZON",
  role: "BSIT 3rd Year Student & Developer",
  tagline: "I build things you can touch.",
  sub: "Backend + Android developer crafting web apps, native Kotlin apps, REST APIs and database-driven systems.",
  location: "Philippines — open to internships & collabs",
  email: "guanzonarvinjohn@gmail.com",
  photo: "/profile.jpg",
  socials: [
    { label: "GitHub", href: "https://github.com/acguanzon" },
    { label: "Instagram", href: "https://www.instagram.com/arvin.guanzon.3388/" },
    { label: "Email", href: "mailto:guanzonarvinjohn@gmail.com" },
  ],
};

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["PHP", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web Technologies",
    items: ["HTML5", "CSS3", "Bootstrap", "Git"],
  },
  {
    title: "Backend & Frameworks",
    items: ["MySQL", "MVC Architecture", "Database Design", "REST APIs"],
  },
  {
    title: "AI & Productivity",
    items: ["Prompt Engineering", "AI-Assisted Coding"],
  },
  {
    title: "Mobile Development",
    items: ["Kotlin", "Jetpack Compose", "Android Studio", "Room Database", "Gradle", "Firebase"],
  },
];

export const softSkills = ["Leadership", "Problem Solving", "Teamwork", "Research"];

export const skills = [
  { name: "PHP / MySQL / MVC", level: 85 },
  { name: "JavaScript / HTML / CSS", level: 82 },
  { name: "Java / Python", level: 78 },
  { name: "REST APIs / Database Design", level: 84 },
  { name: "Git / Bootstrap", level: 80 },
  { name: "Prompt Engineering", level: 90 },
  { name: "Kotlin / Jetpack Compose", level: 80 },
  { name: "Android / Room / Firebase", level: 78 },
  { name: "Three.js / React (learning fast)", level: 65 },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  long: string;
  role: string;
  stack: string[];
  learnings: string[];
  tags: string[];
  image?: string;
  icon?: "mobile" | "terminal";
  shape?: "torusKnot" | "icosahedron" | "torus";
  color: string;
  href: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "recycling-tracker",
    index: "01",
    title: "Recycling Tracker",
    description: "Login-based tracker app for monitoring recycling activity. Built with form auth flow and clean dark UI.",
    long: "A login-first tracker: users register, log in, and record recycling entries. I focused on a clear auth flow, form validation states and a dark dashboard-style UI that reads well on any screen.",
    role: "Solo Builder — UI + auth flow",
    stack: ["HTML", "CSS", "JavaScript", "Auth UI", "LocalStorage"],
    learnings: ["Form validation & error states", "Login/register UX flow", "Dark-theme dashboard styling"],
    tags: ["HTML", "CSS", "JavaScript", "Auth UI"],
    image: "/project1.png",
    shape: "torusKnot" as const,
    color: "#d7ff3e",
    href: "https://github.com/acguanzon",
    year: "2024",
  },
  {
    id: "doughtinapay",
    index: "02",
    title: "Doughtinapay — Bakery Shop",
    description: "Artisan bread & pastry storefront: hero, catalog filter (All / Bread / Pastry), product cards.",
    long: "A warm bakery storefront with a big editorial hero, category filtering (All / Bread / Pastry) and product cards. I worked on layout rhythm, appetizing imagery and a filter interaction that feels instant.",
    role: "Frontend — layout & catalog",
    stack: ["Web Design", "Bootstrap", "E-commerce UI", "Filtering"],
    learnings: ["Catalog filter UX", "Hero composition for food", "Card-grid responsiveness"],
    tags: ["Web Design", "Bootstrap", "E-commerce UI"],
    image: "/project2.png",
    shape: "icosahedron" as const,
    color: "#8b5cf6",
    href: "https://github.com/acguanzon",
    year: "2025",
  },
  {
    id: "unor-ssg",
    index: "03",
    title: "Unor SSG Sectoral Program",
    description: "Student platform for benefits, events and sectoral activities. Empowering students, building communities.",
    long: "A platform for student benefits, events and sectoral activities. As Lead Programmer I coordinated the technical build and kept scope aligned with student-government goals — landing page, program info and calls to action.",
    role: "Lead Programmer — coordination + build",
    stack: ["Leadership", "Platform", "Community", "Landing Page"],
    learnings: ["Leading a student dev effort", "Scoping for real stakeholders", "Content-first landing pages"],
    tags: ["Lead Programmer", "Platform", "Community"],
    image: "/project3.png",
    shape: "torus" as const,
    color: "#22d3ee",
    href: "https://github.com/acguanzon",
    year: "2025",
  },
  {
    id: "resonance-music",
    index: "04",
    title: "Resonance Music",
    description: "Android music player with offline sync, daily recommendations and memory photo carousels. Release APK built.",
    long: "Resonance Music is a native Android playlist player: Room-backed library (songs, playlists, memories, daily recommendations), YouTube audio resolving, offline sync, personalized daily picks and nostalgic memory photo carousels — with server-side Gemini API features. Signed release APK already built.",
    role: "Solo Android Builder — app + release",
    stack: ["Kotlin", "Jetpack Compose", "Room", "Gradle", "Gemini API", "YouTube Audio"],
    learnings: ["Offline-first Room architecture", "Release signing & APK builds", "Recommendation + media UX"],
    tags: ["Kotlin", "Android", "Room", "Release APK"],
    color: "#f472b6",
    href: "https://github.com/acguanzon",
    year: "2026",
  },
  {
    id: "pawhealth",
    index: "05",
    title: "PawHealth — Vet Triage Platform",
    description: "ONGOING: native Android + FastAPI AI triage for pets — dual vision scans, urgency tiers, clinic finder.",
    long: "ONGOING. PawHealth is a mobile veterinary pre-triage platform: guided behavioral questionnaire + dual AI vision scans (skin/coat MobileNetV3 + facial grimace pain score) feeding a deterministic urgency-tier engine (Tiers 1–3 / retake). Native Android in Kotlin (Compose, Material 3), FastAPI backend on Render/Railway, Firebase Auth/Firestore/Storage, spaCy NLP service, static clinic directory with emergency flags.",
    role: "Builder — Android + backend + AI",
    stack: ["Kotlin", "Jetpack Compose", "FastAPI", "PyTorch MobileNetV3", "Firebase", "spaCy"],
    learnings: ["Mobile + server AI architecture", "Rule-based triage engine design", "Firestore schema contracts"],
    tags: ["Kotlin", "FastAPI", "AI Vision", "Ongoing"],
    color: "#4ade80",
    href: "https://github.com/acguanzon",
    year: "2026",
  },
  {
    id: "foodshack-pos",
    index: "06",
    title: "FoodShack POS",
    description: "Android point-of-sale with Room inventory, sales tracking, receipt + daily-summary PDF printing. Release APK built.",
    long: "FoodShack POS (com.foodshack.pos) is a native Android point-of-sale: Room database for products, categories, sales; order lines and day-sales reporting with filters; receipt and daily-summary PDF builders with print adapter; seeded menu. Release APK with baseline profiles already built.",
    role: "Solo Android Builder — POS + printing",
    stack: ["Kotlin", "Room", "PDF Printing", "Gradle", "Release APK"],
    learnings: ["POS domain modeling", "Receipt/PDF generation on Android", "Release pipelines with baseline profiles"],
    tags: ["Kotlin", "POS", "Room", "Release APK"],
    color: "#fbbf24",
    href: "https://github.com/acguanzon",
    year: "2026",
  },
  {
    id: "qr-attendance",
    index: "07",
    title: "QR Attendance Tracker",
    description: "My first-ever project (2023): Python QR + Excel attendance with automatic email warnings to students & staff.",
    long: "My first-ever project. A Python attendance system: QR scanning flow, Excel records via openpyxl (per-subject leave counts), and SMTP email automation — warning students at 2 absences and escalating lack-of-attendance reports to staff. Where my self-study journey started in 2023.",
    role: "First solo build — Python + automation",
    stack: ["Python", "openpyxl", "QR", "SMTP", "Excel"],
    learnings: ["My first end-to-end program", "File + data handling with Excel", "Email automation with Python"],
    tags: ["Python", "QR", "Automation", "First Build"],
    icon: "terminal" as const,
    color: "#22d3ee",
    href: "https://github.com/acguanzon",
    year: "2023",
  },
];

export const experience = [
  {
    period: "2023 — early 2024",
    role: "Self-Study Developer",
    place: "Self-taught",
    text: "Started coding from scratch: HTML, CSS, JavaScript, then PHP + MySQL. Built small auth UIs and trackers like Recycling Tracker.",
  },
  {
    period: "late 2024 — 2026",
    role: "BSIT Undergraduate",
    place: "College — 3rd Year",
    text: "Focusing on backend development, system architecture and software engineering. Database design, MVC, REST APIs.",
  },
  {
    period: "2025",
    role: "Lead Programmer — USSP Project",
    place: "Student Government",
    text: "Oversaw technical development and coordination of a student-led software initiative, ensuring alignment with organizational goals.",
  },
  {
    period: "2025",
    role: "Lead Researcher",
    place: "University Projects",
    text: "Spearheaded research efforts in academic projects, combining technical implementation with analytical thinking.",
  },
];
