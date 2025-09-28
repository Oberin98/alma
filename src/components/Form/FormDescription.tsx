"use client";

import * as React from "react";

import { cn } from "@/lib/styles";

import { useFormField } from "./useFormField";

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export { FormDescription };
