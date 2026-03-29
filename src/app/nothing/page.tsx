"use client";

import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { YouTubeMusicCard } from "@/components/ui/youtube-music-card";

export default function NothingPage() {
  return (
    <div className="relative min-h-screen w-full">
      <Container className="z-10 h-full min-h-screen w-full border-l border-r border-l-muted border-r-muted bg-background">
        <PageNavigation className="px-4 pt-4 sm:px-6" />

        <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-6 py-12 sm:px-8">
          {/* Page Title */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 font-serif text-3xl italic text-foreground sm:text-4xl">
              Nothing
            </h1>
            <p className="text-sm text-muted-foreground">
              Just vibing to some tunes
            </p>
          </div>

          {/* YouTube Music Card */}
          <YouTubeMusicCard />
        </div>

        <Footer />
      </Container>
    </div>
  );
}
