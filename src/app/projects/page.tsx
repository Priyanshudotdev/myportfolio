'use client';

import { ArrowUpRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Container from '@/components/common/container';
import Footer from '@/components/common/footer';
import { PageNavigation } from '@/components/common/page-navigation';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/projects-data';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  tweetUrl: string | null;
  year: string;
};

const GithubIconSvg = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} role="img" aria-label="GitHub">
    <title>GitHub</title>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const PROJECTS: Project[] = projects.map((p) => ({
  id: p.id,
  title: p.name,
  description: p.description,
  tags: p.tags || p.techStack || [],
  image: p.image,
  githubUrl: p.githubUrl || '',
  liveUrl: p.url || '',
  tweetUrl: null,
  year: '2024',
}));

const ProjectCard = ({ project }: { project: Project }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/project/${project.id}`)}
      className="group cursor-pointer rounded-xl border border-muted bg-muted/20 p-4 transition-opacity duration-200 hover:opacity-75"
    >
      {/* Thumbnail */}
      <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-muted">
        <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover" />
      </div>

      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <h2 className="font-serif text-2xl italic text-foreground">{project.title}</h2>
        <div className="flex items-center gap-1.5">
          {project.liveUrl && (
            <div
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank');
              }}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-muted"
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
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
                window.open(project.githubUrl, '_blank');
              }}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-muted"
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
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
            key={String(tag)}
            variant="secondary"
            className="border-muted bg-foreground/5 px-2 py-0.5 text-[10px] text-muted-foreground"
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

      <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
        <span>View project</span>
        <ChevronRight className="h-3 w-3" />
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
          <div className="mb-8">
            <h1 className="mb-3 font-serif text-4xl italic text-foreground sm:text-5xl">
              Projects
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              A collection of projects I&apos;ve worked on. Each project represents a unique
              challenge and learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="my-12 border-t border-muted" />

          <div className="text-center">
            <Link
              href="https://github.com/Priyanshudotdev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-opacity duration-200 hover:opacity-75"
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
