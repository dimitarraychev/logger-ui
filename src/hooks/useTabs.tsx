import { useState } from "react";

const defaultTab = "All";

export const useTabs = () => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const changeSelectedTab = (tab: string) => {
    setSelectedTab(tab);
  };

  return {
    selectedTab,
    changeSelectedTab,
  };
};
