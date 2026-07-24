import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Container from "@/components/common/container";
import Footer from "@/components/common/footer";
import { PageNavigation } from "@/components/common/page-navigation";
import { getCertificationById } from "@/lib/certifications-data";

export default async function CertificationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const certification = getCertificationById(id);

  if (!certification) {
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
                {certification.issuer}
              </span>
              <span className="text-sm text-muted-foreground">• {certification.date}</span>
            </div>
            
            <h1 className="font-serif italic text-3xl sm:text-4xl text-foreground mb-4">
              {certification.title}
            </h1>
            
            <div className="flex items-center justify-between">
              {certification.link && (
                <a 
                  href={certification.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-sm bg-muted text-foreground px-4 py-2 rounded-full hover:bg-muted/80 transition-colors"
                >
                  Verify Certificate <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          </div>

          <div className="blog-content">
            {certification.details}
          </div>
          
          {/* Certificate Image */}
          {certification.image && (
            <div className="mt-12 space-y-8">
              <div className="relative w-full aspect-[1.414/1] rounded-xl overflow-hidden border border-muted bg-muted/20">
                <Image src={certification.image} alt={`${certification.title} Certificate Image`} fill className="object-cover" />
              </div>
            </div>
          )}
        </div>

        <Footer />
      </Container>
    </div>
  );
}
