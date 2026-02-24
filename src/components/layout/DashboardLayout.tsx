import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import "../../App.css";

type DashboardLayoutProps = {
  children: ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen dashboard-background">
      <div className="w-64 bg-transparent">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}

export default DashboardLayout;
