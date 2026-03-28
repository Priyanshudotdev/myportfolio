"use client";

import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/work" },
  //   { label: 'Blog', href: '/blog' },
  { label: "Resume", href: "/resume" },
  //   { label: 'Gears', href: '/gears' },
  //   { label: 'Setup', href: '/setup' },
  //   { label: 'Terminal', href: '/terminal' },
  { label: "Bucket List", href: "/bucket-list" },
  { label: "Movies", href: "/movies" },
];

const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    role="img"
    aria-label="Twitter"
  >
    <title>Twitter</title>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    role="img"
    aria-label="LinkedIn"
  >
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    role="img"
    aria-label="GitHub"
  >
    <title>GitHub</title>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const _YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    role="img"
    aria-label="YouTube"
  >
    <title>YouTube</title>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const _InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    role="img"
    aria-label="Instagram"
  >
    <title>Instagram</title>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.234-.548.234l.188-2.623 4.823-4.351c.192-.192-.05-.3-.297-.108l-5.965 3.759-2.566-.802c-.56-.176-.571-.56.117-.828l10.037-3.869c.466-.174.874.108.762.828z" />
  </svg>
);

const PinterestIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    role="img"
    aria-label="Pinterest"
  >
    <title>Pinterest</title>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.234-.548.234l.188-2.623 4.823-4.351c.192-.192-.05-.3-.297-.108l-5.965 3.759-2.566-.802c-.56-.176-.571-.56.117-.828l10.037-3.869c.466-.174.874.108.762.828z" />
  </svg>
);

const _GoodreadsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    role="img"
    aria-label="Goodreads"
  >
    <title>Goodreads</title>
    <path d="M11.43 23.995c-3.27-.002-5.972-2.556-5.97-5.918 0-1.8.818-3.46 2.23-4.576.57-.455.57-.455.493-.978-.066-.454-.23-.807-.642-1.016-.61-.307-1.48-.116-1.78.373-.22.36-.198.732.073 1.028.208.226.166.31-.108.405-.775.258-1.598-.323-1.598-1.113 0-.472.246-.86.683-1.094 1.066-.56 2.693-.323 3.57.517.605.58.85 1.49.636 2.33-.088.344-.05.385.32.475 1.566.402 2.818 1.71 3.095 3.33.47 2.755-1.62 5.228-4.46 5.228l-.035.04zm1.453-4.766c-.622.477-1.46.667-2.187.502-.797-.182-1.42-.77-1.578-1.502-.21-.98.49-1.967 1.544-2.22.727-.175 1.52.017 2.124.513.84.69 1.053 1.724.54 2.468-.16.24-.253.374-.443.24zm.34-5.263c-.15.036-.303-.02-.34-.126-.037-.104.04-.216.176-.25.943-.24 1.9-.186 2.693.153 1.41.63 2.318 2.12 2.302 3.753-.03 2.52-2.12 4.548-4.73 4.548-.175 0-.35-.01-.524-.03-.106-.013-.166-.12-.13-.24.036-.117.148-.19.258-.176.15.02.302.03.455.03 2.23 0 4.065-1.74 4.106-3.89.023-1.36-.673-2.62-1.833-3.287-.658-.376-1.46-.48-2.26-.29-.176.045-.352.1-.527.165-.105.04-.223-.01-.262-.115-.04-.105.015-.22.12-.26.205-.078.41-.14.616-.19z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    role="img"
    aria-label="Email"
  >
    <title>Email</title>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    icon: TwitterIcon,
    href: "https://twitter.com/Priyanshudotdev",
    label: "Twitter",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/priyanshukayarkar",
    label: "LinkedIn",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/Priyanshudotdev",
    label: "GitHub",
  },
  {
    icon: PinterestIcon,
    href: "https://pinterest.com/Priyanshudotdev",
    label: "Pinterest",
  },
  { icon: MailIcon, href: "mailto:priyanshudotdev@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-t-muted bg-background border-border">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex justify-between gap-8 mb-8">
          <div className="{max-w-[200px]}">
            <h3 className="text-sm font-medium text-foreground mb-4 tracking-wide">
              NAVIGATE
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end text-right">
            <h3 className="text-sm font-medium text-foreground mb-4 tracking-wide">
              CONNECT
            </h3>
            <div className="flex gap-2 flex-wrap justify-end">
              {" "}
              {/* ← changed */}
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card hover:bg-accent hover:border-foreground/20 transition-all"
                    aria-label={social.label}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Priyanshu S. Kayarkar. All rights
            reserved.
          </p>
          {/* <p className="text-sm text-muted-foreground">
            You&apos;re the <span className="text-foreground font-medium">33,983</span>
            <sup className="text-xs">th</sup> visitor
          </p> */}
        </div>
      </div>
    </footer>
  );
}
