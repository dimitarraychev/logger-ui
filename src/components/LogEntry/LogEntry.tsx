import "./LogEntry.css";
import type { LogEntryType } from "../../types/Logs";
import JsonViewer from "../JsonViewer/JsonViewer";

interface LogEntryProps {
  log: LogEntryType;
}

const LogEntry = ({ log }: LogEntryProps) => {
  const { level, message, metadata } = log;
  const { method, path, body, status, durationMs, responseBody, timestamp } =
    metadata;

  return (
    <details className="log-entry">
      <summary className="log-summary">
        <span className="log-timestamp">{timestamp}</span>
        <span className={`log-level log-level-${level}`}>
          {level.toUpperCase()}
        </span>
        {durationMs && <span className="log-duration">{durationMs}ms</span>}
        {status && (
          <span
            className={`log-status
    ${status === 200 ? "status-success" : ""}
    ${
      status === 404 || status === 500 || status === 400 ? "status-error" : ""
    }`}
          >
            {status}
          </span>
        )}
        {method && <span className="log-method">{method}</span>}
        {path && <span className="log-path">{path}</span>}
        <span className="log-message">{message}</span>
      </summary>

      <div className="log-details">
        {body && <JsonViewer jsonData={body} title="Request Body:" />}
        {responseBody && (
          <JsonViewer jsonData={responseBody} title="Response Body:" />
        )}
      </div>
    </details>
  );
};

export default LogEntry;
