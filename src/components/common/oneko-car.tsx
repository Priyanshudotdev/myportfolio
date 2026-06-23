"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export const catConfig = {
  enabled: true,
};

export default function OnekoCat() {
  const pathname = usePathname();

  if (!catConfig.enabled) {
    return null;
  }

  const isBlogsPage = pathname.startsWith("/blogs");

  return (
    <>
      <Script src="./oneko/oneko.js" data-cat="./oneko/oneko.gif" />
      {isBlogsPage && (
        <style>{`
          #oneko {
            display: none !important;
          }
        `}</style>
      )}
    </>
  );
}
