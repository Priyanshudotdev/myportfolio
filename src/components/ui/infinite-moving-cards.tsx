"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import Container from "../common/container";

const icons = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Git", icon: <SiGit /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
];

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [start, setStart] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const durations = { fast: "20s", normal: "40s", slow: "80s" };
      containerRef.current.style.setProperty(
        "--animation-duration",
        durations[speed],
      );
    }
  }, [speed]);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  return (
    <Container>
      <div
        ref={containerRef}
        className={cn(
          className,
          "overflow-hidden",
          "relative",
          // Fade edges — light mode
          "before:absolute before:inset-y-0 before:left-0 before:w-24 before:z-10 before:pointer-events-none",
          "after:absolute after:inset-y-0 after:right-0 after:w-24 after:z-10 after:pointer-events-none",
          "before:bg-linear-to-r before:from-white before:to-transparent",
          "after:bg-linear-to-l after:from-white after:to-transparent",
          // Fade edges — dark mode
          "dark:before:bg-linear-to-r dark:before:from-background dark:before:to-transparent",
          "dark:after:bg-linear-to-l dark:after:from-background dark:after:to-transparent",
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-2 sm:gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {icons.map((item) => (
            <li
              key={item.name}
              className={cn(
                "relative hover:scale-[1.01] transition ease-in hover:opacity-100 opacity-70 flex flex-col items-center justify-center rounded-2xl px-8 py-4",
              )}
            >
              <span className="text-4xl grayscale">{item.icon}</span>
              <p className="text-xs mt-2">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
