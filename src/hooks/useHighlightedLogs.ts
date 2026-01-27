import { useState, useEffect, useRef } from "react";
import type { LogEntryType } from "../types/Logs";

interface UseHighlightedLogsOptions {
  logs: LogEntryType[];
  highlightDuration?: number;
}

export const useHighlightedLogs = ({
  logs,
  highlightDuration = 2000,
}: UseHighlightedLogsOptions) => {
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const prevIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const currentIds = new Set(logs.map((l) => l._id));

    const newLogIds = new Set(
      logs.filter((l) => !prevIdsRef.current.has(l._id)).map((l) => l._id),
    );

    if (newLogIds.size > 0) setNewIds(newLogIds);

    prevIdsRef.current = currentIds;

    const timer = setTimeout(() => setNewIds(new Set()), highlightDuration);
    return () => clearTimeout(timer);
  }, [logs, highlightDuration]);

  return { newIds };
};
