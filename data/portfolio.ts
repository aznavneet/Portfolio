import {
  Award,
  BookOpenText,
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
  name: "Thaskiya Sulthana G",
  title: "Cloud & DevOps Engineer",
  headline:
    "Highly skilled Cloud and DevOps Engineer with 9+ years of experience in designing, deploying, and managing scalable infrastructure on AWS, leveraging Terraform for infrastructure-as-code automation. With AWS Certified Solutions Architect - Associate certification, leveraging expertise in designing and deploying scalable, secure, and efficient cloud architectures that drive business success",
  summary:
    "Highly skilled Cloud and DevOps Engineer with 9+ years of experience in designing, deploying, and managing scalable infrastructure on AWS, leveraging Terraform for infrastructure-as-code automation. With AWS Certified Solutions Architect - Associate certification, leveraging expertise in designing and deploying scalable, secure, and efficient cloud architectures that drive business success. Expertise in Amazon Web Services (AWS) environment and good knowledge of AWS services like, VPC, EC2, S3, Elastic Load-balancers, Cloud Front, Autoscaling Groups (ASG), Elastic Block Storage, RDS, IAM, CloudFormation, Athena, CloudWatch, Elastic File System, Lambda, Cloud Trail, Control Tower, AWS Organization, Code Build. I used IAM to create new accounts, roles and groups. Used Auto scaling and Elastic Load Balancer features on EC2 instances to serve the end users using applications during unexpected traffic/demand. Configuring IAM roles for EC2 instances and assigns them policies granting specific level access to S3 buckets. Configured S3 Buckets for EBS backed Snapshots, versioning for data backups and setting up lifecycle management policies. Using Cloud Watch service, created alarms for monitoring the EC2 server’s performance like CPU Utilization, disk usage etc. Implemented Auto Scaling for high application availability. Created elastic load-balancers (ELB) for different applications. Utilized Amazon Route53 to manage DNS zones, assign public DNS names to elastic load balancers IPs. Created and worked on Elastic Block Store and Instance Store Volumes. Configured NAT instance for internal servers within the private subnets thereby not being exposed to the public internet. Used Elastic Load balancer, Auto scaling, Security groups and NACL’s to manage network security. Configuring of Virtual Private Cloud (VPC) with networking of subnets containing servers. Creating VPC, ELB, etc. through CloudFormation stack.",
  email: "thaskiyasulthanasifu@gmail.com",
  github: "",
  linkedin: "",
  location: "Bangalore, India",
  resumePath: "/resume/Thaskiya Sulthana G-AWS Devops1.txt"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "GitHub", href: "#github" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const metrics = [
  { label: "Experience", value: "5+ Years" },
  { label: "Cloud", value: "AWS" },
  { label: "Containers", value: "Kubernetes" },
  { label: "IaC", value: "Terraform" }
];

export const skillGroups = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Amazon Web Services (AWS)", "VPC", "EC2", "S3", "Elastic Load-balancers", "Cloud Front", "Autoscaling Groups (ASG)", "Elastic Block Storage", "RDS", "IAM", "CloudFormation", "Athena", "CloudWatch", "Elastic File System", "Lambda", "Cloud Trail", "Control Tower", "AWS Organization", "Code Build"]
  },
  {
    title: "CI/CD",
    icon: Workflow,
    skills: ["AWS Pipeline", "Jenkins", "GitHub Actions"]
  },
  {
    title: "Containerization & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes"]
  },
  {
    title: "Infrastructure Management",
    icon: Code2,
    skills: ["Terraform"]
  },
  {
    title: "Version Control Systems",
    icon: GitBranch,
    skills: ["Git", "GitHub"]
  },
  {
    title: "Scripting & Automation",
    icon: Terminal,
    skills: ["Bash", "Python (Basic)"]
  },
  {
    title: "VPC CMS Tools",
    icon: Braces,
    skills: ["BMC Helix", "Citrix", "Service Now"]
  },
  {
    title: "Monitoring Tools",
    icon: Gauge,
    skills: ["Nagios", "Prometheus", "Grafana"]
  }
];

export const experience = [
  {
    company: "Infosys",
    role: "DevOps Engineer",
    duration: "9+ years",
    location: "Bangalore",
    summary:
      "DevOps Engineer with a focus on cloud infrastructure provisioning, CI/CD pipeline development, containerization, and orchestration.",
    engagements: [
      {
        client: "Various Clients (ICICI Lombard, Daimler, HCCBPL, AVON)",
        role: "DevOps Engineer",
        responsibilities: [
          "Provisioned cloud infrastructure using Terraform creating VPCs, subnets, route tables, and security groups, which reduced manual setup time by 70% and automated the infrastructure using GitHub Actions.",
          "Developed and maintained robust CI/CD pipelines using Jenkins and GitHub Actions leading to increase in deployment frequency and a significant reduction in deployment errors.",
          "Reduced Docker image size by 90%using multi-stage builds, leading to a 50% decrease in deployment time and 40% savings in storage costs.",
          "Developed and deployed containerized applications using Docker and Kubernetes, improving scalability, deployment speed, and reliability of applications"
        ],
        technologies: ["Terraform", "GitHub Actions", "Jenkins", "Docker", "Kubernetes"]
      }
    ]
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

export const certifications = [
  {
    name: "AWS Solution Architect – Associate (Global certification)",
    issuer: "Amazon Web Services",
    date: "Verified",
    credlyUrl: "",
    icon: Award
  }
];

export const researchPapers = [
  {
    title: "Nutanix Hybrid Cloud From Security Perspective",
    publisher: "John Wiley & Sons",
    date: "Nov 30, 2021",
    topic: "Hybrid Cloud Security",
    href: "https://books.google.co.in/books?hl=en&lr=&id=co1SEAAAQBAJ&oi=fnd&pg=PA357&ots=q2JP4VE4pr&sig=W-q0ODQTrf9fQoGkVWRIBTG90Xs&redir_esc=y#v=onepage&q&f=false",
    icon: BookOpenText
  },
  {
    title: "A Study on Google Cloud Platform (GCP) and Its Security",
    publisher: "John Wiley & Sons",
    date: "Nov 30, 2021",
    topic: "Google Cloud Security",
    href: "https://books.google.co.in/books?hl=en&lr=&id=-RBSEAAAQBAJ&oi=fnd&pg=PA315&ots=tFA2ZkXfKN&sig=A4LmfHlCFQ6jpd-3Gj2hm66znmk&redir_esc=y#v=onepage&q&f=false",
    icon: BookOpenText
  },
  {
    title: "Case Study of Azure and Azure Security Practices",
    publisher: "John Wiley & Sons",
    date: "Nov 30, 2021",
    topic: "Azure Security",
    href: "https://books.google.co.in/books?hl=en&lr=&id=-RBSEAAAQBAJ&oi=fnd&pg=PA339&ots=tFA2ZkXgIO&sig=TKaKhsNQClt1Y2XKpXhdRIEI8qA&redir_esc=y#v=onepage&q&f=false",
    icon: BookOpenText
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
