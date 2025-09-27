"use client";

import { CheckIcon } from "lucide-react";
import { Command as CommandPrimitive } from "cmdk";

import { CommandItem } from "@/components/Command";
import { cn } from "@/lib/styles";

import { useComboboxContext } from "./ComboboxContext";
import { useEffect } from "react";

function ComboboxItem({
  children,
  value,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  const { valueState, setOpenState, setValueState, registerOption, removeOption } =
    useComboboxContext();

  const handleSelect = (itemValue: string) => {
    setValueState(itemValue === valueState ? "" : itemValue);
    setOpenState(false);
  };

  useEffect(() => {
    if (value) {
      registerOption({
        value,
        label: children,
      });

      return () => {
        removeOption(value);
      };
    }
  }, [children, value, registerOption, removeOption]);

  return (
    <CommandItem value={value} onSelect={handleSelect} {...props}>
      <span
        className={cn(
          "flex size-4 items-center justify-center",
          value === valueState ? "opacity-100" : "opacity-0"
        )}
      >
        <CheckIcon strokeWidth={2.5} className="size-3" />
      </span>

      {children}
    </CommandItem>
  );
}

export { ComboboxItem };
