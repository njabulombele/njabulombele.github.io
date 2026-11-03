/**
 * Personal profile data for Njabulo Mbele.
 * Edit these values to update the portfolio content.
 */
export const profile = {
  name: "Njabulo Mbele",
  title: "Fullstack Software Engineer",
  tagline: "Building cloud-native microservices, AI-powered platforms, and modern web applications.",
  github: "https://github.com/njabulombele",
  githubUsername: "njabulombele",
  linkedin: "https://www.linkedin.com/in/njabulo-mbele-490642225",
  email: "njabulombele97@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/103996172?v=4",
  location: "South Africa",
  about: [
    "I'm a fullstack software engineer who designs and builds scalable, cloud-native systems. My work centers on microservices architecture, AI-powered platforms, and modern web applications that solve real business problems.",
    "On the backend I work primarily with Java and Spring Boot, and Python with FastAPI. On the frontend I build with React and TypeScript. I deploy with Docker and AWS, and I integrate AI/ML models — including HuggingFace transformers for sentiment analysis — into production systems.",
    "From vendor risk management platforms to real-time analytics dashboards, I enjoy tackling the full stack: clean architecture, distributed systems, and software that ships.",
  ],
  resumeUrl: null, // TODO: add a /resume.pdf in public/ and set this to "/resume.pdf"
};

/**
 * Skill categories shown in the Skills section.
 * Update these to match your actual expertise.
 */
export const skillGroups: { category: string; icon: string; skills: string[] }[] = [
  {
    category: "Languages",
    icon: "code",
    skills: ["Java", "TypeScript", "Python", "JavaScript", "HTML & CSS"],
  },
  {
    category: "Backend",
    icon: "server",
    skills: ["Spring Boot", "FastAPI", "Node.js", "REST APIs", "Microservices", "API Gateway", "WebSockets"],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Component Architecture"],
  },
  {
    category: "DevOps & Cloud",
    icon: "cloud",
    skills: ["Docker", "AWS", "Cloud-Native Architecture", "CI/CD", "Containerization"],
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    skills: ["HuggingFace Transformers", "Sentiment Analysis", "NLP", "AI-Powered Analytics", "Predictive Modeling"],
  },
  {
    category: "Tools & Practices",
    icon: "wrench",
    skills: ["Git & GitHub", "Agile", "System Design", "API Design", "Testing"],
  },
];

/**
 * Social / contact links shown in the header, contact section, and footer.
 */
export const socials = [
  { label: "GitHub", url: "https://github.com/njabulombele", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/njabulo-mbele-490642225", icon: "linkedin" },
];
