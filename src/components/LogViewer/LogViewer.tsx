import "./LogViewer.css";
import LogEntry from "../LogEntry/LogEntry";
import LogSettings from "../LogSettings/LogSettings";
import { useForm } from "../../hooks/useForm";
import { useLogs } from "../../hooks/useLogs";
import { useExpandableIds } from "../../hooks/useExpandableIds";
import { useHighlightedLogs } from "../../hooks/useHighlightedLogs";

const LogViewer = () => {
  const { values, handleChange } = useForm({
    pollInterval: 5000,
    limit: 50,
    showPings: false,
  });

  const { logs, error, pollTrigger, refresh, pingsCount } = useLogs({
    pollInterval: values.pollInterval,
    limit: values.limit,
    showPings: values.showPings,
  });

  const { expandedIds, toggleExpand } = useExpandableIds();

  const { newIds } = useHighlightedLogs({
    logs,
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
          logs.map((log) => (
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
