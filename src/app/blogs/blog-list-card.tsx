"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { BlogPost } from "@/lib/blogs-server";

export function BlogListCard({ blog }: { blog: BlogPost }) {
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
      href={`/blogs/${blog.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative block py-8 transition-opacity"
    >
      <div className="flex w-full items-center justify-between transition-opacity group-hover:opacity-70">
        <div className="flex flex-col gap-2 max-w-[75%] md:max-w-[85%]">
          <h2 className="font-serif text-xl font-light text-foreground md:text-2xl">
            {blog.title}
          </h2>

          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted/60 px-2 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>{blog.date}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
          Read more <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Floating Image on Hover */}
      <AnimatePresence>
        {isHovered && blog.coverImage && (
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
            style={{
              width: "240px",
              height: "140px",
            }}
          >
            <div 
              className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-2 ring-muted/50"
              style={{ viewTransitionName: `blog-image-${blog.id}` }}
            >
              <Image
                src={blog.coverImage}
                alt={blog.title}
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
