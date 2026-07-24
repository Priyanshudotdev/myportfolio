import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Container from "../common/container";
import Divider from "../common/divider";
import Heading from "../common/Heading";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface OSSItem {
  id: string;
  repo: string;
  repoUrl: string;
  prs: { id: string; url: string }[];
  issues: { id: string; url: string }[];
}

const ossData: OSSItem[] = [
  {
    id: "open-design",
    repo: "nexu-io/open-design",
    repoUrl: "https://github.com/nexu-io/open-design/",
    prs: [
      { id: "#845", url: "https://github.com/nexu-io/open-design/pull/845" },
      { id: "#935", url: "https://github.com/nexu-io/open-design/pull/935" },
      { id: "#944", url: "https://github.com/nexu-io/open-design/pull/944" },
      { id: "#1136", url: "https://github.com/nexu-io/open-design/pull/1136" },
    ],
    issues: [
      { id: "#1112", url: "https://github.com/nexu-io/open-design/issues/1112" },
      { id: "#902", url: "https://github.com/nexu-io/open-design/issues/902" },
    ],
  },
  {
    id: "vscode",
    repo: "microsoft/vscode",
    repoUrl: "https://github.com/microsoft/vscode",
    prs: [],
    issues: [
      { id: "#320987", url: "https://github.com/microsoft/vscode/issues/320987" },
    ],
  },
];

const OpenSourceSection = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(
    Object.fromEntries(ossData.map((item) => [item.id, true])),
  );

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container className="px-4 sm:px-8 py-4">
      <Heading text="Open Source Contributions" />

      <div className="py-4 flex flex-col items-center gap-4">
        {ossData.map((item) => {
          const isExpanded = expandedIds[item.id] ?? true;

          return (
            <div className="text-sm h-full w-full" key={item.id}>
              {/* Card Header */}
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-x-4">
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-foreground hover:underline underline-offset-4 decoration-primary"
                    >
                      {item.repo}
                    </a>
                    <button
                      type="button"
                      className="sm:hidden p-1 rounded-full cursor-pointer hover:opacity-50"
                      onClick={() => toggleExpand(item.id)}
                    >
                      <div
                        style={{
                          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
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
                          onClick={() => toggleExpand(item.id)}
                        >
                          <div
                            style={{
                              transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                              transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
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
                </div>
              </div>

              <div
                className={`transition-all duration-700 overflow-hidden ${
                  isExpanded ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="transition ">
                  <Divider className="px-12" />
                  <div className="w-full mt-2 mb-4 space-y-2">
                    {item.prs.length > 0 && (
                      <p className="text-muted-foreground flex items-center flex-wrap gap-2">
                        <span>Merged PRs:</span>
                        {item.prs.map((pr, idx) => (
                          <a
                            key={pr.id}
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors font-mono text-xs bg-muted px-1.5 py-0.5 rounded"
                          >
                            {pr.id}
                          </a>
                        ))}
                      </p>
                    )}
                    {item.issues.length > 0 && (
                      <p className="text-muted-foreground flex items-center flex-wrap gap-2">
                        <span>Issues:</span>
                        {item.issues.map((issue, idx) => (
                          <a
                            key={issue.id}
                            href={issue.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors font-mono text-xs bg-muted px-1.5 py-0.5 rounded"
                          >
                            {issue.id}
                          </a>
                        ))}
                      </p>
                    )}
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

export default OpenSourceSection;
