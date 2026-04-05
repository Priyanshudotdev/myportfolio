import { cn } from '@/lib/utils';
import { ArrowUpRight, File } from 'lucide-react';
import Image from 'next/image';
import { BsGithub, BsLinkedin, BsPinterest, BsTwitterX } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import Container from '../common/container';
import Divider from '../common/divider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Banner from './banner';

const socialLinks = [
  {
    icon: BsGithub,
    label: 'GitHub',
    href: 'https://github.com/Priyanshudotdev',
    previewImage: '/socials/github.png',
  },
  {
    icon: BsTwitterX,
    label: 'Twitter',
    href: 'https://twitter.com/Priyanshudotdev',
    previewImage: '/socials/x.png',
  },
  {
    icon: BsLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/priyanshukayarkar',
    previewImage: '/socials/linkedin.png',
  },
  {
    icon: BsPinterest,
    label: 'Pinterest',
    href: 'https://pinterest.com/Priyanshudotdev',
    previewImage: '/socials/pinterest.png',
  },
  { icon: GoMail, label: 'Mail me', href: 'mailto:priyanshudotdev@gmail.com' },
  {
    icon: File,
    label: 'Resume',
    href: 'https://drive.google.com/file/d/17hDpp_CqC2Hj05QZgGiNwik3fswSFob6/view?usp=sharing',
    previewImage: '/socials/resume.png',
  },
];

const ProfileHeader = () => {
  return (
    <Container className="pb-8 relative w-full">
      <Banner
        text="Love the beauty of failing."
        url="https://i.pinimg.com/1200x/70/45/a5/7045a5d2381cc470ced04eb6a6db075d.jpg"
        // url="https://dor5tbfyod.ufs.sh/f/YvNaarP8hDWwADKBPp35t9aySJgQmrsuVGTdjbC7kfc6hABI"
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
              20 · builder · design enthusiast · CS grad
            </p>
            
            {/* Mobile Social Links */}
            <div className="flex sm:hidden gap-x-2 mt-3">
              <TooltipProvider>
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger
                      type="button"
                      className={cn(
                        'group relative cursor-pointer overflow-hidden rounded-full text-sm font-medium transition-all duration-300',
                        'bg-background border border-border hover:border-foreground/20',
                        'shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset,0_-1px_0_0_rgba(0,0,0,0.02)_inset]',
                        'dark:shadow-[0_1px_0_0_rgba(255,255,255,0.02)_inset,0_-1px_0_0_rgba(255,255,255,0.02)_inset]',
                        'hover:shadow-[0_0_12px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]',
                        'active:scale-95',
                        'p-2 text-xs rounded-full'
                      )}
                      onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
                    >
                      <Icon className="size-4" />
                    </TooltipTrigger>

                    <TooltipContent sideOffset={8} side="top">
                      <div className="rounded-md bg-background border border-muted px-2.5 py-1.5 shadow-sm">
                        <span className="text-xs text-muted-foreground">{label}</span>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          <div className="hidden sm:flex gap-x-2">
            <TooltipProvider>
              {socialLinks.map(({ icon: Icon, label, href, previewImage }) => (
                <Tooltip key={label}>
                  <TooltipTrigger
                    type="button"
                    className={cn(
                      'group relative cursor-pointer overflow-hidden rounded-full text-sm font-medium transition-all duration-300',
                      'bg-background border border-border hover:border-foreground/20',
                      'shadow-[0_1px_0_0_rgba(0,0,0,0.02)_inset,0_-1px_0_0_rgba(0,0,0,0.02)_inset]',
                      'dark:shadow-[0_1px_0_0_rgba(255,255,255,0.02)_inset,0_-1px_0_0_rgba(255,255,255,0.02)_inset]',
                      'hover:shadow-[0_0_12px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]',
                      'active:scale-95',
                      'p-2 text-xs rounded-full'
                    )}
                    onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
                  >
                    <Icon className="size-4" />
                  </TooltipTrigger>

                  <TooltipContent
                    sideOffset={12}
                    side="bottom"
                    className={cn(
                      'p-0 shadow-none border-0 bg-transparent',
                      // only show rich preview if there's a screenshot
                      previewImage ? 'w-64' : 'w-auto'
                    )}
                  >
                    {previewImage ? (
                      <div className="rounded-xl overflow-hidden border border-muted bg-background shadow-lg shadow-black/10 dark:shadow-black/40">
                        {/* Screenshot preview */}
                        <div className="relative w-full h-36 overflow-hidden">
                          <Image
                            src={previewImage}
                            alt={`${label} preview`}
                            fill
                            className="object-cover object-top"
                          />
                          {/* subtle gradient fade at bottom */}
                          <div className="absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-background to-transparent" />
                        </div>

                        {/* Label footer */}
                        <div className="flex items-center justify-between px-3 py-2 border-t border-muted">
                          <div className="flex items-center gap-2">
                            <Icon className="size-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground font-medium">
                              {label}
                            </span>
                          </div>
                          <ArrowUpRight className="size-3 text-muted-foreground" />
                        </div>
                      </div>
                    ) : (
                      // fallback: plain label tooltip (for links without a preview)
                      <div className="rounded-md bg-background border border-muted px-2.5 py-1.5 shadow-sm">
                        <span className="text-xs text-muted-foreground">{label}</span>
                      </div>
                    )}
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
        {/* <div className="flex items-center gap-2 text-sm py-4"> */}
        {/* <div className="flex items-center justify-center w-5 h-5">
                <Image src="https://www.svgrepo.com/show/343535/youtube-music-song-multimedia-audio.svg" className="size-8" alt="YouTube Music" width={32} height={32} />
              </div>
              <span className="text-muted-foreground">Last played</span>
              <span className="text-muted-foreground">—</span>
              <span className="text-foreground truncate max-w-[250px]">
                Dreaming - Marshmello, Migos, blackbear
              </span>
            </div> */}
      </div>

      <Divider />

      {/* Desc */}
      <p className="py-2 px-4 sm:px-8 text-muted-foreground">
        People call me a full-stack developer{' '}
        <span className="text-black dark:text-white">
          I just call it being obsessed with the craft.
        </span>{' '}
        From the first pixel to the final deployment, I care deeply about every layer frontend,
        backend, AI, and yes,{' '}
        <span className="text-black dark:text-white">obsession over design details.</span>
      </p>
    </Container>
  );
};

export default ProfileHeader;
