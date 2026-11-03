/**
 * Project data — sourced from github.com/njabulombele repositories.
 *
 * Each project links to its real GitHub repo. To feature a project on the
 * homepage grid (larger card), set `featured: true`.
 *
 * Categories are used by the project filter buttons.
 */
export type ProjectCategory = "Fullstack" | "Backend" | "Frontend" | "AI/ML";

export interface Project {
  name: string;
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  language: string;
  githubUrl: string;
  demoUrl: string | null;
  featured: boolean;
  stars: number;
  year: string;
}

export const projects: Project[] = [
  {
    name: "smart-job-market-analytics-platform",
    title: "Smart Job Market Analytics Platform",
    description:
      "A cloud-native AI-powered platform for job market analytics, salary prediction, career recommendations, and technology trend forecasting.",
    tech: ["TypeScript", "React", "Node.js", "AI/ML", "Cloud-Native"],
    category: "Fullstack",
    language: "TypeScript",
    githubUrl: "https://github.com/njabulombele/smart-job-market-analytics-platform",
    demoUrl: null,
    featured: true,
    stars: 1,
    year: "2026",
  },
  {
    name: "ai-vendor-risk-management-platform",
    title: "AI Vendor Risk Management Platform",
    description:
      "Cloud-native microservices platform for AI-powered vendor risk scoring, compliance tracking, and incident management.",
    tech: ["Spring Boot", "FastAPI", "React", "Docker", "AWS"],
    category: "Fullstack",
    language: "Java",
    githubUrl: "https://github.com/njabulombele/ai-vendor-risk-management-platform",
    demoUrl: null,
    featured: true,
    stars: 0,
    year: "2026",
  },
  {
    name: "EmpathAI",
    title: "EmpathAI — Sentiment Analysis Platform",
    description:
      "Microservices platform that ingests customer feedback, runs sentiment and emotion analysis using HuggingFace transformer models, and surfaces actionable insights through a real-time dashboard.",
    tech: ["Java", "Spring Boot", "HuggingFace", "Microservices", "Real-Time Dashboard"],
    category: "AI/ML",
    language: "Java",
    githubUrl: "https://github.com/njabulombele/EmpathAI",
    demoUrl: null,
    featured: true,
    stars: 0,
    year: "2026",
  },
  {
    name: "tshepi-s-spot-on-restaurant",
    title: "Tshepi's Spot On Restaurant",
    description:
      "A modern, responsive restaurant website designed to showcase its menu, brand, services, and online presence.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Responsive Design"],
    category: "Frontend",
    language: "TypeScript",
    githubUrl: "https://github.com/njabulombele/tshepi-s-spot-on-restaurant",
    demoUrl: null,
    featured: false,
    stars: 0,
    year: "2026",
  },
  {
    name: "2gclothing-website",
    title: "2G Clothing Website",
    description:
      "A responsive e-commerce clothing website featuring product catalogs and an engaging shopping experience.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Frontend",
    language: "HTML",
    githubUrl: "https://github.com/njabulombele/2gclothing-website",
    demoUrl: null,
    featured: false,
    stars: 0,
    year: "2026",
  },
  {
    name: "smart-parking-system",
    title: "Smart Parking System",
    description:
      "A smart parking management system for tracking available parking spots and managing reservations in real time.",
    tech: ["Java", "Spring Boot", "Real-Time Data"],
    category: "Backend",
    language: "Java",
    githubUrl: "https://github.com/njabulombele/smart-parking-system",
    demoUrl: null,
    featured: false,
    stars: 0,
    year: "2026",
  },
  {
    name: "microservice-gateway-project",
    title: "Microservice Gateway",
    description:
      "An API gateway for routing, load balancing, and managing communication across microservices.",
    tech: ["Java", "Spring Cloud Gateway", "Microservices", "API Routing"],
    category: "Backend",
    language: "Java",
    githubUrl: "https://github.com/njabulombele/microservice-gateway-project",
    demoUrl: null,
    featured: false,
    stars: 0,
    year: "2025",
  },
  {
    name: "NjabsChatSystem",
    title: "Njabs Chat System",
    description:
      "A real-time chat application enabling instant messaging between users with WebSocket communication.",
    tech: ["Java", "WebSockets", "Spring Boot", "Real-Time"],
    category: "Fullstack",
    language: "Java",
    githubUrl: "https://github.com/njabulombele/NjabsChatSystem",
    demoUrl: null,
    featured: false,
    stars: 0,
    year: "2023",
  },
];

/** Unique categories for filter buttons, in display order. */
export const projectCategories: (ProjectCategory | "All")[] = [
  "All",
  "Fullstack",
  "Backend",
  "Frontend",
  "AI/ML",
];
