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
  resumePath: "/resume/Navneet_Bhardwaj_Cloud_DevOps_CV.pdf"
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
    company: "Infosys",
    role: "Cloud & DevOps Engineer",
    duration: "Feb 2025 - Present",
    location: "Noida, India",
    summary:
      "Designing and operating AWS cloud infrastructure, container platforms, CI/CD automation, and cost-optimization workflows for production-grade services.",
    responsibilities: [
      "Designed and deployed highly available microservices on AWS EKS using Docker and Helm, achieving 99.9% uptime with Application Load Balancer and Auto Scaling.",
      "Built and managed CI/CD pipelines using GitHub Actions, automating build, test, and deployment workflows and reducing deployment time by 30%.",
      "Provisioned AWS infrastructure using Terraform, including VPC, EC2, IAM, and Security Groups, improving consistency and reducing manual effort.",
      "Developed AWS Lambda functions in Python for EBS snapshot cleanup and S3 lifecycle policies, optimizing storage costs."
    ],
    technologies: ["AWS", "EKS", "Docker", "Helm", "GitHub Actions", "Terraform", "Python", "Lambda", "S3"]
  },
  {
    company: "Tata Consultancy Services",
    role: "Cloud & DevOps Engineer",
    duration: "Aug 2021 - Feb 2025",
    location: "Kolkata, India",
    summary:
      "Built and maintained delivery automation, containerized deployments, observability, and Linux operations for cloud and DevOps environments.",
    responsibilities: [
      "Built CI/CD pipelines using GitHub Actions integrated with SonarQube, reducing deployment failures by 50% and improving release speed by 35%.",
      "Deployed containerized applications using Docker and Kubernetes, ensuring high availability across environments.",
      "Implemented Prometheus and Grafana monitoring with alerting, improving observability and incident resolution time.",
      "Automated Linux operations using Bash scripting, reducing manual intervention and production alerts."
    ],
    technologies: ["GitHub Actions", "SonarQube", "Docker", "Kubernetes", "Prometheus", "Grafana", "Linux", "Bash"]
  }
];

export const flagshipProject = {
  title: "PRISM - AI-Powered CI/CD Failure Intelligence Platform",
  kicker: "Flagship case study",
  problem:
    "PRISM (Pipeline Root Cause Intelligence & Self-Healing Mechanism) helps engineering teams reduce CI/CD investigation time by turning raw pipeline logs into structured, AI-generated root cause analysis, remediation guidance, and delivery insights within minutes of a failure.",
  value:
    "Modern delivery pipelines generate large volumes of build, test, security, container, and deployment logs. PRISM automates the question loop of what failed, why it failed, and how to fix it so teams can reduce MTTR, avoid release delays, and standardize incident investigation.",
  stack: ["Generative AI", "CI/CD", "GitHub Actions", "Jenkins", "GitLab CI/CD", "Azure DevOps", "Kubernetes"],
  workflow: [
    "Source code commit",
    "CI/CD pipeline execution",
    "Build, test, or deployment failure",
    "Automated log collection",
    "PRISM AI analysis engine",
    "Root cause identification",
    "Fix recommendation generation",
    "Developer notification"
  ],
  capabilities: [
    "Automated failure detection",
    "AI-powered root cause analysis",
    "Intelligent remediation suggestions",
    "Build log analysis",
    "Failure summarization",
    "Commit-level RCA tracking",
    "Developer notifications",
    "Historical failure intelligence"
  ],
  aiOutputs: [
    {
      title: "Root Cause",
      description: "Identifies the most probable failure source from pipeline logs and execution context."
    },
    {
      title: "Technical Explanation",
      description: "Explains the reasoning behind the failure in language engineers can act on quickly."
    },
    {
      title: "Suggested Fix",
      description: "Generates corrective actions developers can immediately apply to unblock delivery."
    },
    {
      title: "Executive Summary",
      description: "Produces a concise failure summary for rapid triage and stakeholder visibility."
    }
  ],
  deliveryChannels: ["Workflow summaries", "Markdown RCA reports", "Email notifications"],
  notificationData: ["Repository", "Branch", "Commit ID", "Build status", "AI-generated RCA", "Suggested fix"],
  futureIntegrations: ["Microsoft Teams", "Slack", "Jira", "ServiceNow", "Enterprise ticketing platforms"],
  businessValue: [
    "Reduce MTTR by accelerating issue diagnosis and resolution.",
    "Improve developer productivity by eliminating manual log analysis for common failures.",
    "Accelerate releases by reducing delivery bottlenecks caused by build failures.",
    "Capture organizational knowledge through searchable failure patterns and remediation history.",
    "Standardize incident investigation across engineering teams."
  ],
  targetPlatforms: ["GitHub Actions", "Jenkins", "GitLab CI/CD", "Azure DevOps", "Kubernetes delivery platforms"],
  targetIndustries: [
    "Banking & Financial Services",
    "Telecommunications",
    "Retail & E-Commerce",
    "Healthcare",
    "SaaS Platforms",
    "Enterprise Software"
  ],
  roadmap: [
    "Phase 1: AI-powered RCA generation",
    "Phase 2: Multi-channel notifications",
    "Phase 3: Failure pattern intelligence",
    "Phase 4: Predictive failure detection",
    "Phase 5: AI-assisted self-healing pipelines",
    "Phase 6: Automated fix pull requests"
  ],
  vision:
    "PRISM transforms CI/CD pipelines from passive execution engines into intelligent engineering assistants that detect failures, explain them, recommend fixes, and proactively assist development teams in resolving them."
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
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Verified",
    credential: profile.resumePath,
    icon: Award
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Verified",
    credential: profile.resumePath,
    icon: Award
  },
  {
    name: "GitHub Foundations",
    issuer: "GitHub",
    date: "Verified",
    credential: profile.resumePath,
    icon: Award
  },
  {
    name: "Containers & Kubernetes Essentials",
    issuer: "IBM",
    date: "Verified",
    credential: profile.resumePath,
    icon: Award
  },
  {
    name: "Cisco AI Practitioner",
    issuer: "Cisco",
    date: "Verified",
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
