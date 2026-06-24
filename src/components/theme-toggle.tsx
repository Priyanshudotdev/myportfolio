"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// PRESET MASKS CONFIGURATION
// Since GIFs cannot be fast-forwarded or started at a specific timestamp via code,
// the easiest way to achieve this is to split your long GIF into 3-4 shorter GIFs.
// Add the paths to your split GIFs here. The code will pick one randomly on every click!
const MASK_PRESETS = [
  "/reze-dance.gif", // Your current GIF
  // "/reze-dance-2.gif", // Create this starting from timestamp 2
  // "/reze-dance-3.gif", // Create this starting from timestamp 3
  // "/reze-dance-4.gif", // Create this starting from timestamp 4
];

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const randomPreset =
      MASK_PRESETS[Math.floor(Math.random() * MASK_PRESETS.length)];
    const timestamp = Date.now();

    document.documentElement.style.setProperty(
      "--transition-gif",
      `url("${randomPreset}?v=${timestamp}")`,
    );

    document.body.classList.add("theme-transitioning");
    
    // Force hide the cat directly via JS to absolutely guarantee it doesn't glitch the snapshot
    const neko = document.getElementById("oneko");
    if (neko) neko.style.display = "none";

    const _transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    _transition.finished.finally(() => {
      document.body.classList.remove("theme-transitioning");
      if (neko) neko.style.display = "block";
    });
  };

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
        onClick={handleThemeToggle}
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
            onClick={handleThemeToggle}
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
