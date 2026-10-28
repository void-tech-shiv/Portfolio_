export type ProjectStatus = 'PUBLISHED DEMO' | 'COMPLETED' | 'IN DEVELOPMENT' | 'PROTOTYPE';
export type ProjectCategory = 'SOFTWARE' | 'AI / ML' | 'WEB' | 'SECURITY';
export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  approach: string;
  category: ProjectCategory;
  technologies: string[];
  status: ProjectStatus;
  statusNote: string;
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  architecture: string;
  image?: string;
}
// Statuses are editorial project milestones, not live health checks. Review against GitHub before changing.
export const projects: Project[] = [
  {
    "id": "passcheck",
    "number": "001",
    "title": "PassCheck",
    "description": "Privacy-focused password analysis, breach checks and secure password/passphrase generation.",
    "overview": "Privacy-focused password analysis, breach checks and secure password/passphrase generation.",
    "problem": "People need useful password feedback without exposing sensitive credentials.",
    "approach": "Implemented browser-side analysis and k-anonymity breach checks.",
    "category": "SECURITY",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Web Crypto",
      "HIBP API"
    ],
    "status": "PUBLISHED DEMO",
    "statusNote": "Website deployment is linked in the repository. Public availability and all workflows have not been independently checked.",
    "githubUrl": "https://github.com/void-tech-shiv/Passcheck",
    "liveUrl": "https://get-passcheck.vercel.app/",
    "features": [
      "Password strength and pattern scoring",
      "k-anonymous breach exposure lookup",
      "Password and passphrase generator"
    ],
    "architecture": "Next.js frontend with local password evaluation and a privacy-preserving breach lookup.",
    "image": "/assets/projects/passcheck.jpg"
  },
  {
    "id": "pdfkit",
    "number": "002",
    "title": "PDFKit",
    "description": "Document utility suite for compression, conversion, page operations, annotations and PDF management.",
    "overview": "Document utility suite for compression, conversion, page operations, annotations and PDF management.",
    "problem": "Common PDF jobs are fragmented across tools and interfaces.",
    "approach": "Combined manipulation and conversion flows into a web utility suite.",
    "category": "SOFTWARE",
    "technologies": [
      "React",
      "TypeScript",
      "Fastify",
      "pdf-lib"
    ],
    "status": "PUBLISHED DEMO",
    "statusNote": "A demo URL is linked. Some document tools use a backend; full production functionality has not been verified.",
    "githubUrl": "https://github.com/void-tech-shiv/PDFkit",
    "liveUrl": "https://pdfeditorkit.vercel.app/",
    "features": [
      "Merge, split, rotate and reorder pages",
      "PDF conversion and compression tools",
      "Watermarks, signatures and document protection"
    ],
    "architecture": "React/Vite frontend with Fastify/TypeScript services and PDF processing libraries.",
    "image": "/assets/projects/pdfkit.jpg"
  },
  {
    "id": "ai-soc",
    "number": "003",
    "title": "AI-SOC Platform",
    "description": "Security operations platform with rule-based detections, alert management and incident correlation.",
    "overview": "Security operations platform with rule-based detections, alert management and incident correlation.",
    "problem": "Security signals become difficult to triage when stored as disconnected alerts.",
    "approach": "Added deterministic detection rules and incident correlation before AI investigation.",
    "category": "SECURITY",
    "technologies": [
      "Next.js",
      "FastAPI",
      "Python",
      "Neon PostgreSQL"
    ],
    "status": "IN DEVELOPMENT",
    "statusNote": "Core ingestion, detection and correlation phases are documented as complete. AI investigator and advanced dashboard remain planned.",
    "githubUrl": "https://github.com/void-tech-shiv/AI-SOC",
    "features": [
      "Synthetic security event ingestion",
      "DET-001 to DET-005 detection rules",
      "Incident correlation, scoring and alert triage"
    ],
    "architecture": "Next.js interface, FastAPI services and Neon PostgreSQL for alerts and incidents."
  },
  {
    "id": "glacia",
    "number": "004",
    "title": "GLACIA Telegram Client",
    "description": "Independent Android Telegram client with custom interface, TDLib messaging and experimental calling.",
    "overview": "Independent Android Telegram client with custom interface, TDLib messaging and experimental calling.",
    "problem": "A custom chat interface still needs reliable Telegram session and message handling.",
    "approach": "Built on TDLib and Jetpack Compose; ongoing device testing is documented.",
    "category": "SOFTWARE",
    "technologies": [
      "Kotlin",
      "Jetpack Compose",
      "TDLib",
      "Android"
    ],
    "status": "IN DEVELOPMENT",
    "statusNote": "Experimental developer builds. Real-device QA and feature-parity work are still in progress; not a store-ready release.",
    "githubUrl": "https://github.com/void-tech-shiv/Telegram",
    "features": [
      "Custom dark and light chat themes",
      "TDLib chat history, search and message updates",
      "Voice/video calling work with device QA limitations"
    ],
    "architecture": "Native Kotlin/Jetpack Compose app using TDLib for Telegram sessions and messaging."
  },
  {
    "id": "docverify",
    "number": "005",
    "title": "DocVerify AI",
    "description": "Identity-document screening prototype combining OCR, MRZ parsing, tamper analysis and risk scoring.",
    "overview": "Identity-document screening prototype combining OCR, MRZ parsing, tamper analysis and risk scoring.",
    "problem": "Document review involves several different signals, not a single image check.",
    "approach": "Combines multiple document checks into an explainable prototype workflow.",
    "category": "AI / ML",
    "technologies": [
      "Python",
      "FastAPI",
      "React",
      "OpenCV"
    ],
    "status": "PROTOTYPE",
    "statusNote": "Research/demo prototype with simulated registry checks; not an official identity-verification product.",
    "githubUrl": "https://github.com/void-tech-shiv/AI-Based-Fake-Identity-Document-Screening-System-SIH26188",
    "features": [
      "Document text and MRZ field extraction",
      "Tampering and face-match analysis",
      "Explainable risk score and PDF screening report"
    ],
    "architecture": "React web interface backed by a FastAPI document-screening pipeline and PostgreSQL."
  },
  {
    "id": "skilltrack",
    "number": "006",
    "title": "SkillTrack",
    "description": "Multi-role training and employment analytics application with reporting and dropout-risk modeling.",
    "overview": "Multi-role training and employment analytics application with reporting and dropout-risk modeling.",
    "problem": "Training outcomes are hard to follow across organizations and user roles.",
    "approach": "Created scoped dashboards, ingest workflows and model-assisted analytics.",
    "category": "WEB",
    "technologies": [
      "React",
      "Express",
      "Prisma",
      "FastAPI"
    ],
    "status": "PROTOTYPE",
    "statusNote": "A demonstration deployment is linked; government adoption or production usage is not claimed.",
    "githubUrl": "https://github.com/void-tech-shiv/skilltrack",
    "liveUrl": "https://skilltrack-beta1.vercel.app/",
    "features": [
      "Role-scoped dashboards for five audiences",
      "Trainee search, filters and data ingestion",
      "Risk modeling and employment claim verification"
    ],
    "architecture": "React frontend, Express/Prisma API with PostgreSQL and FastAPI/Scikit-learn ML service.",
    "image": "/assets/projects/skilltrack.jpg"
  },
  {
    "id": "ai-slang",
    "number": "007",
    "title": "AI Slang Translator",
    "description": "Indian slang and tone-aware translator with multilingual chat, voice tools and a mobile client.",
    "overview": "Indian slang and tone-aware translator with multilingual chat, voice tools and a mobile client.",
    "problem": "Literal translation often loses emotion and regional phrasing.",
    "approach": "Added region, tone and conversation context controls with chat and voice experiments.",
    "category": "AI / ML",
    "technologies": [
      "Next.js",
      "FastAPI",
      "WebSockets",
      "React Native"
    ],
    "status": "IN DEVELOPMENT",
    "statusNote": "Web, API and mobile source are present; deployment, mobile QA and production security work remain.",
    "githubUrl": "https://github.com/void-tech-shiv/AI-slang",
    "features": [
      "Hinglish, Telugu, Hindi and English tone adaptation",
      "WebSocket chat with regional language preferences",
      "Speech translation and Expo app source"
    ],
    "architecture": "Next.js web app, FastAPI translation and chat backend, MongoDB and Expo mobile client."
  },
  {
    "id": "klu-bza",
    "number": "008",
    "title": "KLU BZA Attendance Companion",
    "description": "Unofficial KL University attendance companion built for Flutter web and Android.",
    "overview": "Unofficial KL University attendance companion built for Flutter web and Android.",
    "problem": "Students want a clearer view of attendance and target calculations.",
    "approach": "Created a responsive Flutter UI and an unofficial ERP integration preview.",
    "category": "WEB",
    "technologies": [
      "Flutter",
      "Dart",
      "FastAPI",
      "Python"
    ],
    "status": "PROTOTYPE",
    "statusNote": "Integration preview only. Authenticated ERP login and attendance flows still need student-owner verification; demo records are fictional.",
    "githubUrl": "https://github.com/void-tech-shiv/KLU-BZA",
    "features": [
      "Student login/CAPTCHA integration preview",
      "Attendance component and target calculations",
      "Web and Android development builds"
    ],
    "architecture": "Flutter clients use a FastAPI adapter to the university ERP; real integration not yet verified."
  },
  {
    "id": "leetcode-bot",
    "number": "009",
    "title": "LeetCode Companion SaaS",
    "description": "Multi-user coding companion prototype with memberships, billing, Telegram tools and an extension.",
    "overview": "Multi-user coding companion prototype with memberships, billing, Telegram tools and an extension.",
    "problem": "Coding practice workflows span browser tools, reminders and account plans.",
    "approach": "Prototyped connected web, extension, Telegram and billing experiences.",
    "category": "WEB",
    "technologies": [
      "Next.js",
      "Node.js",
      "Prisma",
      "Razorpay"
    ],
    "status": "IN DEVELOPMENT",
    "statusNote": "Repository contains payment and companion flows; end-to-end live billing, admin access and rollout are not verified.",
    "githubUrl": "https://github.com/void-tech-shiv/leetcode_bot",
    "features": [
      "Role-based accounts and subscription billing logic",
      "Telegram bot and Chrome extension components",
      "Problem tools, schedules and solution history"
    ],
    "architecture": "Next.js web app, Express API, Prisma/PostgreSQL, Razorpay integrations and a Chrome extension."
  },
  {
    "id": "shellforge",
    "number": "010",
    "title": "ShellForge",
    "description": "A Unix-style command shell in C with pipelines, redirection and job controls.",
    "overview": "A Unix-style command shell in C with pipelines, redirection and job controls.",
    "problem": "Learning operating-system concepts benefits from building a real shell.",
    "approach": "Implemented parsing, processes and redirection in C.",
    "category": "SOFTWARE",
    "technologies": [
      "C",
      "GNU Readline",
      "POSIX",
      "Make"
    ],
    "status": "COMPLETED",
    "statusNote": "Core command-line implementation and Ubuntu build instructions are documented; no independently verified release binary.",
    "githubUrl": "https://github.com/void-tech-shiv/-shellforge-",
    "features": [
      "Command tokenization, parsing and expansion",
      "Pipes, I/O redirection and background jobs",
      "History and beginner-friendly command aliases"
    ],
    "architecture": "C command-line implementation using POSIX process APIs and GNU Readline."
  },
  {
    "id": "sportspulse",
    "number": "011",
    "title": "SportsPulse",
    "description": "Java sports analytics CLI demonstrating real data-structures and algorithm use cases.",
    "overview": "Java sports analytics CLI demonstrating real data-structures and algorithm use cases.",
    "problem": "Classroom algorithms can feel disconnected from practical scenarios.",
    "approach": "Mapped search, optimization and randomization algorithms to sports workflows.",
    "category": "SOFTWARE",
    "technologies": [
      "Java",
      "DSA",
      "CLI",
      "File I/O"
    ],
    "status": "COMPLETED",
    "statusNote": "Documented CLI implementation with build/run instructions; hosted web version and complete test coverage are not verified.",
    "githubUrl": "https://github.com/void-tech-shiv/SPORTSPULSE",
    "features": [
      "Player, team and match records",
      "Search, ranking and comparison algorithms",
      "Modular CLI and file-based persistence"
    ],
    "architecture": "Modular Java CLI with algorithm, service, model and persistence layers."
  },
  {
    "id": "tools-store",
    "number": "012",
    "title": "Shiv Tools Marketplace",
    "description": "Digital product marketplace for software tools with user accounts, payments and license management.",
    "overview": "Digital product marketplace for software tools with user accounts, payments and license management.",
    "problem": "Digital tools need customer access, payment handling and license checks.",
    "approach": "Built account, checkout and license management modules.",
    "category": "WEB",
    "technologies": [
      "Next.js",
      "PostgreSQL",
      "Neon",
      "Razorpay"
    ],
    "status": "IN DEVELOPMENT",
    "statusNote": "Payment, admin and license workflows are in the repository; live checkout and production readiness are not confirmed.",
    "githubUrl": "https://github.com/void-tech-shiv/shiv-tools-store",
    "features": [
      "Product catalog and administrator workflows",
      "Payment verification and webhook handling",
      "License issue, verification and download management"
    ],
    "architecture": "Next.js application with Neon PostgreSQL and Razorpay order/webhook integrations."
  },
  {
    "id": "cybershield",
    "number": "013",
    "title": "CyberShield",
    "description": "Security assessment dashboard that orchestrates OWASP ZAP scans on authorized targets.",
    "overview": "Security assessment dashboard that orchestrates OWASP ZAP scans on authorized targets.",
    "problem": "Security testing needs clear authorization, orchestration and reports.",
    "approach": "Integrated ZAP scanning with separate passive analysis and reporting.",
    "category": "SECURITY",
    "technologies": [
      "React",
      "FastAPI",
      "OWASP ZAP",
      "PostgreSQL"
    ],
    "status": "PROTOTYPE",
    "statusNote": "Local assessment and lab workflow is documented; no public hosted scanner or independent deployment verification.",
    "githubUrl": "https://github.com/void-tech-shiv/CyberShield",
    "features": [
      "OWASP ZAP-assisted active scanning",
      "Passive header, cookie and TLS checks",
      "Findings, reports and lab-based testing"
    ],
    "architecture": "React dashboard, Python FastAPI service and local OWASP ZAP container stack."
  }
];
export const projectStatuses: ProjectStatus[] = ['PUBLISHED DEMO', 'COMPLETED', 'IN DEVELOPMENT', 'PROTOTYPE'];
