import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}
export interface SkillGroup {
  title: string;
  items: string[];
}
export interface Project {
  name: string;
  tags: string[];
  impact: string;
  bullets: string[];
  link: string;
}
export interface Experience {
  role: string;
  org: string;
  time: string;
  bullets: string[];
}

export const ABOUT = {
  name: "Sovit Bhandari",
  tagline:
    "CS Senior · Full-Stack & DevOps - building reliable software, CI/CD, and clean UIs.",
  location: "Tampa, FL · Open to relocation",
  blurb:
    "Senior CS student (USF, '26) with hands-on experience in microservices, Kubernetes, CI/CD, and AWS. Two internships delivering production features and pipelines.",
} as const;

export const SOCIAL: SocialLink[] = [
  { icon: Github, label: "GitHub", href: "https://github.com/sovitbhandari" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sovitbhandari" },
  { icon: Mail, label: "Email", href: "mailto:sovitb47@gmail.com" }
];

export const SKILLS: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "C/C++", "C#", "SQL (PostgreSQL)", "Bash"] },
  { title: "Frameworks & Libraries", items: ["React", "Node.js", "Express", "Tailwind"] },
  { title: "DevOps / Cloud", items: ["Docker", "Kubernetes", "GitHub Actions", "ArgoCD", "AWS", "Terraform"] },
  { title: "Data & ML (learning)", items: ["pandas", "scikit-learn", "NLP for transcripts"] },
];

export const PROJECTS: Project[] = [
  {
    name: "ShareSpace – Microservices Platform",
    tags: ["React", "Node.js", "Kubernetes", "Docker", "CI/CD", "Event-Driven"],
    impact: "5+ services decoupled via custom Event Bus; real-time moderation.",
    bullets: [
      "Event-driven architecture reduced coupling and improved reliability.",
      "K8s deployments with ingress; automated CI → CD via Actions + ArgoCD."
    ],
    link: "https://github.com/sovitbhandari/social-feed-microservices-app"
  },
  {
    name: "Budget Buddy – MERN Full-Stack",
    tags: ["React", "Node", "Express", "MongoDB", "Charting"],
    impact: "30% faster loads after API + state refactors; 10+ UI components.",
    bullets: [
      "10+ REST endpoints; improved render efficiency by ~40%.",
      "Responsive UI with charts for insights."
    ],
    link: "https://github.com/sovitbhandari/Expense-Tracker"
  },
  {
    name: "DecSecOps CI/CD Pipeline",
    tags: ["TypeScript", "Docker", "GitHub Actions", "Kubernetes", "ArgoCD"],
    impact: "Prod-style pipeline with image scanning, tests, progressive delivery.",
    bullets: [
      "Static analysis & container scanning gates.",
      "Automated build-test-deploy to K8s via ArgoCD."
    ],
    link: "https://github.com/sovitbhandari/devsecops-cicd-pipeline"
  },
  {
    name: "Scalable URL Shortener (Serverless)",
    tags: ["AWS Lambda", "API Gateway", "Redis", "Terraform"],
    impact: "High-throughput serverless design; infra as code.",
    bullets: ["Provisioned with Terraform; tuned for latency + cost.", "Redis caching for hot keys + rate-limit."],
    link: "https://github.com/sovitbhandari/Scalable-URL-Shortener-Service"
  },

 {
  name: "Stock Chart Simulator",
  tags: [".NET", "C#", "WinForms"],
  impact: "Interactive candlesticks, volume overlays, and rubber-band selection for deep price exploration.",
  bullets: [
    "Built WinForms app with candlestick + volume visualization.",
    "Simulated wave-like patterns with custom timers.",
    "Detected peaks, valleys, and Fibonacci confirmations."
  ],
  link: "https://github.com/sovitbhandari/stock-chart-simulator-analyzer"
},

{
  name: "ML Model Tuning & Deployment",
  tags: ["Python", "scikit-learn", "RandomizedSearchCV", "ML"],
  impact: "Random Forest tuned with RandomizedSearchCV; reproducible pipelines and deployment.",
  bullets: [
    "Optimized Random Forest regression improving MAE by ~15%.",
    "Built reproducible pipelines with scikit-learn.",
    "Ensured robust preprocessing with imputation + encoding."
  ],
  link: "https://github.com/sovitbhandari/end-to-end-ml-regression-pipeline"
},

{
  name: "LLM-Based Text Inference System",
  tags: ["Transformers", "ModernBERT", "Hugging Face", "PyTorch", "NLI", "NLP", "ML"],
  impact: "Fine-tuned ModernBERT for multi-class NLI; 82% accuracy with targeted error analysis.",
  bullets: [
    "Fine-tuned ModernBERT on all-nli to 82% accuracy.",
    "Analyzed F1 + errors for neutral reasoning weaknesses.",
    "Designed custom tests for edge-case robustness."
  ],
  link: "https://github.com/sovitbhandari/F-Score-Analysis"
},

{
  name: "Sentiment-Analysis Pipeline",
  tags: ["Python", "NLTK", "scikit-learn", "TF-IDF", "NLP", "ML"],
  impact: "End-to-end pipeline with TF-IDF + logistic regression; competitive accuracy and F1.",
  bullets: [
    "Reached 81% accuracy on 800 JSON reviews.",
    "Boosted F1 to 0.80 with NLTK lemmatization.",
    "Built auto-grader evaluating models in <10s."
  ],
  link: "https://github.com/sovitbhandari/Sentiment-Analysis"
},

{
  name: "3D Tic-Tac-Toe AI Competition",
  tags: ["Python", "Alpha-Beta", "Beam Search", "Heuristics", "AI", "ML"],
  impact: "5×5×5 engine + two agents; fast search with improved win-rate via heuristic design.",
  bullets: [
    "Implemented 5×5×5 engine with alpha-beta search.",
    "Added heuristics raising win-rate by 35pp.",
    "Automated 100-game tournaments with logging."
  ],
  link: "https://github.com/sovitbhandari/AI-tic-tac-toe-competition"
} 

];

