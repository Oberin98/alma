import React from "react";

import { cn } from "@/lib/styles";

interface PaginationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: number;
  selected?: boolean;
}

function PaginationItem({
  value,
  selected,
  disabled,
  children,
  className,
  ...props
}: PaginationItemProps) {
  return (
    <button
      type="button"
      value={value}
      disabled={disabled}
      className={cn(
        "inline-flex size-6 cursor-pointer items-center justify-center rounded-xs border border-transparent text-xs font-medium text-muted-foreground outline-none hover:text-foreground disabled:pointer-events-none disabled:opacity-50",
        // Focus state
        "focus-visible:border-ring focus-visible:ring-[2px] focus-visible:ring-ring/50",
        // Selected state
        selected && "border-foreground text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { PaginationItem };
