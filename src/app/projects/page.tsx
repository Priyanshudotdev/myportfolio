"use client";

import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const GithubIconSvg = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    role="img"
    aria-label="GitHub"
  >
    <title>GitHub</title>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

type Project = {
  id: string;
  title: string;
  description: string;
  extendedDescription?: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  tweetUrl?: string | null;
  year: string;
};

const PROJECTS: Project[] = [
  {
    id: "engineering-india-ycce",
    title: "Engineering India YCCE",
    description: "A centralized event management platform with automated ticketing that processed 5,000+ tickets in the first month.",
    extendedDescription: "Facilitated 5+ events for 3,000+ attendees with QR-based check-ins and sustained 600+ req/sec under load. Built with modern web technologies and optimized for high-traffic event scenarios.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query", "Better-Auth", "Turso", "Drizzle ORM", "Vercel"],
    image: "/banner.png",
    githubUrl: "",
    liveUrl: "https://engineeringindiaycce.live",
    tweetUrl: null,
    year: "2024",
  },
  {
    id: "nexus-collaborative-ide",
    title: "Nexus",
    description: "A low-latency real-time collaborative coding platform enabling multiple developers to write and edit code simultaneously.",
    extendedDescription: "Features Monaco Editor support for 10+ languages with <50ms WebSocket latency. Perfect for pair programming and team coding sessions with seamless real-time synchronization.",
    tags: ["React", "Node.js", "Express.js", "Socket.io", "Tailwind CSS", "Monaco Editor API", "WebSocket"],
    image: "/banner.png",
    githubUrl: "https://github.com/Priyanshudotdev",
    liveUrl: "",
    tweetUrl: null,
    year: "2024",
  },
  {
    id: "maadhyam",
    title: "Maadhyam",
    description: "A responsive digital publication platform built with 20+ reusable UI components for a departmental magazine.",
    extendedDescription: "Designed to modernize the traditional departmental magazine with a digital-first approach. Features article management, responsive layouts, and an intuitive reading experience.",
    tags: ["Web", "Frontend", "Magazine", "React", "UI Components"],
    image: "/banner.png",
    githubUrl: "",
    liveUrl: "",
    tweetUrl: null,
    year: "2023",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/project/${project.id}`)}
      className="group cursor-pointer rounded-xl border border-muted bg-muted/30 p-4 transition-all duration-300 hover:border-foreground/20 hover:bg-muted/50"
    >
      {/* Project Image */}
      <div className="relative mb-4 aspect-16/10 overflow-hidden rounded-lg border border-muted">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <h2 className="font-serif text-2xl italic text-foreground transition-opacity duration-200 group-hover:opacity-75">
          {project.title}
        </h2>
        <div className="flex items-center gap-1.5">
          {project.liveUrl && (
            <div
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                window.open(project.liveUrl, "_blank");
              }}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-muted transition-all duration-300 hover:border-foreground/20 hover:bg-muted/30"
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                  window.open(project.liveUrl, "_blank");
                }
              }}
            >
              <ArrowUpRight className="h-4 w-4 text-foreground" />
            </div>
          )}
          {project.githubUrl && (
            <div
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                window.open(project.githubUrl, "_blank");
              }}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-muted transition-all duration-300 hover:border-foreground/20 hover:bg-muted/30"
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank");
                }
              }}
            >
              <GithubIconSvg className="h-4 w-4 text-foreground" />
            </div>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 5).map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="border-muted bg-foreground/5 px-2 py-0.5 text-[10px] text-muted-foreground hover:bg-foreground/10"
          >
            {tag}
          </Badge>
        ))}
        {project.tags.length > 5 && (
          <Badge
            variant="secondary"
            className="border-muted bg-foreground/5 px-2 py-0.5 text-[10px] text-muted-foreground"
          >
            +{project.tags.length - 5}
          </Badge>
        )}
      </div>

      {/* Description */}
      <p className="mb-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* View Project Link */}
      <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
        <span>View project</span>
        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen w-full">
      <Container className="z-10 h-full min-h-screen w-full border-l border-r border-l-muted border-r-muted bg-background">
        <PageNavigation className="px-4 pt-4 sm:px-6" />

        <div className="px-6 py-8 sm:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="mb-3 font-serif text-4xl italic text-foreground sm:text-5xl">
              Projects
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              A collection of projects I&apos;ve worked on. Each project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-muted" />

          {/* GitHub Link */}
          <div className="text-center">
            <Link
              href="https://github.com/Priyanshudotdev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIconSvg className="h-4 w-4" />
              View more projects on my GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <Footer />
      </Container>
    </div>
  );
}
