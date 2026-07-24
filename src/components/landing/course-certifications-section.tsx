"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Container from "../common/container";
import Heading from "../common/Heading";
import { certifications, type CertificationItem } from "@/lib/certifications-data";

function CertificationListCard({ cert }: { cert: CertificationItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <Link
      ref={cardRef}
      href={`/certifications/${cert.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative block py-6 transition-opacity border-b border-muted/30 last:border-0"
    >
      <div className="flex w-full items-center justify-between transition-opacity group-hover:opacity-70">
        <div className="flex flex-col gap-1 max-w-[75%] md:max-w-[85%]">
          <h3 className="text-lg text-foreground font-medium">
            {cert.title}
          </h3>
          <div className="flex items-center gap-2 mt-0.5">
            <p className="text-sm text-muted-foreground font-medium">
              {cert.issuer}
            </p>
            <span className="text-muted-foreground/30 text-xs">•</span>
            <p className="text-xs text-primary/80 uppercase tracking-wider">
              {cert.date}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
          View details <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Floating Image on Hover */}
      <AnimatePresence>
        {isHovered && cert.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: mousePosition.x + 20,
              y: mousePosition.y - 80,
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.5,
            }}
            className="pointer-events-none absolute left-0 top-0 z-50 hidden md:block"
            style={{ width: "240px", height: "160px" }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl ring-2 ring-muted/50 bg-muted">
              <Image
                src={cert.image}
                alt={`${cert.title} Certificate`}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

const CourseCertificationsSection = () => {
  const displayedCertifications = certifications.slice(0, 3);

  return (
    <Container className="px-4 sm:px-8 py-4">
      <Heading text="Certifications" />

      <div className="py-2 flex flex-col">
        {displayedCertifications.map((cert) => (
          <CertificationListCard key={cert.id} cert={cert} />
        ))}
      </div>

      {certifications.length > 2 && (
        <div className="flex justify-center mt-6">
          <Link
            href="/certifications"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-foreground bg-muted/50 rounded-full hover:bg-muted/80 transition-colors"
          >
            View All Certifications <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CourseCertificationsSection;
