import "./LogViewer.css";
import { useEffect, useRef } from "react";
import { useLogs } from "../../hooks/useLogs";
import LogLine from "../LogLine/LogLine";
import Button from "../Button/Button";
import NumberInput from "../NumberInput/NumberInput";
import { useForm } from "../../hooks/useForm";

const LogViewer = () => {
  const { values, handleChange } = useForm({
    pollInterval: 5000,
    limit: 50,
  });

  const { logs, loading, error, refresh } = useLogs({
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
          min={0}
          max={10000}
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

        {loading && <p>Loading logs...</p>}
      </div>

      <div className="logs-container" ref={containerRef}>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          logs.map((log, i) => <LogLine i={i} log={log} />)
        )}
      </div>
    </div>
  );
};

export default LogViewer;
