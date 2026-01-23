import "./LogViewer.css";
import { useLogs } from "../../hooks/useLogs";
import LogEntry from "../LogEntry/LogEntry";
import { useForm } from "../../hooks/useForm";
import LogSettings from "../LogSettings/LogSettings";
import { useState } from "react";

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

  const pingCount = logs.filter((log) => log.level === "ping").length;

  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="logs-wrapper">
      <LogSettings
        values={values}
        handleChange={handleChange}
        refresh={refresh}
        pollTrigger={pollTrigger}
      />

      <div className="logs-container">
        {!values.showPings && pingCount > 0 && (
          <div className="logs-info">
            {pingCount} ping log{pingCount !== 1 ? "s" : ""} filtered
          </div>
        )}

        {error ? (
          <p className="logs-error">{error}</p>
        ) : (
          filteredLogs.map((log) => (
            <LogEntry
              key={log._id}
              log={log}
              isExpanded={expandedId === log._id}
              toggleExpand={() =>
                setExpandedId(expandedId === log._id ? null : log._id)
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LogViewer;
