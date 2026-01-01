import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SystemWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

const SystemWindow = ({ title, children, className, contentClassName }: SystemWindowProps) => {
  return (
    <div className={cn("system-window", className)}>
      {/* Title Bar */}
      <div className="window-title-bar">
        <span className="font-pixel text-xs text-foreground truncate">{title}</span>
        <div className="window-buttons">
          <button className="window-btn" aria-label="Minimize">_</button>
          <button className="window-btn" aria-label="Maximize">□</button>
          <button className="window-btn" aria-label="Close">×</button>
        </div>
      </div>
      
      {/* Content */}
      <div className={cn("window-content", contentClassName)}>
        {children}
      </div>
    </div>
  );
};

export default SystemWindow;
