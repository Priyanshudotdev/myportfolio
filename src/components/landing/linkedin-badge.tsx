"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

export function LinkedInBadge() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && containerRef.current) {
      // Clear previous badge to allow fresh render
      containerRef.current.innerHTML = `
        <div 
          class="badge-base LI-profile-badge" 
          data-locale="en_US" 
          data-size="medium" 
          data-theme="${resolvedTheme === "dark" ? "dark" : "light"}" 
          data-type="HORIZONTAL" 
          data-vanity="priyanshukayarkar" 
          data-version="v1"
        >
          <a 
            class="badge-base__link LI-simple-link" 
            href="https://in.linkedin.com/in/priyanshukayarkar?trk=profile-badge"
          >
            Priyanshu Kayarkar
          </a>
        </div>
      `;

      // Dynamically inject the script so LinkedIn parses the newly injected HTML
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      script.type = "text/javascript";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [resolvedTheme, mounted]);

  if (!mounted) {
    return <div className="h-[250px] w-[300px] animate-pulse bg-muted rounded-xl"></div>;
  }

  return (
    <div className="w-full flex justify-center sm:justify-start" ref={containerRef}>
      {/* LinkedIn badge will be injected here via innerHTML */}
    </div>
  );
}
