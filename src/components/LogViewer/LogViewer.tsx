import "./LogViewer.css";
import { useEffect, useRef } from "react";
import logoSvg from "../../assets/server.svg";
import { useLogs } from "../../hooks/useLogs";
import LogLine from "../LogLine/LogLine";
import Button from "../Button/Button";

const LogViewer = () => {
  const { logs, loading, error, refresh } = useLogs({
    // pollInterval: 5000,
    limit: 50,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="log-wrapper">
      <div className="logo-wrapper">
        <img src={logoSvg} alt="Logo" className="logo" />
        <h1 className="logo-text">Logger UI</h1>
      </div>

      <Button onClick={refresh} title="Refresh" text="Refresh" />

      {loading && <p>Loading logs...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="log-container" ref={containerRef}>
        {logs.map((log, i) => (
          <LogLine i={i} log={log} />
        ))}
      </div>
    </div>
  );
};

export default LogViewer;
