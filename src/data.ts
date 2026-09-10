import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface EngineeringFact {
  label: string;
  value: string;
}

export interface Project {
  name: string;
  descriptor?: string;
  description: string;
  tags: string[];
  facts: EngineeringFact[];
  link: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface MoreProject {
  name: string;
  shortName: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Experience {
  year: string;
  role: string;
  org: string;
  context?: string;
  period: string;
  summary: string;
  contributions: string[];
}

export interface StackGroup {
  index: string;
  title: string;
  items: string[];
}

export const ABOUT = {
  name: "Sovit Bhandari",
  role: "Software Engineer",
  location: "Tampa, FL",
  email: "sovitb47@gmail.com",
  heroPosition: "Backend systems, full-stack products, reliable infrastructure.",
  heroSupport:
    "Computer Science graduate focused on building useful software across APIs, databases, real-time systems, authentication, infrastructure, and product interfaces.",
  heroTech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis", "AWS"],
  aboutLead:
    "Computer Science graduate from the University of South Florida focused on backend, full-stack, and platform engineering.",
  aboutBody:
    "I enjoy building systems where APIs, databases, real-time communication, authentication, infrastructure, and product interfaces meet.",
} as const;

export const SOCIAL: SocialLink[] = [
  { icon: Github, label: "GitHub", href: "https://github.com/sovitbhandari" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sovitbhandari" },
  { icon: Mail, label: "Email", href: "mailto:sovitb47@gmail.com" },
];

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
] as const;

export const EDUCATION = {
  school: "University of South Florida",
  degree: "B.S. Computer Science",
  year: "2026",
  gpa: "3.80",
  location: "Tampa, FL",
  awards: [
    "Dean's List — Fall 2024, Fall 2025",
    "USF Green & Gold Directors Waiver Award",
  ],
} as const;

export const EXPERIENCE: Experience[] = [
  {
    year: "2026",
    role: "Software Engineer Intern",
    org: "Soluscode",
    context: "Ed-Tech SaaS",
    period: "Jan — Apr",
    summary:
      "Improved leaderboard query performance, hardened role-based access, and replaced spreadsheet contest operations with an admin dashboard.",
    contributions: [
      "Rewrote N+1 leaderboard logic with a PostgreSQL window function and compound indexing.",
      "Implemented User/Admin/Operator permissions, JWT sessions, and premium-access controls.",
    ],
  },
  {
    year: "2025",
    role: "Software Engineer Intern",
    org: "SimrikMed LLC",
    context: "Healthcare SaaS",
    period: "May — Aug",
    summary:
      "Built patient-data interfaces and APIs, then automated testing and AWS environment provisioning for the engineering team.",
    contributions: [
      "Shipped React/TypeScript visualizations with lazy loading and state optimization.",
      "Developed Node.js REST APIs with MongoDB aggregation pipelines and compound indexes.",
    ],
  },
  {
    year: "2024",
    role: "Software Engineer Intern",
    org: "Mandavya Construction",
    period: "May — Jul",
    summary:
      "Digitized construction operations with a React/Node.js dashboard for equipment tracking and mobile-friendly safety inspections.",
    contributions: [
      "Centralized equipment tracking with digital logs.",
      "Built a mobile-friendly React interface for safety inspections.",
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    name: "SupportDesk",
    descriptor: "Customer Support Platform",
    description:
      "A multi-role support system for customers, agents, and administrators with organization-scoped ticket workflows, real-time conversations, and asynchronous notification handling.",
    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "SSE",
      "Docker",
    ],
    facts: [
      { label: "Realtime", value: "Redis Pub/Sub + Server-Sent Events" },
      { label: "Async Jobs", value: "BullMQ retry-backed workers" },
      { label: "Auth", value: "JWT + refresh-session flows" },
    ],
    link: "https://github.com/sovitbhandari/SupportDesk",
    image: "/projects/supportdesk.jpg",
    imageAlt:
      "SupportDesk admin workspace showing ticket queue, conversation panel, and organization access management",
    featured: true,
  },
  {
    name: "SplitEase",
    descriptor: "Group Expense Splitting Platform",
    description:
      "A group expense product for transactional splits, settlement tracking, real-time balance updates, and Plaid Sandbox bank linking for transfer authorization flows.",
    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Socket.IO",
      "Zustand",
      "Plaid Sandbox",
    ],
    facts: [
      { label: "Transactions", value: "Equal, percentage, and exact splits" },
      { label: "Settlements", value: "Partial payments + history in PostgreSQL" },
      { label: "Realtime", value: "Socket.IO balance recalculation" },
    ],
    link: "https://github.com/sovitbhandari/SplitEase-Splitting-Platform",
    image: "/projects/splitease.jpg",
    imageAlt:
      "SplitEase trip workspace showing group balances, settlement plan, member summary, and recent activity",
    featured: true,
  },
  {
    name: "AI Resume Screener",
    descriptor: "Resume Analysis Product",
    description:
      "A resume-to-job matching tool that extracts PDF text, compares candidates against job descriptions through configurable OpenAI or Gemini integrations, and returns structured scorecards.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "OpenAI", "Gemini", "Zod"],
    facts: [
      { label: "Extraction", value: "Resume PDF text parsing" },
      { label: "Providers", value: "Configurable OpenAI or Gemini" },
      { label: "Validation", value: "Zod schemas + structured scorecards" },
    ],
    link: "https://github.com/sovitbhandari/AI-Resume-Screener",
    image: "/projects/resume-screener.jpg",
    imageAlt:
      "AI Resume Screener analysis dashboard with match scores, keyword feedback, and section scorecards",
    featured: true,
  },
];

export const MORE_PROJECTS: MoreProject[] = [
  {
    name: "Distributed Real-Time Chat Service",
    shortName: "Distributed Chat",
    description: "WebSocket chat service with Redis messaging and Docker/Kubernetes configuration.",
    tags: ["Python", "Django Channels", "Redis", "WebSockets"],
    link: "https://github.com/sovitbhandari/distributed-real-time-chat-service",
  },
  {
    name: "DevSecOps CI/CD Pipeline",
    shortName: "DevSecOps Pipeline",
    description: "GitHub Actions pipeline with Trivy scanning, GHCR publishing, and GitOps material.",
    tags: ["GitHub Actions", "Docker", "Trivy", "Kubernetes"],
    link: "https://github.com/sovitbhandari/devsecops-cicd-pipeline",
  },
  {
    name: "Stock Chart Simulator",
    shortName: "Stock Chart Simulator",
    description: "Desktop candlestick and volume charting tool with interactive selection.",
    tags: ["C#", "WinForms"],
    link: "https://github.com/sovitbhandari/stock-chart-simulator-analyzer",
  },
];

export const STACK_GROUPS: StackGroup[] = [
  {
    index: "01",
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "C", "C++"],
  },
  {
    index: "02",
    title: "Frontend / Product",
    items: ["React", "Tailwind CSS", "TanStack Query", "Zustand"],
  },
  {
    index: "03",
    title: "Backend / Data",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "BullMQ"],
  },
  {
    index: "04",
    title: "Infrastructure",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"],
  },
  {
    index: "05",
    title: "AI / ML",
    items: ["OpenAI API", "Gemini API", "PyTorch", "scikit-learn", "Hugging Face"],
  },
];
