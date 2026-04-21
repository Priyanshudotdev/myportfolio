import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import GradientButton from "../ui/gradient-button";
import type { ProjectItem } from "./proof-of-work";

const Card = ({ project }: { project: ProjectItem }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/project/${project.id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/project/${project.id}`);
        }
      }}
      role="button"
      tabIndex={0}
      className={cn(
        "group relative flex flex-col rounded-lg cursor-pointer",
        "bg-muted border border-muted p-1.5",
        "transition-opacity duration-200 opacity-70 hover:opacity-100",
        "w-full",
      )}
    >
      <div className="relative w-full h-52 rounded-md overflow-hidden shrink-0 border border-muted/50">
        <Image
          src={project.image}
          alt={project.name || "Project image"}
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            isHovered ? "opacity-0" : "opacity-100",
          )}
        />

        {isHovered && (
          <video
            muted
            autoPlay
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={project.videoUrl} />
          </video>
        )}
      </div>

      <div className="flex items-center justify-between px-1.5 pt-2.5 pb-1">
        <h3 className="text-sm text-muted-foreground line-clamp-1 flex-1 min-w-0">
          {project.name}
        </h3>

        <div className="flex items-center gap-1.5 ml-2 shrink-0">
          {project.githubUrl && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, "_blank");
              }}
              className="flex items-center justify-center w-6 h-6 rounded-full border border-muted text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-3"
                role="img"
                aria-label="GitHub"
              >
                <title>GitHub</title>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
          )}
          {project.url && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.url, "_blank");
              }}
              className="flex items-center justify-center w-6 h-6 rounded-full border border-muted text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
              aria-label="Live link"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="size-3"
                role="img"
                aria-label="Live link"
              >
                <title>Live link</title>
                <path
                  d="M7 17L17 7M17 7H7M17 7v10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ projects }: { projects: ProjectItem[] }) => {
  const displayedProjects = projects.slice(0, 4);

  return (
    <div className="flex flex-col items-center gap-4 w-full px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 sm:gap-y-2 w-full">
        {" "}
        {displayedProjects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>

      {projects.length > 4 && (
        <GradientButton
          onClick={() => window.open("/work", "_self")}
          className="px-4 flex items-center gap-x-2 py-2 text-sm"
        >
          View All <ChevronRight className="size-4" />
        </GradientButton>
      )}
    </div>
  );
};

export default ProjectCard;
