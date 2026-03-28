import Container from "../common/container";
import Heading from "../common/Heading";
import ProjectCard from "./project-card";

export type ProjectItem = {
  id: string;
  name: string;
  url?: string;
  description: string;
  image: string;
  techStack?: string[];
  githubUrl?: string;
  tags?: string[];
};

const projects: ProjectItem[] = [
  {
    id: "engineering-india-ycce",
    name: "Engineering India YCCE",
    url: "https://engineeringindiaycce.live", // replace with actual URL from resume link
    description:
      "A centralized event management platform with automated ticketing that processed 5,000+ tickets in the first month, facilitating 5+ events for 3,000+ attendees with QR-based check-ins and sustained 600+ req/sec under load.",
    image: "/banner.png",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Better-Auth",
      "Turso",
      "Drizzle ORM",
      "Vercel",
    ],
    githubUrl: "", // not provided in resume
    tags: ["Web", "Event Management", "Full Stack"],
  },
  {
    id: "nexus-collaborative-ide",
    name: "Nexus",
    url: "", // no live URL provided
    description:
      "A low-latency real-time collaborative coding platform enabling multiple developers to write and edit code simultaneously, with Monaco Editor support for 10+ languages and <50ms WebSocket latency.",
    image: "/banner.png",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Tailwind CSS",
      "Monaco Editor API",
      "WebSocket",
    ],
    githubUrl: "https://github.com/Priyanshudotdev", // replace with actual repo links (frontend / server-1, server-2)
    tags: ["Web", "Real-time", "Full Stack", "Developer Tools"],
  },
  {
    id: "maadhyam-publfdfsfdication",
    name: "Maadhyam",
    url: "", // replace with actual link from resume
    description:
      "A responsive digital publication platform built with 20+ reusable UI components for a departmental magazine.",
    image: "/banner.png",
    techStack: [], // stack not specified in resume
    githubUrl: "", // replace with actual code link from resume
    tags: ["Web", "Frontend", "Publication"],
  },
  {
    id: "maadhyam-publication",
    name: "Maadhyam",
    url: "", // replace with actual link from resume
    description:
      "A responsive digital publication platform built with 20+ reusable UI components for a departmental magazine.",
    image: "/banner.png",
    techStack: [], // stack not specified in resume
    githubUrl: "", // replace with actual code link from resume
    tags: ["Web", "Frontend", "Publication"],
  },
];

const ProofOfWork = () => {
  return (
    <Container className="px-4 sm:px-8 py-4">
      <Heading text="Proof Of Work" />

      <div className="py-8 sm:py-4">
        <ProjectCard projects={projects} />
      </div>
    </Container>
  );
};

export default ProofOfWork;
