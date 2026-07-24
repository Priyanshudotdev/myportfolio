import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { BsLinkedin, BsTwitterX, BsGithub } from "react-icons/bs";
import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { getAchievementById } from "@/lib/achievements-data";

const getLinkIcon = (url: string) => {
  if (url.includes("linkedin.com")) return <BsLinkedin className="size-4" />;
  if (url.includes("twitter.com") || url.includes("x.com"))
    return <BsTwitterX className="size-4" />;
  if (url.includes("github.com")) return <BsGithub className="size-4" />;
  return <ExternalLink className="size-4" />;
};

export default async function AchievementDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const achievement = getAchievementById(id);

  if (!achievement) {
    notFound();
  }

  return (
    <div className="relative w-full min-h-screen">
      <Container className="boder-l border-r bg-background border-l-muted border-r-muted z-10 min-h-screen h-full w-full">
        <PageNavigation className="px-4 pt-4 sm:px-6" />

        {/* Content */}
        <div className="px-4 sm:px-8 py-10 max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                {achievement.type}
              </span>
              <span className="text-sm text-muted-foreground">
                • {achievement.date}
              </span>
            </div>

            <h1 className="font-serif italic text-3xl sm:text-4xl text-foreground mb-4">
              {achievement.title}
            </h1>

            <div className="flex items-center justify-between">
              <p className="text-lg text-muted-foreground font-medium">
                {achievement.organization}
              </p>

              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm bg-muted text-foreground px-4 py-2 rounded-full hover:bg-muted/80 transition-colors"
                >
                  Official Post {getLinkIcon(achievement.link)}
                </a>
              )}
            </div>
          </div>

          <div className="blog-content">
            {achievement.detailedDescription || achievement.description}
          </div>

          {/* Media Section (Placeholders for images/videos) */}
          <div className="mt-12 space-y-8">
            {achievement.images?.map((img, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-video rounded-xl overflow-hidden border border-muted bg-muted/20"
              >
                <Image
                  src={img}
                  alt={`${achievement.title} image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {achievement.videoUrl && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-muted bg-muted/20">
                <video
                  src={achievement.videoUrl}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <Footer />
      </Container>
    </div>
  );
}
