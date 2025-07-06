import { Button } from "@/components/ui/Button";
import { FaSignOutAlt } from "react-icons/fa";

const AdminHeader = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200">
      <div className="h-full px-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-primary">CMS Admin</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Welcome, Esmaeil</span>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <FaSignOutAlt />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export { AdminHeader };
