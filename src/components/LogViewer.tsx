import "./LogViewer.css";
import { useEffect, useRef } from "react";
import { useLogSocket } from "../hooks/useLogSocket";

const WS_URL = "wss://192.168.10.178/logs/ws";

const LogViewer = () => {
  const logs = useLogSocket({ url: WS_URL, maxLogs: 200 });
  const containerRef = useRef<HTMLDivElement>(null);
  console.log(logs);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [logs]);

  return (
    <div className="log-wrapper">
      <h2 className="log-title">Real-time Logs</h2>
      <div className="log-container" ref={containerRef}>
        {logs.map((log, i) => (
          <div
            key={i}
            style={{
              marginBottom: 4,
              color:
                log.level === "error"
                  ? "red"
                  : log.level === "warn"
                  ? "orange"
                  : "black",
            }}
          >
            [{log.timestamp}] [{log.level.toUpperCase()}]{" "}
            <strong>{log.message}</strong>{" "}
            {log.status && <span>({log.status})</span>}{" "}
            {log.path && <span>{log.path}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogViewer;
