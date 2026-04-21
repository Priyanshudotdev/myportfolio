"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { Badge } from "@/components/ui/badge";

// GitHub Icon SVG
const GithubIcon = ({ className }: { className?: string }) => (
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

const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, responsive design, and interactive components.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/Priyanshudotdev/portfolio",
    liveUrl: "https://priyanshudotdev.vercel.app",
    year: "2024",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/Priyanshudotdev/ecommerce",
    liveUrl: "https://demo-ecommerce.vercel.app",
    year: "2024",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.",
    tags: ["Next.js", "Prisma", "WebSocket", "Docker"],
    githubUrl: "https://github.com/Priyanshudotdev/tasks",
    liveUrl: "https://tasks-demo.vercel.app",
    year: "2023",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool using OpenAI API for blog posts, social media, and marketing copy.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    githubUrl: "https://github.com/Priyanshudotdev/ai-content",
    liveUrl: "https://ai-content-demo.vercel.app",
    year: "2023",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.",
    tags: ["React", "Mapbox", "Weather API", "PWA"],
    githubUrl: "https://github.com/Priyanshudotdev/weather",
    liveUrl: "https://weather-demo.vercel.app",
    year: "2023",
  },
  {
    id: 6,
    title: "Developer Tools CLI",
    description:
      "Command-line utility for common development tasks including project scaffolding, git workflows, and deployment helpers.",
    tags: ["Rust", "CLI", "Git", "DevOps"],
    githubUrl: "https://github.com/Priyanshudotdev/devtools",
    liveUrl: null,
    year: "2024",
  },
];

export default function WorkPage() {
  return (
    <div className="relative w-full min-h-screen">
      <Container className="border-l border-r bg-background border-l-muted border-r-muted z-10 min-h-screen h-full w-full">
        <PageNavigation className="pt-4 px-4 sm:px-6" />

        <div className="px-6 sm:px-8 py-12">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="font-serif italic text-4xl sm:text-5xl text-foreground mb-4">
              Selected Work
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              A collection of projects I&apos;ve worked on. Each project
              represents a unique challenge and learning opportunity. Built with
              modern technologies and best practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col p-6 rounded-xl border border-muted bg-muted/20 hover:bg-muted/40 hover:border-foreground/20 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-lg text-foreground group-hover:text-foreground/90">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-foreground/5 text-muted-foreground hover:bg-foreground/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* More on GitHub */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              View more projects on my GitHub
            </p>
            <Link
              href="https://github.com/Priyanshudotdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-muted hover:border-foreground/20 hover:bg-muted/30 transition-all duration-300 text-sm text-foreground"
            >
              <GithubIcon className="w-4 h-4" />
              github.com/Priyanshudotdev
            </Link>
          </div>
        </div>

        <Footer />
      </Container>
    </div>
  );
}
