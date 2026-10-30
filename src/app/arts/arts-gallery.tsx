"use client";

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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
      {/* Grid: max 2 in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-16">
        {artsData.map((art, index) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-muted bg-card/40 transition-all duration-300 hover:border-foreground/30 hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
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

      {/* Lightbox Modal: clean image-centric view */}
      <AnimatePresence>
        {selectedIndex !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
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
              <a
                href={selectedItem.image}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/15"
                title="Open full resolution"
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
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/15 cursor-pointer"
                  aria-label="Previous artwork"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/15 cursor-pointer"
                  aria-label="Next artwork"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}

            {/* Centered Image */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-20 h-full max-h-[88vh] w-full max-w-4xl aspect-[4/5] flex items-center justify-center pointer-events-none"
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 1200px) 95vw, 1080px"
                className="object-contain pointer-events-auto"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
