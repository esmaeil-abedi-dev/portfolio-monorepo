import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

const NavItem = ({ href, label, isActive }: NavItemProps) => {
  return (
    <Link 
      href={href}
      className={cn(
        "px-4 py-2 rounded-md transition-colors",
        isActive 
          ? "text-accent font-semibold"
          : "text-[#1A2B40] hover:text-accent"
      )}
    >
      {label}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold text-[#1A2B40]">
          Esmaeil Abedi
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          <NavItem href="/" label="Home" />
          <NavItem href="/about" label="About" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/blog" label="Blog" />
          <NavItem href="/cv" label="CV" />
          <NavItem href="/contact" label="Contact" />
        </nav>

        <button className="md:hidden">
          {/* Mobile menu button - can be enhanced later */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export { Header };
