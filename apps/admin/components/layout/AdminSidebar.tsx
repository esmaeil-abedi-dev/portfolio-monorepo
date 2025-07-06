import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaHome, FaNewspaper, FaProjectDiagram, FaCog } from "react-icons/fa";

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const SidebarLink = ({ href, label, icon, isActive }: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-3 px-4 py-3 rounded-md transition-colors",
        isActive
          ? "bg-accent/10 text-accent"
          : "text-gray-600 hover:bg-accent/5 hover:text-accent"
      )}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

const AdminSidebar = () => {
  return (
    <aside className="h-screen w-64 bg-background-alt border-r border-gray-200">
      <div className="p-5">
        <h1 className="text-xl font-heading font-bold text-primary">Esmaeil&apos;s CMS</h1>
      </div>
      
      <nav className="mt-6 px-3 space-y-1">
        <SidebarLink 
          href="/dashboard" 
          label="Dashboard" 
          icon={<FaHome />} 
        />
        <SidebarLink 
          href="/posts" 
          label="Posts" 
          icon={<FaNewspaper />} 
        />
        <SidebarLink 
          href="/projects" 
          label="Projects" 
          icon={<FaProjectDiagram />} 
        />
        <SidebarLink 
          href="/settings" 
          label="Settings" 
          icon={<FaCog />} 
        />
      </nav>
    </aside>
  );
};

export { AdminSidebar };
