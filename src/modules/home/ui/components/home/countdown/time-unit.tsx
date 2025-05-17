import { formatTimeUnit } from "@/lib/countdown";

// TimeUnitProps - Props for the TimeUnit component
interface TimeUnitProps {
  value: number; // Numeric value to display (days, hours, minutes, or seconds)
  isLast?: boolean; // Whether this is the last unit (hides colon if true)
}

// TimeUnit - Renders a single time unit (e.g., "05 :")
export const TimeUnit = ({ value, isLast = false }: TimeUnitProps) => (
  <>
    <span className="text-3xl whitespace-nowrap md:text-6xl min-w-[50px] md:min-w-[86px] text-right">
      {formatTimeUnit(value)} {/* Format value with leading zero if needed */}
    </span>

    {/* Colon separator (not rendered for last item) */}
    {!isLast && <span className="text-2xl md:text-5xl w-4 md:w-8">:</span>}
  </>
);
