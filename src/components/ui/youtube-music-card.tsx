"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Track {
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  duration: number;
  currentTime: number;
}

interface YouTubeMusicCardProps {
  track?: Track;
}

const defaultTrack: Track = {
  title: "In the Night",
  artist: "The Weeknd",
  album: "Beauty Behind the Madness",
  albumArt:
    "https://i.pinimg.com/736x/8a/27/6c/8a276c8e59a21fc66f433ee19c167b0b.jpg",
  duration: 237,
  currentTime: 62,
};

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function YouTubeMusicCard({
  track = defaultTrack,
}: YouTubeMusicCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const progressPercent = (track.currentTime / track.duration) * 100;

  return (
    <div className="relative w-full max-w-[380px] overflow-hidden rounded-2xl bg-[#212121] shadow-2xl">
      {/* Blurred album art backdrop */}
      <div
        className={cn(
          "absolute inset-0 scale-110 bg-cover bg-center opacity-30 blur-2xl transition-opacity duration-500",
          imageLoaded ? "opacity-30" : "opacity-0",
        )}
        style={{ backgroundImage: `url(${track.albumArt})` }}
      />

      {/* Skeleton backdrop while loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 animate-pulse bg-zinc-800" />
      )}

      {/* Subtle dark overlay for readability */}
      <div
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-500",
          imageLoaded ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="relative z-10 p-4">
        {/* ── Header: now playing label ── */}
        <div className="mb-3 flex items-center gap-2">
          {/* YouTube Music logo mark */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            aria-label="YouTube Music"
          >
            <title>YouTube Music</title>
            <circle cx="12" cy="12" r="12" fill="#FF0000" />
            <circle cx="12" cy="12" r="5" fill="white" />
            <circle cx="12" cy="12" r="2.5" fill="#FF0000" />
          </svg>
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
            Now Playing
          </span>

          {/* Live pulse dot */}
          <span className="ml-auto flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="text-[10px] text-white/40">Live</span>
          </span>
        </div>

        {/* ── Main row: art + meta ── */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg shadow-lg bg-zinc-800">
            {/* Skeleton while loading */}
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-zinc-700" />
            )}
            <Image
              src={track.albumArt}
              alt={track.title}
              fill
              className={cn(
                "object-cover transition-all duration-500",
                imageLoaded ? "blur-0 opacity-100" : "blur-md opacity-0",
              )}
              priority
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          <div className="min-w-0 flex-1">
            {/* Skeleton text while loading */}
            {!imageLoaded ? (
              <>
                <div className="h-4 w-3/4 mb-2 rounded bg-zinc-700 animate-pulse" />
                <div className="h-3 w-1/2 rounded bg-zinc-700/70 animate-pulse" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h3 className="truncate text-[15px] font-bold leading-tight text-white">
                    {track.title}
                  </h3>
                  <span className="flex-shrink-0 flex h-[14px] w-[14px] items-center justify-center rounded-[3px] bg-white/20 text-[8px] font-bold text-white">
                    E
                  </span>
                </div>
                <p className="truncate text-[12px] text-white/60">
                  {track.artist}
                </p>
                <p className="truncate text-[11px] text-white/35">
                  {track.album}
                </p>
              </>
            )}
          </div>
        </div>

        {/* ── Progress bar ── */}
        <div className="mb-1.5">
          {!imageLoaded ? (
            <div className="h-[3px] w-full rounded-full bg-zinc-700 animate-pulse" />
          ) : (
            <div className="h-[3px] w-full rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-[#FF0000]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          )}
        </div>

        {/* Times */}
        <div className="flex justify-between text-[10px] tabular-nums text-white/40">
          <span>{formatTime(track.currentTime)}</span>
          <span>-{formatTime(track.duration - track.currentTime)}</span>
        </div>

        {/* ── Visualizer ── */}
        <div className="mt-3 flex items-end justify-center gap-[3px] h-5">
          {[6, 11, 8, 14, 7, 10, 5, 13, 9, 12, 6, 10, 8].map((h, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full bg-[#FF0000]"
              style={{
                height: `${h}px`,
                animation: `vizPulse 0.8s ease-in-out ${i * 0.07}s infinite alternate`,
                opacity: 0.7 + (i % 3) * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes vizPulse {
          from { transform: scaleY(0.35); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}

export default YouTubeMusicCard;
