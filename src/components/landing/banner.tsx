"use client";

import Image from "next/image";
import Link from "next/link";

type BannerPropsType = {
  url: string;
  text: string;
};

const Banner = ({ url = "/banner.png", text }: BannerPropsType) => {
  return (
    <div className="relative w-full">
      {/* Navbar - remains absolute over banner */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-end gap-4 px-4 py-3 sm:px-6">
        <div className="sticky top-3 flex items-center gap-4 rounded-full bg-black/20 px-4 py-1.5 backdrop-blur-sm">
          <Link
            href="/projects"
            className="text-xs font-medium text-white transition-colors hover:text-white/80"
          >
            Projects
          </Link>
          <span className="text-white/40">|</span>
          <Link
            href="/bucket-list"
            className="text-xs font-medium text-white transition-colors hover:text-white/80"
          >
            Bucket List
          </Link>
        </div>
      </div>

      <div className="relative h-48 w-full grayscale-50 sm:h-64">
        <Image src={url} alt="Banner" fill className="object-cover" />
        <p className="absolute inset-0 flex items-center justify-center font-serif text-xl italic text-white drop-shadow">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Banner;
