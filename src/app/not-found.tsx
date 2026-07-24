import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full">
      <Container className="z-10 h-full min-h-screen w-full border-l border-r border-l-muted border-r-muted bg-background">
        <PageNavigation className="px-4 pt-4 sm:px-6" />

        <div className="flex flex-col items-center justify-center min-h-[65vh] px-6 py-12 sm:px-8 text-center">
          <h1 className="font-serif text-9xl italic text-foreground/20 mb-2">404</h1>
          <h2 className="text-3xl font-serif italic text-foreground mb-4">Page not found</h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved. 
            But don't worry, there's plenty more to explore on the homepage.
          </p>
          
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-background bg-foreground rounded-full hover:bg-foreground/90 transition-colors"
          >
            Return Home <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <Footer />
      </Container>
    </div>
  );
}
