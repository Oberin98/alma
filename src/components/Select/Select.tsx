"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

/* TODO:
 * - extends select to support sm, md and lg sizes
 */
function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

export { Select };
