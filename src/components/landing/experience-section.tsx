import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Container from "../common/container";
import Divider from "../common/divider";
import Heading from "../common/Heading";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
  href?: string;
  logoUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "nothing",
    company: "Vectortek Lab",
    position: "Founding Frontend Intern",
    duration: "Dec 2024 – July 2025",
    location: "Nagpur, India ( Hybrid )",
    description:
      "Developed and deployed cutting-edge solutions, including multi-select preferences, browser-based video recording, and API integrations like WhatsApp/email reminders. Optimized workflows with autosave features and real-time scraping, leveraging Next.js, Supabase, and Cloudflare workers.",
    achievements: [
      "Built and delivered a secure user authentication system (Sign-up/Login).",
      "Implemented scalable global state management for consistent data flow across the application.",
      "Build the Student Dashboard from scratch, enabling users to create subjects and track goals through dynamic UI forms and API integrations.",
      "Contributed to onboarding flow optimization and improved overall user experience.",
      "Assisted in DevOps automation for smoother deployment and development workflows.",
    ],
    href: "https://vectorlab.in/",
    logoUrl: "https://vectorlab.in/favicon.ico",
  },
];

const ExperienceSection = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(
    Object.fromEntries(experiences.map((exp) => [exp.id, true])),
  );

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container className="px-4 sm:px-8 py-4">
      <Heading text="Professional Experience" />

      <div className="py-4 flex flex-col items-center gap-4">
        {experiences.map((exp) => {
          const isExpanded = expandedIds[exp.id] ?? true;

          return (
            <div className="text-sm h-full w-full" key={exp.id}>
              {/* Card Header */}
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-x-4">
                    <h3 className="text-lg">{exp.company}</h3>
                    <button
                      type="button"
                      className="sm:hidden p-1 rounded-full cursor-pointer hover:opacity-50"
                      onClick={() => toggleExpand(exp.id)}
                    >
                      <div
                        style={{
                          transition:
                            "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: isExpanded
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                          display: "inline-block",
                        }}
                      >
                        <ChevronRight className="size-4" />
                      </div>
                    </button>
                    {/* Desktop: Button with tooltip */}
                    <div className="hidden sm:block">
                      <Tooltip>
                        <TooltipTrigger
                          type="button"
                          className="p-1 rounded-full cursor-pointer hover:opacity-50"
                          onClick={() => toggleExpand(exp.id)}
                        >
                          <div
                            style={{
                              transition:
                                "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                              transform: isExpanded
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                              display: "inline-block",
                            }}
                          >
                            <ChevronRight className="size-4" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          {isExpanded ? "Show less" : "Show more"}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                  <p className="text-muted-foreground pointer-events-none">
                    {exp.position}
                  </p>
                </div>
                <div className="text-muted-foreground">
                  <h3>{exp.duration}</h3>
                  <p>{exp.location}</p>
                </div>
              </div>

              <div
                className={`transition-all duration-700 overflow-hidden ${isExpanded ? "max-h-125" : "max-h-0"}`}
              >
                <div className="transition ">
                  <Divider className="px-12" />

                  <p>Technologies & Tools</p>
                  {
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        { name: "React", icon: "/svg/reactjs.svg" },
                        { name: "TypeScript", icon: "/svg/typescript.svg" },
                        { name: "JavaScript", icon: "/svg/javascript.svg" },
                        { name: "CSS", icon: "/svg/css.svg" },
                        { name: "Docker", icon: "/svg/docker.svg" },
                        { name: "GitHub", icon: "/svg/github.svg" },
                        { name: "PostgreSQL", icon: "/svg/postgresql.svg" },
                        { name: "Prisma", icon: "/svg/prisma.svg" },
                      ].map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center bg-muted gap-1 p-2 border-[0.5px] border-dashed border-foreground-muted dark:border-foreground-muted rounded-lg"
                          title={tech.name}
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  }

                  <div className="w-full">
                    <p className="my-4">What I've done</p>
                    <div className="flex flex-col -space-y-4 text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.achievements?.map((ach) => (
                          <li key={ach}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ExperienceSection;
