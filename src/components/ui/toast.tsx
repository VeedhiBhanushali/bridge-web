import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = "info", onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={cn(
        "fixed top-6 right-6 z-50 min-w-[220px] rounded-lg px-4 py-3 shadow-lg text-white text-sm font-medium transition-all animate-in fade-in slide-in-from-top-4",
        type === "success" && "bg-green-600",
        type === "error" && "bg-red-600",
        type === "info" && "bg-blue-600"
      )}
      role="alert"
    >
      {message}
    </div>
  );
}; 