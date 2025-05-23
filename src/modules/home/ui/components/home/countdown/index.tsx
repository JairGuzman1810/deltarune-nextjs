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
    hours: 0, // Hours remaining
    minutes: 0, // Minutes remaining
    seconds: 0,
  });

  // Effect to update the countdown every second
  useEffect(() => {
    // updateCountdown - Function to update the countdown timer based on the release date
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft(RELEASE_DATE)); // Recalculate the remaining time
    };

    updateCountdown(); // Initial update of the countdown
    const timer = setInterval(updateCountdown, 1000); // Update countdown every second

    // Cleanup the interval timer on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="motion-safe:opacity-0 motion-safe:animate-fade-in">
      {/* Header displaying the release date */}
      <h3 className="m-4 text-xl text-center highlight-yellow md:text-3xl min-h-10">
        Releasing on June 4, 2025
      </h3>

      {/* Countdown timer in pixel font */}
      <h3 className="h-16 mb-4 text-3xl text-center text-deltarune-gray md:text-5xl">
        {/* Flex container for time units */}
        <div className="flex items-center justify-center gap-x-2">
          {/* TimeUnit component for each unit of time */}
          <TimeUnit value={timeLeft.days} /> {/* Display days */}
          <TimeUnit value={timeLeft.hours} /> {/* Display hours */}
          <TimeUnit value={timeLeft.minutes} /> {/* Display minutes */}
          <TimeUnit value={timeLeft.seconds} isLast /> {/* Display seconds */}
        </div>
      </h3>

      <h3 className="mb-12 text-base text-center text-deltarune-gray min-h-10">
        * June 5 in Japan, Australia, and New Zealand
      </h3>
    </div>
  );
};
