import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "outline" | "whatsapp";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-brand-100 text-brand-800 border-brand-200",
    outline: "border border-brand-300 text-brand-700 bg-transparent",
    whatsapp: "bg-[#25D366]/10 text-[#128C7E] border-[#25D366]/30",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
