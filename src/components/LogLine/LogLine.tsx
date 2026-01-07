import type { LogEntry } from "../../types/Logs";

interface LogLineProps {
  key: number;
  log: LogEntry;
}

const LogLine = ({ key, log }: LogLineProps) => {
  return (
    <div key={key} className="mb-1 border-b border-gray-300">
      <span>{log.timestamp}</span>{" "}
      <span className="font-bold">{log.level.toUpperCase()}</span>:{" "}
      <span>{log.message}</span>
    </div>
  );
};

export default LogLine;