export interface Experience {
  role: string;
  org: string;
  time: string;
  bullets: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer Intern",
    org: "SimrikMed LLC",
    time: "Aug 2024 – Jun 2025",
    bullets: [
      "Developed HIPAA-compliant React + TypeScript features reducing load times by 40% for 1,000+ users.",
      "Built secure REST APIs with Node.js, improving reliability by 25% via optimized database queries.",
      "Automated CI/CD pipelines using Jenkins + Bash, cutting deployment time by 30%.",
      "Hardened infrastructure provisioning via Bash, accelerating feature rollouts by 50%."
    ]
  },
  {
    role: "Software Engineer Intern",
    org: "Mandavya Construction",
    time: "May 2024 – Jul 2024",
    bullets: [
      "Developed React dashboard for multi-site project tracking, reducing weekly reporting time by 50%.",
      "Streamlined equipment tracking with centralized log, improving allocation efficiency by 30%.",
      "Digitized safety and inspection checklists, reducing manual reporting by 60%."
    ]
  },
  {
    role: "Student AV Technician",
    org: "University of South Florida",
    time: "Jul 2024 – Present",
    bullets: [
      "Optimized AV systems in 20+ classrooms with Crestron tools, reducing disruptions by 35%.",
      "Diagnosed and resolved issues, minimizing classroom downtime by 30%."
    ]
  }
];


export const EDUCATION = {
  school: "University of South Florida",
  degree: "B.S. in Computer Science",
  grad: "Expected May 2026",
  gpa: "GPA 3.80"
} as const;

export const FOCUS = ["Full-Stack SWE", "DevOps & SRE", "AI/ML projects (NLP)"] as const;

export const METRICS = [
  { label: "Weekly Coding (hrs)", value: 14 },
  { label: "LeetCode/Wk", value: 21 },
  { label: "CI/CD Deploys/Month", value: 8 },
  { label: "Gym/Wk (balance)", value: 4 }
] as const;