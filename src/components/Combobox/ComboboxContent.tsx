"use client";

import { Command as CommandPrimitive } from "cmdk";

import { PopoverContent } from "@/components/Popover";
import { Command } from "@/components/Command";
import { cn } from "@/lib/styles";

function ComboboxContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <PopoverContent className={cn("p-0 w-[var(--radix-popover-trigger-width)]", className)}>
      <Command {...props}>{children}</Command>
    </PopoverContent>
  );
}

export { ComboboxContent };
