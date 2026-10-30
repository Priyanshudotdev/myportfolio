import type { Metadata } from "next";
import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { ArtsGallery } from "./arts-gallery";

export const metadata: Metadata = {
  title: "Arts & Design | Priyanshu Kayarkar",
  description:
    "Curated design work, event posters, and visual identity projects by Priyanshu Kayarkar.",
  openGraph: {
    title: "Arts & Design | Priyanshu Kayarkar",
    description:
      "Curated design work, event posters, and visual identity projects by Priyanshu Kayarkar.",
    url: "https://priyanshuu.tech/arts",
    images: [
      {
        url: "https://priyanshuu.tech/arts/poster-design.png",
        width: 1080,
        height: 1350,
        alt: "Arts & Design | Priyanshu Kayarkar",
      },
    ],
  },
};

export default function ArtsPage() {
  return (
    <main className="relative min-h-screen w-full">
      <Container className="z-10 h-full min-h-screen w-full border-l border-r border-l-muted border-r-muted bg-background">
        <PageNavigation className="px-4 pt-4 sm:px-6" />

        <div className="px-6 py-8 sm:px-8">
          {/* Header */}
          <div className="mb-10 max-w-2xl">
            <h1 className="mb-3 font-serif text-4xl italic text-foreground sm:text-5xl">
              Arts & Visual Design
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              A curated exhibition of poster designs, typography compositions,
              and event branding crafted for techfests, contests, and creative
              collaborations.
            </p>
          </div>

          {/* Interactive Gallery */}
          <ArtsGallery />
        </div>

        <Footer />
      </Container>
    </main>
  );
}
