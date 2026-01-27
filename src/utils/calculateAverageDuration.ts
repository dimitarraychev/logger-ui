import type { LogEntryType } from "../types/Logs";

export const calculateAverageDuration = (
  logs: LogEntryType[],
  includePings: boolean
): number | null => {
  const durations = (includePings
    ? logs
    : logs.filter((l) => l.level !== "ping")
  )
    .map((l) => l.metadata.durationMs)
    .filter((d): d is number => typeof d === "number");

  if (durations.length === 0) return null;

  const avg = durations.reduce((sum, d) => sum + d, 0) / durations.length;

  return Math.round(avg); 
};
