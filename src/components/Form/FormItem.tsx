"use client";

import { useId } from "react";

import { cn } from "@/lib/styles";

import { FormItemContext } from "./FormItemContext";

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

export { FormItem };
