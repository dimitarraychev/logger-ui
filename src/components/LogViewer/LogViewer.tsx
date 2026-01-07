import "./LogViewer.css";
import { useEffect, useRef } from "react";
import { useLogs } from "../../hooks/useLogs";
import LogEntry from "../LogEntry/LogEntry";
import Button from "../Button/Button";
import NumberInput from "../NumberInput/NumberInput";
import { useForm } from "../../hooks/useForm";
import PollLoader from "../PollLoader/PollLoader";

const LogViewer = () => {
  const { values, handleChange } = useForm({
    pollInterval: 5000,
    limit: 50,
  });

  const { logs, error, pollTrigger, refresh } = useLogs({
    pollInterval: values.pollInterval,
    limit: values.limit,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="logs-wrapper">
      <div className="logs-settings">
        <NumberInput
          name="pollInterval"
          label="Poll Interval (ms):"
          value={values.pollInterval}
          min={5000}
          max={20000}
          onChange={handleChange}
        />

        <NumberInput
          name="limit"
          label="Limit:"
          value={values.limit}
          min={50}
          max={200}
          onChange={handleChange}
        />

        <Button onClick={refresh} title="Refresh" text="Refresh" />

        <PollLoader pollInterval={values.pollInterval} trigger={pollTrigger} />
      </div>

      <div className="logs-container" ref={containerRef}>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          logs.map((log, i) => <LogEntry key={i} log={log} />)
        )}
      </div>
    </div>
  );
};

export default LogViewer;
