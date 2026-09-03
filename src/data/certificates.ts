export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verificationUrl?: string;
}

// These IDs correspond to the image files provided in the certifacate directory.
// You can map the actual filenames (like 1764156593426.jpg) to the specific certificate titles.
export const certificates: Certificate[] = [
  {
    id: "fcc-fedl",
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2025",
    image: "/assets/certificates/front-end.jpg",
    verificationUrl: "https://www.freecodecamp.org/certification/shivanshu_satyajeet/front-end-development-libraries"
  },
  {
    id: "fcc-jads",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2025",
    image: "/assets/certificates/js-algo.jpg",
    verificationUrl: "https://www.freecodecamp.org/certification/shivanshu_satyajeet/javascript-algorithms-and-data-structures"
  },
  {
    id: "fcc-rwd",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2025",
    image: "/assets/certificates/rwd.jpg",
    verificationUrl: "https://www.freecodecamp.org/certification/shivanshu_satyajeet/responsive-web-design"
  },
  {
    id: "hackerrank-cert",
    title: "HackerRank certificate",
    issuer: "HackerRank",
    date: "2025",
    image: "/assets/certificates/hackerrank.jpg",
    verificationUrl: "https://www.hackerrank.com/certificates/588c0e78b0e8"
  },
  {
    id: "skilljar-cert",
    title: "Skilljar certificate",
    issuer: "Skilljar",
    date: "2025",
    image: "/assets/certificates/skilljar.jpg",
    verificationUrl: "https://verify.skilljar.com/c/oyko7zrkhybi"
  },
  {
    id: "google-skillshop",
    title: "Google Skillshop credential",
    issuer: "Google Skillshop",
    date: "2025",
    image: "/assets/certificates/google.jpg",
    verificationUrl: "https://skillshop.credential.net/f22ab88c-ea65-4f30-9478-0dae22bac3fc"
  },
  {
    id: "simp-eh",
    title: "Ethical Hacking 101",
    issuer: "Simplilearn SkillUp",
    date: "2025",
    image: "/assets/certificates/1764156593426.jpg",
  },
  {
    id: "simp-ai",
    title: "AI Agents for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "2025",
    image: "/assets/certificates/1770051085539.jpg",
  }
];
