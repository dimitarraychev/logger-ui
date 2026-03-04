import "./LogViewer.css";
import LogEntry from "../LogEntry/LogEntry";
import LogSettings from "../LogSettings/LogSettings";
import { useForm } from "../../hooks/useForm";
import { useLogs } from "../../hooks/useLogs";
import { useExpandableIds } from "../../hooks/useExpandableIds";
import { useHighlightedLogs } from "../../hooks/useHighlightedLogs";
import TabsMenu from "../TabsMenu/TabsMenu";
import { useTabs } from "../../hooks/useTabs";

const LogViewer = () => {
  const tabs = ["All", "Game", "Pings", "Reports"];
  const { selectedTab, changeSelectedTab } = useTabs();

  const { values, handleChange } = useForm({
    pollInterval: 5000,
    limit: 50,
    autoRefresh: false,
  });

  const { logs, error, pollTrigger, refresh, averageDuration } = useLogs({
    pollInterval: values.pollInterval,
    limit: values.limit,
    autoRefresh: values.autoRefresh,
    selectedTab,
  });

  const { expandedIds, toggleExpand } = useExpandableIds();

  const { newIds } = useHighlightedLogs({
    logs,
    highlightDuration: 2000,
  });

  return (
    <div className="logs-wrapper">
      <LogSettings
        values={values}
        handleChange={handleChange}
        refresh={refresh}
        pollTrigger={pollTrigger}
        averageDuration={averageDuration}
      />

      <TabsMenu
        tabs={tabs}
        selectedTab={selectedTab}
        onChange={changeSelectedTab}
      />

      <div className="logs-container">
        {error ? (
          <p className="logs-error">{error}</p>
        ) : (
          logs.map((log) => (
            <LogEntry
              key={log._id}
              log={log}
              isExpanded={expandedIds.has(log._id)}
              toggleExpand={() => toggleExpand(log._id)}
              highlight={newIds.has(log._id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LogViewer;
