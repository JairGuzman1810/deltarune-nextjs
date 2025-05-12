// TimeLeft - Represents the shape of the countdown time object
export interface TimeLeft {
  days: number; // Remaining days
  hours: number; // Remaining hours
  minutes: number; // Remaining minutes
  seconds: number; // Remaining seconds
}

// calculateTimeLeft - Computes the remaining time from now until the target date
export const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date(); // Current time
  const difference = targetDate.getTime() - now.getTime(); // Milliseconds until target

  // If time has passed, return all zeros
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  // Calculate days, hours, minutes, and seconds remaining
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

// formatTimeUnit - Pads time units to always display 2 digits (e.g., "05")
export const formatTimeUnit = (value: number): string => {
  return String(value).padStart(2, "0");
};
