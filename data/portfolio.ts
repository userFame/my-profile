export interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "Connected Devices Engineer",
    company: "Mercury Intermedia",
    period: "Sept 2022 – Present",
    summary:
      "Frontend engineer working on connected-device applications including Smart TV and console platforms.",
    highlights: [
      "Built Next.js application foundation for Samsung Smart TV and Xbox sports streaming app",
      "Defined spatial navigation patterns for remote-control UX",
      "Owned architectural decisions including state management and styling strategy",
      "Integrated Node.js APIs for dynamic content delivery",
      "Improved TypeScript adoption and component safety across the codebase",
    ],
  },
  {
    role: "Software Engineer II",
    company: "SnapIOT",
    period: "Oct 2021 – Apr 2022",
    summary:
      "Full-stack engineer focused on cross-platform product enhancements and client-driven features.",
    highlights: [
      "Delivered multilingual UI features across iOS and Android",
      "Implemented JavaScript UI components and dynamic modals",
      "Used Git workflows (cherry-pick) for multi-branch deployments",
      "Debugged MySQL data issues and supported AWS-based environments",
    ],
  },
  {
    role: "Web Developer",
    company: "Noble Studios",
    period: "Jul 2019 – Sept 2021",
    summary:
      "Frontend developer specializing in WordPress development, performance optimization, and CMS systems.",
    highlights: [
      "Built and maintained WordPress sites across multiple industries",
      "Improved Core Web Vitals and SEO performance",
      "Implemented WCAG accessibility standards",
      "Translated designs into production-ready UI components",
      "Introduced TypeScript into legacy JavaScript projects",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Laso Concepts",
    period: "Jul 2017 – Dec 2017",
    summary:
      "Early-career full stack developer building AngularJS + Node.js applications.",
    highlights: [
      "Built full-stack admin dashboards using AngularJS and Express",
      "Created secure blog platform with authentication and sanitization",
      "Implemented messaging and notification systems",
      "Designed reusable UI components for data-heavy workflows",
    ],
  },
];
