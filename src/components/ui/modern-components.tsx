import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const ModernCard = ({ children, className, hover = true, glass = false }: ModernCardProps) => {
  return (
    <div className={cn(
      "relative p-6 rounded-2xl border border-white/20 transition-all duration-300",
      glass ? "glass-card" : "modern-card",
      hover && "hover-lift group",
      className
    )}>
      {children}
    </div>
  );
};

interface GradientButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export const GradientButton = ({ children, variant = "primary", className, onClick }: GradientButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "relative px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:scale-105",
        variant === "primary" 
          ? "bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-lg hover:shadow-xl" 
          : "bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground shadow-lg hover:shadow-xl",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

interface AnimatedIconProps {
  icon: React.ComponentType<any>;
  className?: string;
  animate?: boolean;
}

export const AnimatedIcon = ({ icon: Icon, className, animate = true }: AnimatedIconProps) => {
  return (
    <div className={cn(
      "flex items-center justify-center",
      animate && "transition-transform duration-300 hover:scale-110 hover:rotate-3",
      className
    )}>
      <Icon />
    </div>
  );
};