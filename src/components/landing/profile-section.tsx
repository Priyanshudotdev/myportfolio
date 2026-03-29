import { cn } from "@/lib/utils";
import { File } from "lucide-react";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsPinterest, BsTwitter } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import Container from "../common/container";
import Divider from "../common/divider";
import { ModeToggle } from "../theme-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Banner from "./banner";
import YouTubeMusicCard from "../ui/youtube-music-card";

const socialLinks = [
  {
    icon: BsGithub,
    label: "GitHub",
    href: "https://github.com/Priyanshudotdev",
  },
  {
    icon: BsTwitter,
    label: "Twitter",
    href: "https://twitter.com/Priyanshudotdev",
  },
  {
    icon: BsLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/priyanshukayarkar",
  },
  {
    icon: BsPinterest,
    label: "Pinterest",
    href: "https://pinterest.com/Priyanshudotdev",
  },
  { icon: GoMail, label: "Mail me", href: "mailto:priyanshudotdev@gmail.com" },
  {
    icon: File,
    label: "Resume",
    href: "https://pinterest.com/Priyanshudotdev",
  },
];

const ProfileHeader = () => {
  return (
    <Container className="pb-8 relative w-full">
      <Banner
        text="Love the beauty of failing."
        url="https://i.pinimg.com/1200x/70/45/a5/7045a5d2381cc470ced04eb6a6db075d.jpg"
      />

      {/* Profile Section */}
      <div className="py-4 px-6 sm:px-8">
        <div className="relative -mt-14 mb-3 w-fit">
          <Image
            // src="https://i.pinimg.com/736x/8a/27/6c/8a276c8e59a21fc66f433ee19c167b0b.jpg"
            src="https://i.pinimg.com/1200x/30/56/46/305646250f1a6dd7411a0f72aa61e2ae.jpg"
            alt="profile"
            width={112}
            height={112}
            className="rounded-full object-cover w-28 h-28 shadow-md"
            priority
          />
        </div>

        <div className="flex w-full sm:flex-row flex-col items-start justify-between gap-4">
          <div>
            <h1 className="font-serif font-medium italic text-3xl sm:text-4xl">
              Priyanshu S. Kayarkar
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              20 · builder · design enthusiast
            </p>
          </div>

          <div className="flex gap-x-2 text-sm items-center">

            <div className="sm:hidden flex gap-x-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <button
                  key={label}
                  type="button"
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-full text-sm font-medium transition-all duration-300",
                    "bg-background border border-border hover:border-foreground/20",
                    "shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset,0_-1px_0_0_rgba(0,0,0,0.02)_inset]",
                    "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.02)_inset,0_-1px_0_0_rgba(255,255,255,0.02)_inset]",
                    "hover:shadow-[0_0_12px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]",
                    "active:scale-95",
                    "p-2 text-xs rounded-full",
                  )}
                  onClick={() =>
                    window.open(href, "_blank", "noopener,noreferrer")
                  }
                >
                  <Icon className="size-4" />
                </button>
              ))}
            </div>

            {/* Desktop: Buttons with tooltip */}
            <div className="hidden sm:flex gap-x-2">
              <TooltipProvider>
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger
                      type="button"
                      className={cn(
                        "group relative cursor-pointer overflow-hidden rounded-full text-sm font-medium transition-all duration-300",
                        "bg-background border border-border hover:border-foreground/20",
                        "shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset,0_-1px_0_0_rgba(0,0,0,0.02)_inset]",
                        "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.02)_inset,0_-1px_0_0_rgba(255,255,255,0.02)_inset]",
                        "hover:shadow-[0_0_12px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]",
                        "active:scale-95",
                        "p-2 text-xs rounded-full",
                      )}
                      onClick={() =>
                        window.open(href, "_blank", "noopener,noreferrer")
                      }
                    >
                      <Icon className="size-4" />
                    </TooltipTrigger>
                    <TooltipContent sideOffset={10} className="shadow-none">
                      {label}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>

            <ModeToggle />
          </div>
        </div>
      </div>

               {/* <div className="px-4 py-6">
          <YouTubeMusicCard />
        </div> */}

      <Divider />

      {/* Desc */}
      <p className="py-2 px-4 sm:px-8 text-muted-foreground">
        People call me a full-stack developer{" "}
        <span className="text-black dark:text-white">
          I just call it being obsessed with the craft.
        </span>{" "}
        From the first pixel to the final deployment, I care deeply about every
        layer frontend, backend, AI, and yes, obsession over design details. Not
        because I have to, but because{" "}
        <span className="text-black dark:text-white">
          I genuinely believe great software should feel as good as it works.
        </span>
      </p>
    </Container>
  );
};

export default ProfileHeader;
