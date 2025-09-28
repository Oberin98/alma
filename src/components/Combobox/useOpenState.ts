import { useCallback, useEffect, useState } from "react";

interface UseOpenStatepOptions {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function useOpenState({
  open,
  defaultOpen,
  onOpenChange,
}: UseOpenStatepOptions) {
  const [openState, setOpenState] = useState(() => open ?? defaultOpen ?? false);

  useEffect(() => {
    // Update local value when controlled value changes
    if (typeof open !== "undefined") {
      setOpenState(open);
    }
  }, [open]);

  const handleSetOpenState = useCallback(
    (nextOpen: boolean) => {
      // If no controlled value is provided, update local value
      if (typeof open === "undefined") {
        setOpenState(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [onOpenChange, open]
  );

  return [openState, handleSetOpenState] as const;
}
