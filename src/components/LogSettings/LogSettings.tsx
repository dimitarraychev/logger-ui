import "./LogSettings.css";
import ApiStatus from "../ApiStatus/ApiStatus";
import StatusCard from "../StatusCard/StatusCard";

interface LogSettingsProps {
  values: {
    pollInterval: number;
    limit: number;
    showPings: boolean;
    autoRefresh: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refresh?: () => void | Promise<void>;
  pollTrigger: number;
  averageDuration: number | null;
}

const LogSettings = ({
  values,
  handleChange,
  pollTrigger,
  averageDuration,
}: LogSettingsProps) => {
  return (
    <div className="logs-settings">
      <ApiStatus refreshTrigger={pollTrigger} />
      <StatusCard
        label="Show Pings"
        name="showPings"
        value={values.showPings}
        isInteractive={true}
        onChange={handleChange}
      />

      <StatusCard
        label="Auto Refresh"
        name="autoRefresh"
        value={values.autoRefresh}
        isInteractive={true}
        onChange={handleChange}
      />

      <StatusCard
        label="Poll Interval"
        name="pollInterval"
        units="ms"
        value={values.pollInterval}
        isInteractive={true}
        onChange={handleChange}
        min={5000}
        max={20000}
        step={1000}
      />

      <StatusCard
        label="Logs Limit"
        name="limit"
        units="logs"
        value={values.limit}
        isInteractive={true}
        onChange={handleChange}
        min={50}
        max={200}
        step={10}
      />

      <StatusCard
        label="Avg Duration"
        name="limit"
        units="ms"
        value={averageDuration === null ? 0 : averageDuration}
      />
    </div>
  );
};

export default LogSettings;
