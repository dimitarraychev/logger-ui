import Loader from "../Loader/Loader";
import "./StatusCard.css";

interface StatusCardProps {
  label: string;
  name: string;
  value: string | boolean | number;
  highlightColor?: string;
  isInteractive?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  units?: string;
  isLoading?: boolean;
}

const StatusCard = ({
  label,
  name,
  value,
  units,
  highlightColor,
  isInteractive = false,
  onChange,
  min,
  max,
  step = 1,
  isLoading,
}: StatusCardProps) => {
  const displayValue =
    typeof value === "boolean" ? (value ? "ON" : "OFF") : value;

  const statusColorClass =
    typeof value === "boolean" && !value
      ? "status-gray"
      : highlightColor
        ? `status-${highlightColor}`
        : "";

  const triggerChange = (newValue: string | boolean | number) => {
    if (!onChange) return;

    const input = document.createElement("input");

    if (typeof newValue === "boolean") {
      input.type = "checkbox";
      input.checked = newValue;
    } else if (typeof newValue === "number") {
      input.type = "number";
      input.value = String(newValue);
    } else {
      input.type = "text";
      input.value = String(newValue);
    }

    input.name = name;

    const event = { target: input } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  const handleCardClick = () => {
    if (!isInteractive) return;

    if (typeof value === "boolean") {
      triggerChange(!value);
    }
  };

  const increment = () => {
    if (typeof value === "number") {
      let newVal = value + step;
      if (max !== undefined && newVal > max) newVal = max;
      triggerChange(newVal);
    }
  };

  const decrement = () => {
    if (typeof value === "number") {
      let newVal = value - step;
      if (min !== undefined && newVal < min) newVal = min;
      triggerChange(newVal);
    }
  };
  return (
    <div
      className={`status-card ${statusColorClass} ${
        isInteractive ? "status-interactive" : ""
      }`}
      onClick={handleCardClick}
      role={isInteractive && typeof value === "boolean" ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      <p className="status-card-label">{label}:</p>

      <div className="status-card-text-wrapper">
        {isLoading ? (
          <Loader size={2.1} />
        ) : (
          <>
            <p className="status-card-text">{displayValue}</p>

            {typeof value === "number" && isInteractive && (
              <div className="status-arrows">
                <div onClick={increment} className="arrow-up">
                  ▲
                </div>
                <div onClick={decrement} className="arrow-down">
                  ▼
                </div>
              </div>
            )}

            {units && <p className="status-card-units">{units}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default StatusCard;
