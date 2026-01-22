import "./LogViewer.css";
import { useLogs } from "../../hooks/useLogs";
import LogEntry from "../LogEntry/LogEntry";
import { useForm } from "../../hooks/useForm";
import LogSettings from "../LogSettings/LogSettings";

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
          filteredLogs.map((log, i) => <LogEntry key={i} log={log} />)
        )}
      </div>
    </div>
  );
};

export default LogViewer;
