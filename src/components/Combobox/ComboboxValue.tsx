'use client'

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
        "flex flex-1 items-center justify-start self-stretch rounded-md text-xs font-medium py-1 pr-1 pl-3",
        className
      )}
      {...props}
    >
      {activeOption?.label}

      {!activeOption?.label && placeholder && (
        <span className="text-muted-foreground">{placeholder}</span>
      )}
    </div>
  );
}

export { ComboboxValue };
