import { ExternalLink, ArrowRight } from "lucide-react";
import { BsLinkedin, BsTwitterX, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { achievements } from "@/lib/achievements-data";

const getLinkIcon = (url: string) => {
  if (url.includes("linkedin.com")) return <BsLinkedin className="size-4" />;
  if (url.includes("twitter.com") || url.includes("x.com")) return <BsTwitterX className="size-4" />;
  if (url.includes("github.com")) return <BsGithub className="size-4" />;
  return <ExternalLink className="size-4" />;
};

export default function AchievementsPage() {
  return (
    <div className="relative min-h-screen w-full">
      <Container className="z-10 h-full min-h-screen w-full border-l border-r border-l-muted border-r-muted bg-background">
        <PageNavigation className="px-4 pt-4 sm:px-6" />

        <div className="px-6 py-8 sm:px-8">
          <div className="mb-12">
            <h1 className="mb-3 font-serif text-4xl italic text-foreground sm:text-5xl">
              Awards & Achievements
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              A collection of my notable awards, leadership roles, and recognition throughout my journey.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {achievements.map((item) => (
              <div key={item.id} className="w-full pb-8 border-b border-muted/50 last:border-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  
                  {/* Left Side: Title & Org */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-x-3">
                      <h3 className="text-xl text-foreground font-medium">{item.title}</h3>
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
                    <div className="flex items-center gap-2 mt-1.5">
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.organization}
                      </p>
                      <span className="text-muted-foreground/30 text-xs">•</span>
                      <p className="text-xs font-semibold text-primary/90 uppercase tracking-wider">
                        {item.type}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Date */}
                  <div className="text-muted-foreground text-sm sm:text-right shrink-0 mt-2 sm:mt-0">
                    <p>{item.date}</p>
                  </div>
                </div>
                
                {/* View More Button */}
                <div className="mt-4">
                  <Link 
                    href={`/achievements/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary font-medium transition-colors"
                  >
                    View Details <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </Container>
    </div>
  );
}
