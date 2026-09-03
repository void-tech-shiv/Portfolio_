export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    id: "force-vega",
    role: "Technical Head",
    organization: "Force Vega Racing",
    period: "SEP 2026 — PRESENT",
    location: "VIJAYAWADA, INDIA",
    description: [
      "Managing the club's website and digital platforms",
      "Developing and maintaining the online registration system",
      "Handling technical requirements",
      "Supporting digital operations",
      "Collaborating with the team to improve online presence and student experience"
    ]
  },
  {
    id: "jci",
    role: "Team Leader",
    organization: "JCI Vijayawada Impact",
    period: "SEP 2025 — PRESENT",
    location: "ECONOMIC EMPOWERMENT",
    description: [
      "Leading community empowerment initiatives and workshops.",
      "Coordinating teams for event management and execution.",
      "Fostering leadership and personal development among youth."
    ]
  }
];
