import { useState, useEffect, useRef } from "react";
import type { LogEntryType } from "../types/Logs";

export interface UseLogsProps {
  pollInterval?: number;
  limit?: number;
  showPings?: boolean;
}

export const useLogs = ({
  pollInterval,
  limit = 100,
  showPings = false,
}: UseLogsProps = {}) => {
  const [logs, setLogs] = useState<LogEntryType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pollTrigger, setPollTrigger] = useState(0);

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
      setLogs(data.logs || []);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
      setPollTrigger((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchLogs();

    if (pollInterval) {
      intervalRef.current = window.setInterval(fetchLogs, pollInterval);
      return () => {
        if (intervalRef.current !== undefined) {
          window.clearInterval(intervalRef.current);
        }
      };
    }
  }, [limit, pollInterval]);

  return {
    loading,
    error,
    pollTrigger,
    refresh: fetchLogs,
    logs: filteredLogs,
    pingsCount,
  };
};
