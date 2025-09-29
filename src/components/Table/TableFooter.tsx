"use client";

import * as React from "react";

import { cn } from "@/lib/styles";

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  );
}

export { TableFooter };
