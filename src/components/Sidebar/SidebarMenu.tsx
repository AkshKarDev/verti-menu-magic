
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { 
  ChevronRight,
  Home, 
  Settings, 
  User, 
  FileText, 
  Mail, 
  Calendar,
  ShieldAlert,
  Shield,
  AlertTriangle,
  Info
} from "lucide-react";

// Define our menu structure with nested items
const menuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: Home,
    path: "/"
  },
  {
    id: "risk",
    title: "Risk Management",
    icon: ShieldAlert,
    children: [
      {
        id: "limit-breaches",
        title: "Limit Breaches",
        path: "/risk/limit-breaches"
      },
      {
        id: "counterparties",
        title: "Counterparties",
        path: "/risk/counterparties"
      }
    ]
  },
  {
    id: "user",
    title: "User",
    icon: User,
    children: [
      {
        id: "profile",
        title: "Profile",
        path: "/profile"
      },
      {
        id: "preferences",
        title: "Preferences",
        path: "/preferences"
      }
    ]
  },
  {
    id: "documents",
    title: "Documents",
    icon: FileText,
    children: [
      {
        id: "reports",
        title: "Reports",
        path: "/reports"
      },
      {
        id: "invoices",
        title: "Invoices",
        path: "/invoices"
      }
    ]
  },
  {
    id: "messages",
    title: "Messages",
    icon: Mail,
    path: "/messages"
  },
  {
    id: "calendar",
    title: "Calendar",
    icon: Calendar,
    path: "/calendar"
  },
  {
    id: "settings",
    title: "Settings",
    icon: Settings,
    path: "/settings"
  }
];

const SidebarMenu: React.FC = () => {
  return (
    <nav className="px-2">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
