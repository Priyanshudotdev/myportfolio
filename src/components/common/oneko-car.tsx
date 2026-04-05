"use client";

import Script from 'next/script';

export const catConfig = {
  enabled: true, 
};

export default function OnekoCat() {
  if (!catConfig.enabled) {
    return null;
  }

  return <Script src="./oneko/oneko.js" data-cat="./oneko/oneko.gif" />;
}