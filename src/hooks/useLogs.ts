import { useState, useEffect, useRef } from "react";
import type { LogEntryType } from "../types/Logs";
import { calculateAverageDuration } from "../utils/calculateAverageDuration";

export interface UseLogsProps {
  pollInterval?: number;
  limit?: number;
  showPings?: boolean;
  autoRefresh?: boolean;
}

export const useLogs = ({
  pollInterval,
  limit = 100,
  showPings = false,
  autoRefresh = true,
}: UseLogsProps = {}) => {
  const [logs, setLogs] = useState<LogEntryType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pollTrigger, setPollTrigger] = useState(0);
  const [averageDuration, setAverageDuration] = useState<number | null>(null);

  const filteredLogs = showPings
    ? logs
    : logs.filter((log) => log.level !== "ping");
  const pingsCount = logs.filter((log) => log.level === "ping").length;

  const intervalRef = useRef<number | undefined>(undefined);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/logs?limit=${limit}`);
      if (!res.ok) throw new Error(`Failed to fetch logs: ${res.status}`);
      const data = await res.json();
      const fetchedLogs: LogEntryType[] = data.logs || [];
      setLogs(fetchedLogs);
      setError(null);

      const avg = calculateAverageDuration(fetchedLogs, showPings);
      setAverageDuration(avg);
    } catch (err: any) {
      setError(err.message || "Unknown error");
      setAverageDuration(null);
    } finally {
      setLoading(false);
      setPollTrigger((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchLogs();

    if (autoRefresh && pollInterval) {
      intervalRef.current = window.setInterval(fetchLogs, pollInterval);
      return () => {
        if (intervalRef.current !== undefined) {
          window.clearInterval(intervalRef.current);
        }
      };
    }
  }, [limit, pollInterval, autoRefresh]);

  return {
    loading,
    error,
    pollTrigger,
    refresh: fetchLogs,
    logs: filteredLogs,
    pingsCount,
    averageDuration,
  };
};
