"use client";

import { Undo2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "@/components/theme-toggle";

interface Heading {
  id: string;
  text: string;
  top: number;
}

interface FloatingBlogNavProps {
  title: string;
}

export function FloatingBlogNav({ title }: FloatingBlogNavProps) {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Extract headings from the document
    const elements = Array.from(document.querySelectorAll(".blog-content h2"));
    const headingData = elements.map((el, index) => {
      if (!el.id) el.id = `heading-${index}`;
      return {
        id: el.id,
        text: el.textContent || "",
        top: (el as HTMLElement).offsetTop,
      };
    });
    setHeadings(headingData);

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentScrollY / scrollHeight) * 100);
      }

      // Find active heading
      const scrollPos = currentScrollY + 100;
      const currentActive = headingData.reduce((prev, curr) => {
        if (curr.top <= scrollPos) return curr;
        return prev;
      }, headingData[0]);

      if (currentActive) setActiveId(currentActive.id);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll();
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsExpanded(false);
    }
  };

  const activeHeadingText =
    headings.find((h) => h.id === activeId)?.text || title;

  return (
    <div
      ref={navRef}
      className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-lg"
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 overflow-hidden rounded-3xl border border-muted/50 bg-background/95 p-2 shadow-2xl backdrop-blur-sm dark:bg-muted/95"
          >
            <div className="px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Table of Contents
              </span>
            </div>
            <div className="flex flex-col gap-1 max-h-[40vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  type="button"
                  onClick={() => scrollToHeading(heading.id)}
                  className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                    activeId === heading.id
                      ? "bg-foreground text-background"
                      : "text-primary hover:bg-muted/50"
                  }`}
                >
                  <span className="font-medium truncate">{heading.text}</span>
                  {activeId === heading.id && (
                    <div className="h-1.5 w-1.5 rounded-full bg-background" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex items-center gap-2 rounded-full border border-muted/50 bg-background/80 p-1.5 shadow-xl backdrop-blur-sm dark:bg-muted/80">
        <button
          type="button"
          onClick={() =>
            isExpanded ? setIsExpanded(false) : setIsExpanded(true)
          }
          className={`flex flex-1 cursor-pointer items-center gap-3 rounded-full px-3 py-1.5 text-left transition-colors ${
            isExpanded ? "bg-muted/50" : "hover:bg-muted/30"
          }`}
        >
          <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
            {/* Radial progress indicator */}
            <svg className="h-full w-full -rotate-90">
              <title>Reading Progress</title>
              <circle
                cx="10"
                cy="10"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted/30"
              />
              <circle
                cx="10"
                cy="10"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="50.24"
                strokeDashoffset={50.24 - (50.24 * scrollProgress) / 100}
                className="text-foreground transition-all duration-300"
              />
            </svg>
            <div className="absolute h-1 w-1 rounded-full bg-foreground" />
          </div>
          <span className="truncate text-sm font-semibold text-foreground">
            {activeHeadingText}
          </span>
        </button>

        <div className="flex items-center gap-1.5 pr-1.5">
          <div className="h-4 w-px bg-muted/50 mx-1" />
          <ModeToggle />
          <button
            type="button"
            onClick={() => router.push("/blogs")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-background border border-muted/50 transition-colors hover:bg-muted/20"
            aria-label="Go back to blogs"
          >
            <Undo2 className="h-4 w-4" />
          </button>
        </div>
      </nav>
    </div>
  );
}
