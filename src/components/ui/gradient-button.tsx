"use client";

import { useTheme } from "next-themes";
import { type ReactNode, useEffect, useState } from "react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isSubmitting?: boolean;
  submitted?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function GradientButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  isSubmitting = false,
  submitted = false,
  className = "",
  href,
  target,
  rel,
}: GradientButtonProps) {
  const [mounted, setMounted] = useState(false);
  const isDisabled = disabled || isSubmitting || submitted;
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a consistent style during SSR to avoid hydration mismatch
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _isDark = mounted ? resolvedTheme === "dark" : false;

  // Force light mode styles during SSR/hydration to prevent mismatch
  const themeClasses =
    mounted && resolvedTheme === "dark"
      ? "bg-zinc-900/80 text-zinc-100 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600"
      : "bg-zinc-50 text-zinc-900 border border-zinc-200 hover:bg-white hover:border-zinc-300 hover:shadow-sm";

  const baseClass = `group relative overflow-hidden rounded-full text-sm font-medium transition-all duration-200 focus:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${themeClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClass}
        onClick={onClick}
        tabIndex={isDisabled ? -1 : 0}
        aria-disabled={isDisabled}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={baseClass}
    >
      {children}
    </button>
  );
}
