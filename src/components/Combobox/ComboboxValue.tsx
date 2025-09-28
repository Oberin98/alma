"use client";

import { cn } from "@/lib/styles";

import { useComboboxContext } from "./ComboboxContext";

interface ComboboxValueProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

function ComboboxValue({ className, placeholder, ...props }: ComboboxValueProps) {
  const { activeOption } = useComboboxContext();

  return (
    <div
      className={cn(
        "flex min-w-0 flex-1 items-center justify-start self-stretch rounded-lg py-1 pr-1 pl-3 text-sm font-medium",
        className
      )}
      {...props}
    >
      {activeOption?.label && (
        <span className="inline-block min-w-0 truncate">{activeOption?.label}</span>
      )}

      {!activeOption?.label && placeholder && (
        <span className="inline-block min-w-0 truncate text-muted-foreground">
          {placeholder}
        </span>
      )}
    </div>
  );
}

export { ComboboxValue };
