import { ArrowRight, ExternalLink } from "lucide-react";
import { BsLinkedin, BsTwitterX, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Container from "../common/container";
import Heading from "../common/Heading";
import { achievements } from "@/lib/achievements-data";

const getLinkIcon = (url: string) => {
  if (url.includes("linkedin.com")) return <BsLinkedin className="size-4" />;
  if (url.includes("twitter.com") || url.includes("x.com"))
    return <BsTwitterX className="size-4" />;
  if (url.includes("github.com")) return <BsGithub className="size-4" />;
  return <ExternalLink className="size-4" />;
};

const CertificationsSection = () => {
  const displayedAchievements = achievements.slice(0, 2);

  return (
    <Container className="px-4 sm:px-8 py-4">
      <Heading text="Awards & Achievements" />

      <div className="py-6 flex flex-col gap-10">
        {displayedAchievements.map((item) => (
          <div key={item.id} className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              {/* Left Side: Title & Org */}
              <div className="flex flex-col">
                <div className="flex items-center gap-x-3">
                  <h3 className="text-lg text-foreground">{item.title}</h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title="External Link"
                    >
                      {getLinkIcon(item.link)}
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm text-muted-foreground">
                    {item.organization}
                  </p>
                  {/*<span className="text-muted-foreground/30 text-xs">•</span>
                  <p className="text-xs text-primary/80 uppercase tracking-wider">
                    {item.type}
                  </p>*/}
                </div>
              </div>

              {/* Right Side: Date */}
              <div className="text-muted-foreground text-sm sm:text-right shrink-0 mt-1 sm:mt-0">
                <p>{item.date}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-4xl">
              {item.description}
            </p>

            {/* View More Button */}
            <div className="mt-4">
              <Link
                href={`/achievements/${item.id}`}
                className="inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground font-medium transition-colors"
              >
                View More <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {achievements.length > 2 && (
        <div className="flex justify-center mt-2">
          <Link
            href="/achievements"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-foreground bg-muted/50 rounded-full hover:bg-muted/80 transition-colors"
          >
            View All Achievements{" "}
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CertificationsSection;
