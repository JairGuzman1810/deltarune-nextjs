"use client"; // Enable client-side rendering

import { TimeLeft, calculateTimeLeft } from "@/lib/countdown";
import { RELEASE_DATE } from "@/modules/home/constants";
import { useEffect, useState } from "react";
import { TimeUnit } from "./time-unit";

// Countdown - Displays a live countdown timer until the release date
export const Countdown = () => {
  // State to store the remaining time
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, // Days remaining
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Effect to update the countdown every second
  useEffect(() => {
    // updateCountdown - Recalculates the remaining time
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft(RELEASE_DATE)); // Recalculate remaining time
    };

    updateCountdown(); // Initial call

    const timer = setInterval(updateCountdown, 1000); // Update countdown every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      {/* Release date message */}
      <h3 className="highlight-yellow text-xl md:text-3xl text-center m-4 min-h-10">
        Releasing on June 5, 2025
      </h3>

      {/* Countdown timer in pixel font */}
      <h3 className="text-deltarune-gray text-3xl md:text-5xl font-pixel text-center mb-16 h-16 motion-safe:animate-fade-in">
        <div className="flex gap-x-2 items-center justify-center">
          <TimeUnit value={timeLeft.days} /> {/* Days */}
          <TimeUnit value={timeLeft.hours} /> {/* Hours */}
          <TimeUnit value={timeLeft.minutes} /> {/* Minutes */}
          <TimeUnit value={timeLeft.seconds} isLast /> {/* Seconds */}
        </div>
      </h3>
    </div>
  );
};
