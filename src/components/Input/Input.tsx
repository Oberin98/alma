import * as React from "react";

import { cn } from "@/lib/styles";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-lg border border-input bg-transparent px-4 py-3 text-sm font-medium transition-[color,box-shadow] outline-none placeholder:text-muted-foreground",
        // Input type file
        "file::bg-transparent file:inline-flex file:border-none file:text-sm file:text-muted-foreground",
        // Selection state
        "selection:bg-primary selection:text-primary-foreground",
        // Disabled state
        "disabled:pointer-events-none disabled:opacity-50",
        // Focus state
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        // Error state
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  );
}

export { Input };
