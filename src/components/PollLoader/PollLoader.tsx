import { useEffect, useState } from "react";
import "./PollLoader.css";

interface PollLoaderProps {
  pollInterval: number;
  trigger: any;
}

const PollLoader = ({ pollInterval, trigger }: PollLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const step = 50;
    const increment = (step / pollInterval) * 100;

    const intervalId = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, step);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [trigger, pollInterval]);

  return (
    <div className="poll-loader-wrapper">
      <div className="poll-loader-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default PollLoader;
