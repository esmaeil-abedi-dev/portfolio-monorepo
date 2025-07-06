import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          // Variants
          variant === "default" && "bg-accent hover:bg-accent-light text-white",
          variant === "outline" && "border border-accent bg-transparent hover:bg-accent/10 text-accent",
          variant === "ghost" && "hover:bg-accent/10 text-accent",
          variant === "link" && "text-accent underline-offset-4 hover:underline",
          // Sizes
          size === "sm" && "h-8 px-3 text-xs",
          size === "md" && "h-10 px-4 py-2",
          size === "lg" && "h-12 px-6 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
