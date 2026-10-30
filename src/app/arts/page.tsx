import type { Metadata } from "next";
import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { ArtsGallery } from "./arts-gallery";

export const metadata: Metadata = {
  title: "Arts | Priyanshu Kayarkar",
  description: "Curated poster and design works by Priyanshu Kayarkar.",
  openGraph: {
    title: "Arts | Priyanshu Kayarkar",
    description: "Curated poster and design works by Priyanshu Kayarkar.",
    url: "https://priyanshuu.tech/arts",
    images: [
      {
        url: "https://priyanshuu.tech/arts/poster-design.png",
        width: 1080,
        height: 1350,
        alt: "Arts | Priyanshu Kayarkar",
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
          <div className="mb-8">
            <h1 className="font-serif text-4xl italic text-foreground sm:text-5xl">
              Arts
            </h1>
          </div>

          <ArtsGallery />
        </div>

        <Footer />
      </Container>
    </main>
  );
}
