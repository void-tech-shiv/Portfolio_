export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  approach: string;
  category: 'ALL' | 'SOFTWARE' | 'AI / ML' | 'WEB' | 'SECURITY';
  technologies: string[];
  status: string;
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  architecture: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "passcheck",
    number: "001",
    title: "PassCheck",
    description: "Privacy-focused password strength and security checker analyzing entropy, patterns, and breach exposure.",
    overview: "PassCheck is a robust, client-side application designed to evaluate password strength with advanced heuristics. It focuses on privacy by keeping all evaluations strictly within the user's browser.",
    problem: "Many password strength checkers send plaintext passwords to backend servers, compromising privacy. Users need a reliable way to check strength without exposing credentials.",
    approach: "Utilizing zxcvbn for client-side entropy estimation and querying HaveIBeenPwned API using k-Anonymity (only sending the first 5 characters of a SHA-1 hash) ensures zero-knowledge verification.",
    category: "SECURITY",
    technologies: ["TypeScript", "React", "zxcvbn", "TailwindCSS"],
    status: "LIVE",
    githubUrl: "https://github.com/void-tech-shiv/Passcheck",
    liveUrl: "https://get-passcheck.vercel.app/",
    features: [
      "Client-side entropy calculation",
      "Pattern matching for dictionary words",
      "Breach exposure check (k-Anonymity)",
      "Secure password and passphrase generator"
    ],
    architecture: "React SPA deployed on Vercel. Fully client-side processing using zxcvbn and Web Crypto API for hashing.",
    image: "/assets/projects/passcheck.jpg"
  },
  {
    id: "pdfkit",
    number: "002",
    title: "PDFKit",
    description: "A powerful toolkit for manipulating, splitting, merging, and editing PDF files securely in the browser.",
    overview: "PDFKit provides an intuitive interface for complex PDF operations. By leveraging modern web technologies, it ensures sensitive documents never leave the user's device.",
    problem: "Most PDF tools require uploading sensitive documents to untrusted third-party servers, posing a severe data privacy risk.",
    approach: "Implemented entirely on the client-side using pdf-lib. All file processing happens in the browser's memory, ensuring complete privacy.",
    category: "SOFTWARE",
    technologies: ["TypeScript", "React", "pdf-lib"],
    status: "LIVE",
    githubUrl: "https://github.com/void-tech-shiv/PDFkit",
    liveUrl: "https://pdfeditorkit.vercel.app/",
    features: [
      "Merge multiple PDFs",
      "Split PDFs by page range",
      "Extract specific pages",
      "Client-side execution"
    ],
    architecture: "React frontend utilizing pdf-lib for binary PDF manipulation entirely within the browser context.",
    image: "/assets/projects/pdfkit.jpg"
  },
  {
    id: "skilltrack",
    number: "003",
    title: "Skill & Employment Outcomes Platform",
    description: "Role-based dashboard for tracking training outcomes, employment verification and state-level skill analytics.",
    overview: "A multi-role skill and employment outcomes analytics platform with admin, provider, trainee, employer and analyst portals.",
    problem: "Training outcomes, placements and employment claims are difficult to analyze when they are scattered across providers and institutions.",
    approach: "Role-scoped dashboards, trainee records, provider KPIs, data ingestion, employment verification and machine-learning risk analysis.",
    category: "WEB",
    technologies: ["React", "Express", "Prisma", "PostgreSQL", "FastAPI"],
    status: "PROJECT",
    githubUrl: "https://github.com/void-tech-shiv/skilltrack",
    liveUrl: "https://skilltrack-beta1.vercel.app/",
    features: [
      "Multi-role dashboards and scoped access",
      "Trainee search, filtering and pagination",
      "Employment-claim verification",
      "Machine-learning dropout risk scoring"
    ],
    architecture: "Vite/React frontend, Express.js API with Prisma and PostgreSQL, plus a Python FastAPI machine-learning service.",
    image: "/assets/projects/skilltrack.jpg"
  },
  {
    id: "sih26188",
    number: "004",
    title: "AI-Based Fake Identity Document Screening System",
    description: "An advanced machine learning system for detecting forged identity documents using computer vision.",
    overview: "This system leverages advanced computer vision and machine learning models to detect tampering, forgery, and inconsistencies in identity documents.",
    problem: "Identity fraud through sophisticated document forgery is increasing, requiring automated, highly accurate screening systems.",
    approach: "Utilizing deep learning models for anomaly detection in document structures, fonts, and holograms.",
    category: "AI / ML",
    technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
    status: "IN DEVELOPMENT",
    githubUrl: "https://github.com/void-tech-shiv/AI-Based-Fake-Identity-Document-Screening-System-SIH26188",
    features: [
      "Tamper detection in identity cards",
      "Font and alignment anomaly detection",
      "Computer vision pipeline for image enhancement",
      "Automated screening APIs"
    ],
    architecture: "Python-based computer vision pipeline served via a FastAPI backend for real-time document screening."
  }
];
