import "./LogViewer.css";
import LogEntry from "../LogEntry/LogEntry";
import LogSettings from "../LogSettings/LogSettings";
import { useForm } from "../../hooks/useForm";
import { useLogs } from "../../hooks/useLogs";
import { useExpandableIds } from "../../hooks/useExpandableIds";
import { useHighlightedLogs } from "../../hooks/useHighlightedLogs";

const LogViewer = () => {
  const { values, debouncedValues, handleChange } = useForm({
    pollInterval: 5000,
    limit: 50,
    autoRefresh: false,
  });

  const { logs, error, pollTrigger, refresh, averageDuration } = useLogs({
    pollInterval: debouncedValues.pollInterval,
    limit: debouncedValues.limit,
    autoRefresh: values.autoRefresh,
  });

  const { expandedIds, toggleExpand } = useExpandableIds();

  const { newIds } = useHighlightedLogs({
    logs,
    highlightDuration: 2000,
  });

  return (
    <div className="logs-wrapper">
      <LogSettings
        values={values}
        handleChange={handleChange}
        refresh={refresh}
        pollTrigger={pollTrigger}
        averageDuration={averageDuration}
      />

      <div className="logs-container">
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
