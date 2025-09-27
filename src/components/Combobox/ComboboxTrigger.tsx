'use client'

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { PopoverTrigger } from "@/components/Popover";
import { cn } from "@/lib/styles";

import { useComboboxContext } from "./ComboboxContext";

function ComboboxTrigger({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { openState } = useComboboxContext();

  return (
    <PopoverTrigger
      type="button"
      className={cn(
        "flex h-12 w-full min-w-0 cursor-pointer items-center justify-between rounded-lg border border-input bg-transparent text-sm font-medium transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className
      )}
      {...props}
    >
      {children}

      <div className="ml-auto flex flex-0 items-center justify-center rounded-lg py-1 pr-3 pl-1 opacity-50">
        {openState && <ChevronUpIcon strokeWidth={2.5} className="size-5" />}
        {!openState && <ChevronDownIcon strokeWidth={2.5} className="size-5" />}
      </div>
    </PopoverTrigger>
  );
}

export { ComboboxTrigger };
