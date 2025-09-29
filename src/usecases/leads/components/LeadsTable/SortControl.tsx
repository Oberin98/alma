import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from "lucide-react";

import { cn } from "@/lib/styles";

interface SortControlProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sort?: "asc" | "desc" | false;
}

function SortControl({ children, className, sort, ...props }: SortControlProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex min-w-0 cursor-pointer items-center gap-2 rounded-lg bg-transparent p-2 text-muted-foreground outline-none",
        // Hover state
        "hover:text-foreground",
        // Focus state
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        // Disabled state
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span className="inline-block shrink-1 truncate">{children}</span>

      <span className="size-4 min-w-0 flex-0">
        {sort === "asc" && <ArrowUpIcon className="size-4" />}
        {sort === "desc" && <ArrowDownIcon className="size-4" />}
        {!sort && <ArrowUpDownIcon className="size-4" />}
      </span>
    </button>
  );
}

export { SortControl };
