import type { ReactNode } from "react";

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  image?: string;
  details: ReactNode;
}

export const certifications: CertificationItem[] = [
  {
    id: "udemy-webdev",
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-140f713a-8266-4eaf-a615-f1deacb2dda9/",
    image: "/certificates/udemy-fullstack.jpg",
    details: (
      <div className="space-y-4">
        <div>
          <span className="text-foreground font-medium">What I learned:</span>
          <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-muted-foreground">
            <li>HTML, CSS, Tailwind CSS for responsive UI</li>
            <li>JavaScript, OOP, DOM/BOM manipulation</li>
            <li>Git & GitHub version control</li>
            <li>Backend development with Node.js</li>
            <li>MongoDB, incl. aggregation pipelines</li>
          </ul>
        </div>
        <div>
          <span className="text-foreground font-medium">How I implemented it:</span>
          <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-muted-foreground">
            <li>Built responsive pages with HTML/CSS/Tailwind</li>
            <li>Structured projects using JS OOP concepts</li>
            <li>Used Git/GitHub across all projects</li>
            <li>Built backend systems with Node.js</li>
            <li>Queried MongoDB using aggregation pipelines</li>
          </ul>
        </div>
        <div>
          <span className="text-foreground font-medium">Outcome:</span>
          <p className="mt-1 text-muted-foreground">End-to-end full-stack skills, UI to database</p>
        </div>
      </div>
    ),
  },
  {
    id: "hackerrank-react",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "2024",
    link: "https://www.hackerrank.com/certificates/e2e9c28b915c",
    image: "/certificates/hackerrank-frontend.jpg",
    details: (
      <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
        <li>Successfully passed HackerRank's Frontend Developer (React) role certification assessment.</li>
        <li>Demonstrated proficiency in React.js, JavaScript (ES6+), HTML5, CSS3, and modern frontend development practices.</li>
        <li>Validated skills in building responsive, component-based user interfaces, state management, and writing maintainable frontend code.</li>
        <li>Showcased the ability to solve practical frontend engineering problems commonly encountered in real-world React applications.</li>
      </ul>
    ),
  }
];

export const getCertificationById = (id: string): CertificationItem | undefined => {
  return certifications.find((cert) => cert.id === id);
};
