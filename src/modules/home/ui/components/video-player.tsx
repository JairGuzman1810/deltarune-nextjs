"use client"; // Enables client-side rendering

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Load 8bitOperatorPlus-Regular font from local public directory
const font8bitOperatorPlusRegular = localFont({
  src: "../../../../../public/fonts/8bitOperatorPlus-Regular.ttf",
});

// VideoPlayer - Handles toggling between thumbnail and video iframe
export const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Track whether video is playing

  return (
    <div className="space-y-2">
      {/* If playing, show embedded YouTube iframe */}
      {isPlaying ? (
        <div className="relative border-2 border-deltarune-gray aspect-video motion-safe:opacity-0 motion-safe:animate-fade-in bg-black hover:border-white transition-colors">
          <iframe
            src="https://www.youtube-nocookie.com/embed/yDzgiGdekas?autoplay=1"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        // If not playing, show thumbnail with play button overlay
        <div
          className="group relative border-2 border-deltarune-gray aspect-video motion-safe:opacity-0 motion-safe:animate-fade-in bg-black hover:border-white transition-colors cursor-pointer"
          onClick={() => setIsPlaying(true)} // Enable playback when user clicks the thumbnail
        >
          {/* Thumbnail image */}
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/trailer-reveal-thumb.webp"
              alt="Video Player"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
          </div>

          {/* Centered play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="w-16 h-16 rounded-full bg-deltarune-blue/75 group-hover:bg-deltarune-blue/90 flex items-center justify-center transition-all"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering parent click event
                setIsPlaying(true); // Start video playback
              }}
            >
              <span className="text-white text-4xl pl-1 -mt-1.5 font-mono">
                ▶
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Privacy disclaimer with external link to YouTube's privacy policy */}
      <p
        className={`${font8bitOperatorPlusRegular.className} text-sm text-deltarune-gray text-center`}
      >
        By clicking to view this video, you agree to{" "}
        <Link
          href="https://www.youtube.com/howyoutubeworks/our-commitments/protecting-user-data/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline opacity-100 hover:opacity-90 transition-colors"
        >
          YouTube&apos;s Privacy Policy
        </Link>
      </p>
    </div>
  );
};
