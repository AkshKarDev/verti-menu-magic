
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="flex h-screen bg-background">
          <Sidebar />
          <main className="flex-1 overflow-auto p-6">
            <div className="flex justify-end mb-4">
              <ThemeToggle />
            </div>
            {children}
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;
