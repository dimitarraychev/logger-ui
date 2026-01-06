import "./LogViewer.css";
import { useEffect, useRef } from "react";
import logoSvg from "../assets/server.svg";

const LogViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logs = {};

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [logs]);

  return (
    <div className="log-wrapper">
      <div className="logo-wrapper">
        <img src={logoSvg} alt="Logo" className="logo" />
        <h1 className="logo-text">Logger UI</h1>
      </div>
      <div className="log-container" ref={containerRef}>
        {/*  */}
      </div>
    </div>
  );
};

export default LogViewer;
