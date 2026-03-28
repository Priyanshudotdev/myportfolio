"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const buttonContent =
    theme === "light" ? (
      <>
        <Sun className="size-4" />
        <span className="sr-only">Switch to Dark Mode</span>
      </>
    ) : (
      <>
        <Moon className="size-4" />
        <span className="sr-only">Switch to Light Mode</span>
      </>
    );

  return (
    <>
      {/* Mobile: Plain button without tooltip */}
      <button
        type="button"
        className={cn(
          "sm:hidden",
          "group relative overflow-hidden rounded-full text-sm font-medium transition-all duration-300",
          "bg-background border border-border hover:border-foreground/20",
          "shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset,0_-1px_0_0_rgba(0,0,0,0.02)_inset]",
          "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.02)_inset,0_-1px_0_0_rgba(255,255,255,0.02)_inset]",
          "hover:shadow-[0_0_12px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]",
          "active:scale-95",
          "opacity-60 p-2 text-xs rounded-full ml-4",
        )}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {buttonContent}
      </button>

      {/* Desktop: Button with tooltip */}
      <div className="hidden sm:block">
        <Tooltip>
          <TooltipTrigger
            type="button"
            className={cn(
              "group relative overflow-hidden rounded-full text-sm font-medium transition-all duration-300",
              "bg-background border border-border hover:border-foreground/20",
              "shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset,0_-1px_0_0_rgba(0,0,0,0.02)_inset]",
              "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.02)_inset,0_-1px_0_0_rgba(255,255,255,0.02)_inset]",
              "hover:shadow-[0_0_12px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]",
              "active:scale-95",
              "opacity-60 p-2 text-xs rounded-full ml-4",
            )}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {buttonContent}
          </TooltipTrigger>
          <TooltipContent>
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}
