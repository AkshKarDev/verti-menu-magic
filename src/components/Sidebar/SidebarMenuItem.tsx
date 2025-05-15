
import React from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  id: string;
  title: string;
  icon?: React.ElementType;
  path?: string;
  children?: MenuItem[];
}

interface SidebarMenuItemProps {
  item: MenuItem;
  level?: number;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ item, level = 0 }) => {
  const { isExpanded, expandedItems, toggleMenuItem } = useSidebar();
  const Icon = item.icon;
  const isSubmenuExpanded = expandedItems.includes(item.id);
  const hasChildren = !!item.children && item.children.length > 0;

  const handleItemClick = () => {
    if (hasChildren) {
      toggleMenuItem(item.id);
    }
  };

  return (
    <li>
      <button
        onClick={handleItemClick}
        className={cn(
          "flex items-center w-full px-2 py-2 text-sm font-medium rounded-md",
          "hover:bg-gray-100 transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          level > 0 ? "pl-8" : "pl-3"
        )}
        aria-expanded={hasChildren ? isSubmenuExpanded : undefined}
      >
        {Icon && <Icon size={18} className={cn(isExpanded ? "mr-2" : "mx-auto")} />}
        
        {(isExpanded || level > 0) && <span className="flex-1 text-left">{item.title}</span>}
        
        {hasChildren && isExpanded && (
          <span className="ml-auto">
            {isSubmenuExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </button>

      {/* Submenu */}
      {hasChildren && isExpanded && isSubmenuExpanded && (
        <ul className="mt-1 space-y-1 animate-accordion-down">
          {item.children.map((child) => (
            <SidebarMenuItem key={child.id} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenuItem;
