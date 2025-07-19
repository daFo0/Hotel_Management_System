import type { SidebarOption } from "../components/Sidebar";
import Sidebar from "../components/Sidebar";

interface ManagerMainLayoutProps {
  children: React.ReactNode;
  sidebarOptions: SidebarOption[];
}

export default function ManagerMainLayout({
  children,
  sidebarOptions,
}: ManagerMainLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar options={sidebarOptions} role="Manager" />
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">{children}</main>
    </div>
  );
}
