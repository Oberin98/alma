import { useFormContext, useFormState } from "react-hook-form";

import { useFormFieldContext } from "./FormFieldContext";
import { useFormItemContext } from "./FormItemContext";

export function useFormField() {
  const fieldContext = useFormFieldContext();
  const itemContext = useFormItemContext();

  const formState = useFormState({ name: fieldContext.name });

  const { getFieldState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
}
