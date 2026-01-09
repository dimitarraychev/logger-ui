import "./LogViewer.css";
import { useLogs } from "../../hooks/useLogs";
import LogEntry from "../LogEntry/LogEntry";
import { useForm } from "../../hooks/useForm";
import LogSettings from "../LogSettings/LogSettings";

const LogViewer = () => {
  const { values, handleChange } = useForm({
    pollInterval: 5000,
    limit: 50,
  });

  const { logs, error, pollTrigger, refresh } = useLogs({
    pollInterval: values.pollInterval,
    limit: values.limit,
  });

  return (
    <div className="logs-wrapper">
      <LogSettings values={values} handleChange={handleChange} refresh={refresh} pollTrigger={pollTrigger} />

      <div className="logs-container">
        {error ? (
          <p className="logs-error">{error}</p>
        ) : (
          logs.map((log, i) => <LogEntry key={i} log={log} />)
        )}
      </div>
    </div>
  );
};

export default LogViewer;
