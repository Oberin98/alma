import { useCallback, useEffect, useState } from "react";

interface UseValueStatepOptions {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function useValueState({
  value,
  defaultValue,
  onValueChange,
}: UseValueStatepOptions) {
  const [valueState, setValueState] = useState(() => value ?? defaultValue ?? "");

  useEffect(() => {
    // Update local state when controlled value changes
    if (typeof value !== "undefined") {
      setValueState(value);
    }
  }, [value]);

  const handleSetValueState = useCallback(
    (nextValue: string) => {
      // If no controlled value is provided, update the local state
      if (typeof value === "undefined") {
        setValueState(nextValue);
      }

      onValueChange?.(nextValue);
    },
    [onValueChange, value]
  );

  return [valueState, handleSetValueState] as const;
}
