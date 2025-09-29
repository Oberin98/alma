"use client";

import * as React from "react";

import { cn } from "@/lib/styles";

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

export { TableHeader };
