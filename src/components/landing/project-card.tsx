import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import GradientButton from "../ui/gradient-button";
import type { ProjectItem } from "./proof-of-work";

const ProjectCard = ({ projects }: { projects: ProjectItem[] }) => {
  const router = useRouter();
  const displayedProjects =
    projects.length >= 4 ? projects.slice(0, 4) : projects;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between sm:items-center gap-y-4 px-4">
      <div className="grid sm:grid-cols-2 grid-cols-1 space-y-4 sm:space-x-6">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => router.push(`/project/${project.id}`)}
            className={cn(
              "rounded-lg flex flex-col cursor-pointer hover:scale-[1.01] transition ease-in text-left bg-muted p-1.5 border border-muted w-full sm:w-80 h-80",
              "transition ease-in hover:opacity-100 opacity-75",
            )}
          >
            <div className="w-full rounded-lg h-[80%] relative overflow-hidden border border-muted">
              <Image
                src={project.image}
                alt={project.name || "Project image"}
                width={320}
                height={180}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-muted-foreground py-4 px-2">
                {project.name}
              </h3>
              <div className="text-center flex mx-2 items-center justify-center">
                <div
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    window.open(project.githubUrl || "#", "_blank");
                  }}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.stopPropagation();
                      window.open(project.githubUrl || "#", "_blank");
                    }
                  }}
                >
                  {/* <GradientButton className="text-xs cursor-pointer">
                    <BsGithub className="size-4" />
                  </GradientButton> */}
                </div>
                <div
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    window.open(project.url || "#", "_blank");
                  }}
                  className="cursor-pointer ml-2"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.stopPropagation();
                      window.open(project.url || "#", "_blank");
                    }
                  }}
                >
                  {/* <GradientButton className="border-none cursor-pointer">
                    <LinkIcon className="size-4" />
                  </GradientButton> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {displayedProjects.length > 4 && (
        <div className="flex items-center justify-center w-full mt-4">
          <GradientButton
            onClick={() => window.open("/work", "_self")}
            className="px-4 flex items-center justify-center gap-x-2 cursor-pointer py-2 text-sm"
          >
            View All <ChevronRight className="size-4" />
          </GradientButton>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
