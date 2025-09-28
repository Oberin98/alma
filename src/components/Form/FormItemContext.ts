import { createContext, useContext } from "react";

interface FormItemContextValue {
  id: string;
}

export const FormItemContext = createContext<FormItemContextValue | null>(null);

export function useFormItemContext() {
  const context = useContext(FormItemContext);

  if (!context) {
    throw Error("useFormItemContext must be used within FormItem");
  }

  return context;
}
