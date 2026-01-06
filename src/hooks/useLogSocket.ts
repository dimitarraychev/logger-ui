import { useEffect, useState, useRef } from "react";
import type { LogEntry } from "../types/log";

interface UseLogSocketOptions {
  url: string;
  maxLogs?: number;
}

export const useLogSocket = ({ url, maxLogs = 200 }: UseLogSocketOptions) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => console.log("Connected to log WebSocket");

    ws.onmessage = (event) => {
      try {
        const log: LogEntry = JSON.parse(event.data);
        setLogs((prev) => [log, ...prev].slice(0, maxLogs));
      } catch (err) {
        console.error("Failed to parse log:", err);
      }
    };

    ws.onclose = () => console.log("WebSocket disconnected");

    ws.onerror = (err) => console.error("WebSocket error:", err);

    return () => ws.close();
  }, [url, maxLogs]);

  return logs;
};
