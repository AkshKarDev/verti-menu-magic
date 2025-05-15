
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/contexts/SidebarContext";
import SidebarMenu from "./SidebarMenu";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { isExpanded, toggleSidebar } = useSidebar();

  return (
    <div
      className={cn(
        "bg-sidebar h-screen transition-all duration-300 ease-in-out border-r border-gray-200 flex flex-col",
        isExpanded ? "w-60" : "w-16",
        className
      )}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex items-center h-16 border-b border-gray-200">
        {isExpanded && <h1 className="font-semibold text-xl flex-1">Dashboard</h1>}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-gray-100 ml-auto"
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto py-2">
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;
