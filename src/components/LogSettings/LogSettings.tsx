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
}

const LogSettings = ({
  values,
  handleChange,
  pollTrigger,
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
        value={values.pollInterval}
        isInteractive={true}
        onChange={handleChange}
        min={5000}
        max={20000}
        step={1000}
      />

      <StatusCard
        label="Limit"
        name="limit"
        value={values.limit}
        isInteractive={true}
        onChange={handleChange}
        min={50}
        max={200}
        step={10}
      />
    </div>
  );
};

export default LogSettings;
