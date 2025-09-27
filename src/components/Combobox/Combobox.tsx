"use client";

import { useCallback, useMemo, useRef } from "react";

import { Popover } from "@/components/Popover";

import {
  ComboboxContext,
  type ComboboxContextValue,
  type ComboboxOption,
} from "./ComboboxContext";
import { useOpenState } from "./useOpenState";
import { useValueState } from "./useValueState";

interface ComboboxProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

function Combobox({
  children,
  open,
  defaultOpen,
  value,
  defaultValue,
  onOpenChange,
  onValueChange,
}: React.PropsWithChildren<ComboboxProps>) {
  const optionsMapRef = useRef(new Map<string, React.ReactNode>());

  const registerOption = useCallback(({ value, label }: ComboboxOption) => {
    optionsMapRef.current.set(value, label);
  }, []);

  const removeOption = useCallback((value: string) => {
    optionsMapRef.current.delete(value);
  }, []);

  const [openState, setOpenState] = useOpenState({
    open,
    defaultOpen,
    onOpenChange,
  });

  const [valueState, setValueState] = useValueState({
    value,
    defaultValue,
    onValueChange,
  });

  const activeOption = useMemo<ComboboxOption | null>(() => {
    if (!valueState || !optionsMapRef.current.has(valueState)) {
      return null;
    }

    return {
      value: valueState,
      label: optionsMapRef.current.get(valueState),
    };
  }, [valueState]);

  const context = useMemo<ComboboxContextValue>(() => {
    return {
      activeOption,
      valueState,
      openState,
      setValueState,
      setOpenState,
      registerOption,
      removeOption,
    };
  }, [
    activeOption,
    valueState,
    openState,
    setValueState,
    setOpenState,
    registerOption,
    removeOption,
  ]);

  return (
    <ComboboxContext.Provider value={context}>
      <Popover open={openState} onOpenChange={setOpenState}>
        {children}
      </Popover>
    </ComboboxContext.Provider>
  );
}

export { Combobox };
