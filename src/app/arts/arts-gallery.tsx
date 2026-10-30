"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { type ArtItem, artsData } from "@/lib/arts-data";
import { cn } from "@/lib/utils";

export function ArtsGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const selectedItem: ArtItem | null =
    selectedIndex !== null ? artsData[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setIsZoomed(false);
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + artsData.length) % artsData.length,
    );
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setIsZoomed(false);
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % artsData.length,
    );
  }, [selectedIndex]);

  const handleClose = useCallback(() => {
    setIsZoomed(false);
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
      {/* Grid: max 2 in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-16">
        {artsData.map((art, index) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-muted bg-card/40 transition-all duration-300 hover:border-foreground/30 hover:shadow-xl cursor-pointer"
            onClick={() => {
              setIsZoomed(false);
              setSelectedIndex(index);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsZoomed(false);
                setSelectedIndex(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${art.title}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted/30">
              <Image
                src={art.image}
                alt={art.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />

              {/* Minimal hover overlay with expand icon */}
              <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-center justify-center">
                <div className="flex items-center gap-1.5 rounded-full bg-black/60 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md border border-white/20">
                  <Maximize2 className="size-3.5" />
                  <span>View</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal: clean image-centric view without bottom cutoff */}
      <AnimatePresence>
        {selectedIndex !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6"
          >
            {/* Backdrop click target */}
            <button
              type="button"
              className="absolute inset-0 h-full w-full cursor-default bg-transparent"
              onClick={handleClose}
              aria-label="Close lightbox"
              tabIndex={-1}
            />

            {/* Top Bar Actions */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsZoomed((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/15 cursor-pointer"
                title={isZoomed ? "Zoom out" : "Zoom in"}
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              >
                {isZoomed ? (
                  <ZoomOut className="size-4" />
                ) : (
                  <ZoomIn className="size-4" />
                )}
              </button>
              <a
                href={selectedItem.image}
                download={`${selectedItem.id}.png`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/15"
                title="Download poster"
                aria-label="Download poster"
              >
                <Download className="size-4" />
              </a>
              <a
                href={selectedItem.image}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/15"
                title="Open full resolution"
                aria-label="Open full resolution"
              >
                <ExternalLink className="size-4" />
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/15 cursor-pointer"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Navigation buttons */}
            {artsData.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/15 cursor-pointer"
                  aria-label="Previous artwork"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/15 cursor-pointer"
                  aria-label="Next artwork"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}

            {/* Centered Image Container - Pure CSS containing without clipping */}
            <motion.div
              key={selectedItem.id}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: isZoomed ? 1.2 : 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-20 flex items-center justify-center pointer-events-auto"
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={1080}
                height={1350}
                priority
                className={cn(
                  "max-h-[82vh] sm:max-h-[85vh] max-w-[90vw] sm:max-w-[80vw] w-auto h-auto object-contain rounded-xl shadow-2xl transition-transform duration-200 select-none",
                  isZoomed ? "cursor-zoom-out" : "cursor-zoom-in",
                )}
                onClick={() => setIsZoomed((prev) => !prev)}
              />
            </motion.div>

            {/* Minimal Bottom Pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
              <div className="rounded-full bg-black/60 px-4 py-1.5 text-xs text-white/90 backdrop-blur-md border border-white/15">
                <span>{selectedItem.title}</span>
                <span className="mx-2 text-white/40">·</span>
                <span className="font-mono text-[11px] text-white/70">
                  {selectedIndex + 1} / {artsData.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
