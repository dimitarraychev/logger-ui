import "./LogEntry.css";
import type { LogEntryType } from "../../types/Logs";
import JsonViewer from "../JsonViewer/JsonViewer";

interface LogEntryProps {
  log: LogEntryType;
}

const LogEntry = ({ log }: LogEntryProps) => {
  return (
    <details className="log-entry">
      <summary className="log-summary">
        <span className="log-timestamp">{log.timestamp}</span>
        <span className={`log-level log-level-${log.level}`}>
          {log.level.toUpperCase()}
        </span>
        {log.durationMs && (
          <span className="log-duration">{log.durationMs}ms</span>
        )}
        {log.status && (
          <span
            className={`log-status
    ${log.status === 200 ? "status-success" : ""}
    ${
      log.status === 404 || log.status === 500 || log.status === 400
        ? "status-error"
        : ""
    }`}
          >
            {log.status}
          </span>
        )}
        {log.method && <span className="log-method">{log.method}</span>}
        {log.path && <span className="log-path">{log.path}</span>}
        <span className="log-message">{log.message}</span>
      </summary>

      <div className="log-details">
        {log.body && <JsonViewer jsonData={log.body} title="Request Body:" />}
        {log.responseBody && (
          <JsonViewer jsonData={log.responseBody} title="Response Body:" />
        )}
      </div>
    </details>
  );
};

export default LogEntry;
