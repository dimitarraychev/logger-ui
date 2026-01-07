import { useState, useEffect, useRef } from "react";
import type { LogEntryType, UseLogsOptions } from "../types/Logs";
import { mockedLogs } from "./mockedLogs";

export const useLogs = ({ pollInterval, limit = 100 }: UseLogsOptions = {}) => {
  const [logs, setLogs] = useState<LogEntryType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pollTrigger, setPollTrigger] = useState(0);

  const intervalRef = useRef<number | undefined>(undefined);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      // probably move to bottom
      setPollTrigger((prev) => prev + 1);

      // const res = await fetch(`/api/logs?limit=${limit}`);
      // if (!res.ok) throw new Error(`Failed to fetch logs: ${res.status}`);
      // const data = await res.json();
      // setLogs(data.logs || []);
      setLogs(mockedLogs.logs);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
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

  return { logs, loading, error, pollTrigger, refresh: fetchLogs };
};
