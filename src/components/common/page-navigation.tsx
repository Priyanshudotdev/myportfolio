"use client";

import { Home, Undo2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

interface PageNavigationProps {
  className?: string;
}

export function PageNavigation({ className }: PageNavigationProps) {
  const router = useRouter();

  return (
    <nav
      className={cn(
        "flex items-center justify-between px-4 py-3",
        className
      )}
    >
      {/* Left */}
      <div className="flex items-center gap-2 bg-muted/80 dark:bg-muted/50 rounded-full p-1.5">
        <Link
          href="/"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-background hover:bg-background/80 transition-colors cursor-pointer"
          aria-label="Go home"
        >
          <Home className="w-4 h-4 text-foreground" />
        </Link>
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-background hover:bg-background/80 transition-colors cursor-pointer"
          aria-label="Go back"
        >
          <Undo2 className="w-4 h-4 text-foreground" />
        </button>
      </div>
{/* right */}
      <div className="bg-muted/80 dark:bg-muted/50 rounded-full">
        <div className="flex items-center justify-center rounded-full bg-background hover:bg-background/80 transition-colors">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
