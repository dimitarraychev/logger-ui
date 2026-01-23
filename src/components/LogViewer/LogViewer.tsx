import "./LogViewer.css";
import { useLogs } from "../../hooks/useLogs";
import LogEntry from "../LogEntry/LogEntry";
import { useForm } from "../../hooks/useForm";
import LogSettings from "../LogSettings/LogSettings";
import { useState } from "react";
import { useHighlightedLogs } from "../../hooks/useHighlightedLogs";

const LogViewer = () => {
  const { values, handleChange } = useForm({
    pollInterval: 5000,
    limit: 50,
    showPings: false,
  });

  const { logs, error, pollTrigger, refresh } = useLogs({
    pollInterval: values.pollInterval,
    limit: values.limit,
  });

  const filteredLogs = values.showPings
    ? logs
    : logs.filter((log) => log.level !== "ping");
  const pingsCount = logs.filter((log) => log.level === "ping").length;

  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id); // collapse
      } else {
        newSet.add(id); // expand
      }
      return newSet;
    });
  };

  const { newIds } = useHighlightedLogs({
    logs: filteredLogs,
    highlightDuration: 3000,
  });

  return (
    <div className="logs-wrapper">
      <LogSettings
        values={values}
        handleChange={handleChange}
        refresh={refresh}
        pollTrigger={pollTrigger}
      />

      <div className="logs-container">
        {!values.showPings && pingsCount > 0 && (
          <div className="logs-info">
            {pingsCount} ping log{pingsCount !== 1 ? "s" : ""} filtered
          </div>
        )}

        {error ? (
          <p className="logs-error">{error}</p>
        ) : (
          filteredLogs.map((log) => (
            <LogEntry
              key={log._id}
              log={log}
              isExpanded={expandedIds.has(log._id)}
              toggleExpand={() => toggleExpand(log._id)}
              highlight={newIds.has(log._id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LogViewer;
