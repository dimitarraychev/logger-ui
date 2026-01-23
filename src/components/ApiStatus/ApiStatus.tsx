import { useState, useEffect } from "react";
import "./ApiStatus.css";
import StatusCard from "../StatusCard/StatusCard";

interface ApiStatusProps {
  refreshTrigger?: number;
}

const ApiStatus = ({ refreshTrigger }: ApiStatusProps) => {
  const [status, setStatus] = useState<"loading" | "live" | "offline">(
    "loading",
  );

  const checkStatus = async () => {
    setStatus("loading");

    try {
      const res = await fetch("/api/status");
      if (!res.ok) throw new Error("HTTP error");

      setStatus("live");
    } catch {
      setStatus("offline");
    }
  };

  useEffect(() => {
    checkStatus();
  }, [refreshTrigger]);

  const displayText =
    status === "loading" ? "Loading" : status === "live" ? "Live" : "Offline";

  const displayColor =
    status === "loading" ? "" : status === "live" ? "green" : "red";

  return (
    <StatusCard
      label="Status"
      name="status"
      value={displayText}
      highlightColor={displayColor}
    />
  );
};

export default ApiStatus;
