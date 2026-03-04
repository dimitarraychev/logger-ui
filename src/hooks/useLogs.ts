import { useState, useEffect, useRef } from "react";
import type { LogEntryType } from "../types/Logs";
import { calculateAverageDuration } from "../utils/calculateAverageDuration";
// import { logsExample } from "../assets/logsExample";

export interface UseLogsProps {
  pollInterval?: number;
  limit?: number;
  showPings?: boolean;
  showReports?: boolean;
  autoRefresh?: boolean;
}

export const useLogs = ({
  pollInterval,
  limit = 100,
  showPings = false,
  showReports = false,
  autoRefresh = true,
}: UseLogsProps = {}) => {
  const [logs, setLogs] = useState<LogEntryType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pollTrigger, setPollTrigger] = useState(0);
  const [averageDuration, setAverageDuration] = useState<number | null>(null);

  const containsKeyword = (log: LogEntryType, keyword: string) =>
    log.message?.toLowerCase().includes(keyword.toLowerCase());

  const isPing = (log: LogEntryType) => containsKeyword(log, "ping");
  const isReport = (log: LogEntryType) => containsKeyword(log, "report");

  const filteredLogs = logs.filter((log) => {
    const ping = isPing(log);
    const report = isReport(log);

    if (!showPings && ping) return false;
    if (!showReports && report) return false;

    return true;
  });
  const pingsCount = logs.filter(isPing).length;
  const reportsCount = logs.filter(isReport).length;

  const intervalRef = useRef<number | undefined>(undefined);

  const fetchLogs = async () => {
    // setLogs(logsExample.logs);
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
    reportsCount,
    averageDuration,
  };
};
