import {
  Award,
  Boxes,
  Braces,
  Cloud,
  Code2,
  Container,
  DatabaseZap,
  GitBranch,
  Github,
  Gauge,
  KeyRound,
  Layers3,
  Linkedin,
  Mail,
  MonitorDot,
  Network,
  ServerCog,
  ShieldCheck,
  Terminal,
  Workflow
} from "lucide-react";

export const profile = {
  name: "Navneet Bhardwaj",
  title: "Cloud & DevOps Engineer",
  headline: "Production-focused engineer building reliable cloud infrastructure, automation, and delivery systems.",
  summary:
    "Cloud and DevOps engineer with 4.5 years of experience across infrastructure automation, CI/CD, Linux operations, containers, monitoring, and cloud-native delivery. The portfolio is intentionally focused on verifiable engineering signals from the resume, GitHub profile, and project documentation.",
  email: "navneetbhardwaj935@gmail.com",
  github: "https://github.com/aznavneet",
  linkedin: "https://www.linkedin.com/in/navneetbhardwaj97/",
  location: "India",
  resumePath: "/resume/Navneet_Bhardwaj_DevOps_CV.pdf"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const metrics = [
  { label: "Years Experience", value: "4.5" },
  { label: "Primary Focus", value: "Cloud" },
  { label: "Delivery Style", value: "CI/CD" },
  { label: "Ops Mindset", value: "SRE" }
];

export const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS", "Azure", "Terraform", "CloudFormation", "IAM", "Networking", "Security"]
  },
  {
    title: "Containers & Platform",
    icon: Container,
    skills: ["Docker", "Kubernetes", "RBAC", "Linux", "Shell", "Platform Engineering"]
  },
  {
    title: "Delivery Automation",
    icon: Workflow,
    skills: ["GitHub Actions", "GitLab CI", "Jenkins", "Git", "Release Workflows", "Pipeline Design"]
  },
  {
    title: "Observability & Reliability",
    icon: Gauge,
    skills: ["Prometheus", "Grafana", "ELK", "Monitoring", "Incident Readiness", "SRE Practices"]
  },
  {
    title: "Engineering Toolkit",
    icon: Code2,
    skills: ["Python", "Bash", "YAML", "Infrastructure as Code", "Documentation", "Automation"]
  }
];

export const experience = [
  {
    company: "Verified experience from resume",
    role: "Cloud / DevOps Engineering",
    duration: "4.5 years",
    summary:
      "Detailed company history should be finalized after resume extraction review. The site keeps this section honest instead of inventing employers or achievements.",
    responsibilities: [
      "Cloud infrastructure operations and automation",
      "CI/CD pipeline implementation and maintenance",
      "Linux, containers, monitoring, and release support",
      "Infrastructure documentation and operational handover"
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Linux"]
  }
];

export const flagshipProject = {
  title: "PRISM Flagship Project",
  kicker: "Featured system design slot",
  problem:
    "PRISM is reserved as the flagship case study because the brief explicitly calls it out. Add the repository or project documentation and this section is ready to map the verified architecture, screenshots, CI/CD workflow, and business value.",
  value:
    "Designed to present production thinking: clear problem framing, infrastructure choices, deployment flow, monitoring, risks, tradeoffs, and future enhancements.",
  stack: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Monitoring"],
  workflow: [
    "Code pushed to source control",
    "Automated checks and build pipeline",
    "Container image published",
    "Infrastructure changes reviewed",
    "Deployment promoted with observability"
  ]
};

export const projects = [
  {
    title: "Cloud Infrastructure Portfolio",
    description:
      "Production-ready Next.js portfolio with CI, GitHub integration, SEO, responsive UI, and Vercel deployment support.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions", "Vercel"],
    tags: ["Frontend", "CI", "Portfolio"],
    github: "https://github.com/aznavneet/Portfolio",
    impact: "Creates a polished technical surface for recruiters and engineering managers."
  },
  {
    title: "GitHub Projects",
    description:
      "Live repository cards are fetched from GitHub so verified public work can be highlighted without manual duplication.",
    stack: ["GitHub API", "Automation", "Repository Metadata"],
    tags: ["GitHub", "Automation"],
    github: "https://github.com/aznavneet",
    impact: "Keeps project data tied to public source-of-truth repositories."
  }
];

export const certifications = [
  {
    name: "Certifications from CV",
    issuer: "Pending resume extraction",
    date: "To verify",
    credential: profile.resumePath,
    icon: Award
  }
];

export const commandItems = [
  { label: "Email Navneet", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Open GitHub", href: profile.github, icon: Github },
  { label: "Open LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Download Resume", href: profile.resumePath, icon: Award },
  { label: "View Skills", href: "#skills", icon: Braces },
  { label: "View GitHub", href: "#github", icon: GitBranch }
];

export const infraNodes = [
  { label: "Users", icon: Network, x: "8%", y: "42%" },
  { label: "DNS", icon: ServerCog, x: "24%", y: "20%" },
  { label: "Load Balancer", icon: Layers3, x: "39%", y: "45%" },
  { label: "Kubernetes", icon: Boxes, x: "58%", y: "23%" },
  { label: "CI/CD", icon: Workflow, x: "72%", y: "54%" },
  { label: "Secrets", icon: KeyRound, x: "82%", y: "18%" },
  { label: "Monitoring", icon: MonitorDot, x: "88%", y: "72%" },
  { label: "Data", icon: DatabaseZap, x: "58%", y: "76%" },
  { label: "Security", icon: ShieldCheck, x: "32%", y: "73%" },
  { label: "Terminal", icon: Terminal, x: "12%", y: "76%" }
];
