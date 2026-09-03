export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "PROGRAMMING",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C"]
  },
  {
    title: "WEB DEVELOPMENT",
    skills: ["React", "Next.js", "Node.js", "HTML", "CSS"]
  },
  {
    title: "AI / ML",
    skills: ["Machine Learning", "Data Analytics", "Pandas", "Scikit-learn"]
  },
  {
    title: "DATABASES",
    skills: ["PostgreSQL", "Prisma", "SQL", "MongoDB"]
  },
  {
    title: "CYBER SECURITY",
    skills: ["Cybersecurity", "Web Security", "Anomaly Detection"]
  },
  {
    title: "DEVELOPER TOOLS",
    skills: ["Git", "GitHub", "Vercel", "Figma"]
  }
];
