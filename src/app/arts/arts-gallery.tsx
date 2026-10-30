"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Eye,
  Maximize2,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { type ArtItem, artsData } from "@/lib/arts-data";

export function ArtsGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem: ArtItem | null =
    selectedIndex !== null ? artsData[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + artsData.length) % artsData.length,
    );
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % artsData.length,
    );
  }, [selectedIndex]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  return (
    <div>
      {/* Overview Stats Bar */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-muted/60 pb-6 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Sparkles className="size-4 text-primary" />
          <span>
            Collection of{" "}
            <strong className="text-foreground">{artsData.length}</strong>{" "}
            featured posters & event designs
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            Format: 1080 × 1350 (4:5)
          </Badge>
          <Badge variant="outline" className="text-xs">
            Techroots 15.0 · YCCE
          </Badge>
        </div>
      </div>

      {/* Grid of Artworks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-16">
        {artsData.map((art, index) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-muted bg-card/60 transition-all duration-300 hover:border-foreground/30 hover:shadow-xl"
          >
            {/* Image Preview Container */}
            <div
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedIndex(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${art.title} in full screen`}
              className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden bg-muted/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src={art.image}
                alt={art.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <div className="flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-sm border border-white/20">
                    <Maximize2 className="size-3.5" />
                    <span>Expand</span>
                  </div>
                </div>

                <div className="text-white space-y-1">
                  <span className="text-[11px] font-mono tracking-wider text-white/80 uppercase">
                    {art.category}
                  </span>
                  <h3 className="font-serif italic text-xl font-medium leading-tight">
                    {art.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content Details Below Image */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground mb-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-primary">
                    {art.category.split("/")[0].trim()}
                  </span>
                  <span>{art.date}</span>
                </div>

                <h2 className="font-serif italic text-2xl text-foreground font-semibold mb-1">
                  {art.title}
                </h2>
                <p className="text-xs text-muted-foreground font-medium mb-3">
                  {art.subtitle}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                  {art.description}
                </p>
              </div>

              {/* Tags & Action Buttons */}
              <div className="pt-3 border-t border-muted/50 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <Eye className="size-3.5" />
                  <span>View Details</span>
                </button>

                <a
                  href={art.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  title="Open original image"
                >
                  <span>Raw</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6"
            onClick={handleClose}
          >
            {/* Modal Dialog Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col lg:flex-row max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-card shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/90 cursor-pointer border border-white/20"
                aria-label="Close dialog"
              >
                <X className="size-4" />
              </button>

              {/* Prev / Next controls on desktop */}
              {artsData.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/90 cursor-pointer border border-white/20"
                    aria-label="Previous artwork"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/90 cursor-pointer border border-white/20"
                    aria-label="Next artwork"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              )}

              {/* Image Column */}
              <div className="relative flex-1 bg-black/95 flex items-center justify-center min-h-[360px] sm:min-h-[480px] p-2 sm:p-6">
                <div className="relative h-full w-full max-h-[78vh] aspect-[4/5]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    sizes="(max-width: 1024px) 90vw, 60vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Info Column */}
              <div className="flex flex-col justify-between w-full lg:w-[380px] bg-card p-6 sm:p-7 border-t lg:border-t-0 lg:border-l border-border overflow-y-auto max-h-[40vh] lg:max-h-none">
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="font-mono text-primary font-medium tracking-wider uppercase">
                      {selectedItem.category}
                    </span>
                    <span className="font-mono">
                      {selectedIndex + 1} / {artsData.length}
                    </span>
                  </div>

                  <h2 className="font-serif italic text-3xl sm:text-4xl text-foreground font-semibold leading-tight mb-2">
                    {selectedItem.title}
                  </h2>
                  <p className="text-sm font-medium text-foreground/80 mb-1">
                    {selectedItem.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {selectedItem.organization} · {selectedItem.date}
                  </p>

                  <div className="h-px bg-muted my-4" />

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                      Tags & Disciplines
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="sm:hidden flex items-center justify-center h-8 w-8 rounded-lg border border-border text-foreground hover:bg-muted"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="sm:hidden flex items-center justify-center h-8 w-8 rounded-lg border border-border text-foreground hover:bg-muted"
                      aria-label="Next"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 ml-auto">
                    <a
                      href={selectedItem.image}
                      download={`${selectedItem.id}.png`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
                    >
                      <Download className="size-3.5" />
                      <span>Download</span>
                    </a>
                    <a
                      href={selectedItem.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
                    >
                      <span>Full Res</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
