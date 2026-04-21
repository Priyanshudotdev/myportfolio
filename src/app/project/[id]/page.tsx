"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useRef, useState } from "react";
import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { Badge } from "@/components/ui/badge";
import { getProjectById, type ProjectItem } from "@/lib/projects-data";

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

type ProjectDetail = {
  id: string;
  title: string;
  description: string;
  extendedDescription: string;
  tags: string[];
  image: string;
  videoUrl: string;
  githubUrl: string;
  liveUrl: string;
  tweetUrl: null;
  year: string;
};

const mapToProjectDetail = (p: ProjectItem): ProjectDetail => ({
  id: p.id,
  title: p.name,
  description: p.description,
  videoUrl: p.videoUrl,
  extendedDescription: p.description,
  tags: p.tags || p.techStack || [],
  image: p.image,
  githubUrl: p.githubUrl || "",
  liveUrl: p.url || "",
  tweetUrl: null,
  year: "2024",
});

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;
  const projectItem = getProjectById(projectId);

  if (!projectItem) notFound();

  const project = mapToProjectDetail(projectItem);

  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full min-h-screen">
      <Container className="border-l border-r bg-background border-l-muted border-r-muted z-10 min-h-screen h-full w-full">
        <PageNavigation className="pt-4 px-4 sm:px-6" />

        <div className="px-6 sm:px-8 py-8">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="cursor-pointer hover:opacity-75 transition-opacity duration-200 ease-in-out font-serif italic text-4xl sm:text-5xl text-foreground mb-4">
                {project.title}
              </h1>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-muted hover:border-foreground/20 hover:bg-muted/30 transition-all duration-300"
                  aria-label="View live demo"
                >
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-muted hover:border-foreground/20 hover:bg-muted/30 transition-all duration-300"
                  aria-label="View on GitHub"
                >
                  <GithubIconSvg className="w-5 h-5 text-foreground" />
                </Link>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs px-3 py-1.5 bg-foreground/5 text-muted-foreground hover:bg-foreground/10 border border-muted rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Media: image shown instantly, video fades in once ready */}
          <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden border border-muted bg-muted/30">
            {/* Thumbnail — always rendered, fades out when video is ready */}
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              priority
              className={`object-cover transition-opacity duration-700 ${videoReady ? "opacity-0" : "opacity-100"}`}
            />

            {!videoReady && (
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-background/60 backdrop-blur-sm border border-muted rounded-full px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground/60" />
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Loading video…
                  </span>
                </div>
              </div>
            )}

            <video
              ref={videoRef}
              controls={false}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setVideoReady(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
            >
              <source src={project.videoUrl} />
            </video>
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>
            {project.tweetUrl && (
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.description.endsWith(".") ? "" : "."} you can view the{" "}
                <Link
                  href={project.tweetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors underline"
                >
                  tweet here
                </Link>
              </p>
            )}
          </div>

          <div className="border-t border-muted my-12" />

          <div className="text-center">
            <Link
              href="https://github.com/Priyanshudotdev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIconSvg className="w-4 h-4" />
              View more projects on my GitHub
            </Link>
          </div>
        </div>

        <Footer />
      </Container>
    </div>
  );
}
