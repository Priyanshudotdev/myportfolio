import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
import { cn } from "@/lib/utils";
import OnekoCat from "@/components/common/oneko-car";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const hkGrotesk = Hanken_Grotesk({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-hk-grotesk",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Priyanshu Kayarkar | Developer",
  description: "Fullstack Developer building modern web applications",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.jpg', type: 'image/jpeg' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.jpg',
  },
  openGraph: {
    title: "Priyanshu Kayarkar | Developer",
    description: "Fullstack Developer building modern web applications",
    url: "https://priyanshuu.tech",
    siteName: "Priyanshu Kayarkar",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Priyanshu Kayarkar - Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Kayarkar | Developer",
    description: "Fullstack Developer building modern web applications",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "h-full antialiased font-sans bg-background/50",
          "[&_*::selection]:bg-[#121212] [&_*::selection]:text-[#0BC5B3]",
          "dark:[&_*::selection]:bg-[#04201B] dark:[&_*::selection]:text-[#0BC5B3]",
          hkGrotesk.className,
          instrumentSerif.variable,
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
          <OnekoCat />
        </ThemeProvider>
      </body>
    </html>
  );
}
