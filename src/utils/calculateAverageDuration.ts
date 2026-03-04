import type { LogEntryType } from "../types/Logs";

export const calculateAverageDuration = (
  logs: LogEntryType[],
): number | null => {
  const durations = logs
    .map((l) => l.metadata?.durationMs)
    .filter((d): d is number => typeof d === "number");

  if (durations.length === 0) return null;

  const avg =
    durations.reduce((sum, duration) => sum + duration, 0) / durations.length;

  return Math.round(avg);
};
