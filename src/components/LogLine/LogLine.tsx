import type { LogEntry } from "../../types/Logs";

interface LogLineProps {
  i: number;
  log: LogEntry;
}

const LogLine = ({ i, log }: LogLineProps) => {
  return (
    <div key={i} className="mb-1 border-b border-gray-300">
      <span>{log.timestamp}</span>{" "}
      <span className="font-bold">{log.level.toUpperCase()}</span>:{" "}
      <span>{log.message}</span>
    </div>
  );
};

export default LogLine;
