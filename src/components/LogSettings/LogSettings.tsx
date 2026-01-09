import "./LogSettings.css";
import Button from "../Button/Button";
import NumberInput from "../NumberInput/NumberInput";
import PollLoader from "../PollLoader/PollLoader";
import refreshIcon from "../../assets/refresh-icon.svg";
import ApiStatus from "../ApiStatus/ApiStatus";

interface LogSettingsProps {
  values: {
    pollInterval: number;
    limit: number;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refresh: () => void | Promise<void>;
  pollTrigger: number;
}

const LogSettings = ({
  values,
  handleChange,
  refresh,
  pollTrigger,
}: LogSettingsProps) => {
  return (
    <div className="logs-settings">
      <ApiStatus refreshTrigger={pollTrigger} />

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

      <Button
        onClick={refresh}
        title="Refresh"
        text="Refresh"
        icon={refreshIcon}
      />

      <PollLoader pollInterval={values.pollInterval} trigger={pollTrigger} />
    </div>
  );
};

export default LogSettings;
