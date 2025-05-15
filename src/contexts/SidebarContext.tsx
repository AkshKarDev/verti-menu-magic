
import React, { createContext, useContext, useState } from "react";

interface SidebarContextType {
  isExpanded: boolean;
  toggleSidebar: () => void;
  expandedItems: string[];
  toggleMenuItem: (itemId: string) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleSidebar = () => {
    setIsExpanded(prev => !prev);
  };

  const toggleMenuItem = (itemId: string) => {
    setExpandedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  return (
    <SidebarContext.Provider
      value={{
        isExpanded,
        toggleSidebar,
        expandedItems,
        toggleMenuItem,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
