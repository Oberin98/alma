"use client";

import { createContext, useContext } from "react";

export interface ComboboxOption {
  value: string;
  label: React.ReactNode;
}

export interface ComboboxContextValue {
  activeOption: ComboboxOption | null;
  openState: boolean;
  valueState: string;
  registerOption: (option: ComboboxOption) => void;
  removeOption: (value: string) => void;
  setOpenState: (open: boolean) => void;
  setValueState: (value: string) => void;
}

export const ComboboxContext = createContext<ComboboxContextValue | null>(null);

export function useComboboxContext() {
  const context = useContext(ComboboxContext);

  if (!context) {
    throw Error("useComboboxContext must be used within ComboboxContext");
  }

  return context;
}
