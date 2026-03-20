import { useState, useEffect, useRef, useMemo } from "react";
import type { LogEntryType } from "../types/Logs";
import { calculateAverageDuration } from "../utils/calculateAverageDuration";
// import { logsExample } from "../assets/logsExample";

export interface UseLogsProps {
  pollInterval?: number;
  limit?: number;
  autoRefresh?: boolean;
  selectedTab?: string;
}

export const useLogs = ({
  pollInterval,
  limit = 100,
  autoRefresh = true,
  selectedTab = "All",
}: UseLogsProps = {}) => {
  const [logs, setLogs] = useState<LogEntryType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pollTrigger, setPollTrigger] = useState(0);
  const [averageDuration, setAverageDuration] = useState<number | null>(null);

  const containsKeyword = (log: LogEntryType, keyword: string) =>
    log.message?.toLowerCase().includes(keyword.toLowerCase());

  const isPing = (log: LogEntryType) => containsKeyword(log, "ping");
  const isErrorReport = (log: LogEntryType) =>
    containsKeyword(log, "error report");
  const isAccountingReport = (log: LogEntryType) =>
    containsKeyword(log, "accounting report");

  const filteredLogs = useMemo(() => {
    if (selectedTab === "All") return logs;

    if (selectedTab === "Game") {
      return logs.filter(
        (log) =>
          !isPing(log) && !isErrorReport(log) && !isAccountingReport(log),
      );
    }

    if (selectedTab === "Pings") {
      return logs.filter((log) => isPing(log));
    }

    if (selectedTab === "Error Reports") {
      return logs.filter((log) => isErrorReport(log));
    }

    if (selectedTab === "Accounting Reports") {
      return logs.filter((log) => isAccountingReport(log));
    }

    return logs;
  }, [logs, selectedTab]);

  const pingsCount = useMemo(() => logs.filter(isPing).length, [logs]);

  const intervalRef = useRef<number | undefined>(undefined);

  const fetchLogs = async () => {
    // return setLogs(logsExample.logs);
    setLoading(true);
    try {
      const res = await fetch(`/api/logs?limit=${limit}`);
      if (!res.ok) throw new Error(`Failed to fetch logs: ${res.status}`);
      const data = await res.json();
      const fetchedLogs: LogEntryType[] = data.logs || [];
      setLogs(fetchedLogs);
      setError(null);

      const avg = calculateAverageDuration(fetchedLogs);
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
