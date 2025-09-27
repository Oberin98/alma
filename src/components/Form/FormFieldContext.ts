"use client";

import { createContext, useContext } from "react";
import { type FieldPath, type FieldValues } from "react-hook-form";

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export function useFormFieldContext() {
  const context = useContext(FormFieldContext);

  if (!context) {
    throw Error("useFormFieldContext must be used within FormField");
  }

  return context;
}
