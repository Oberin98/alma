import { memo, useCallback, useEffect, useState } from "react";
import {
  type DropzoneOptions,
  type FileRejection,
  type FileWithPath,
  useDropzone,
} from "react-dropzone";

import { cn } from "@/lib/styles";

type DropzoneInheritOptions = Pick<
  DropzoneOptions,
  | "accept"
  | "maxFiles"
  | "maxSize"
  | "minSize"
  | "multiple"
  | "disabled"
  | "validator"
>;

type ElementInheritProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "defaultValue"
>;

interface FileInputProps extends ElementInheritProps, DropzoneInheritOptions {
  value?: FileWithPath[];
  defaultValue?: FileWithPath[];
  onValueChange?: (FileWithPaths: FileWithPath[]) => void;
  onValueReject?: (rejections: FileRejection[]) => void;
  placeholder?: string;
  className?: string;
}

function FileInput({
  value,
  defaultValue,
  onValueChange,
  onValueReject,
  placeholder,
  className,
  disabled,
  accept,
  maxFiles,
  maxSize,
  minSize,
  multiple,
  validator,
  ...props
}: FileInputProps) {
  const [valueState, setValueState] = useState<FileWithPath[]>(() => {
    return value ?? defaultValue ?? [];
  });

  useEffect(() => {
    // Update local value when controlled value changes
    if (typeof value !== "undefined") {
      setValueState(value);
    }
  }, [value]);

  const handleValueChange = useCallback(
    (files: FileWithPath[]) => {
      // If no controlled value is provided, update local value
      if (typeof value === "undefined") {
        setValueState(files);
      }

      onValueChange?.(files);
    },
    [onValueChange, value]
  );

  const { getRootProps, getInputProps } = useDropzone({
    disabled,
    accept,
    maxFiles,
    maxSize,
    minSize,
    multiple,
    validator,
    onFileDialogCancel: () => {
      handleValueChange([]);
    },
    onDropAccepted: (files) => {
      handleValueChange(files);
    },
    onDropRejected: (rejections) => {
      onValueReject?.(rejections);
    },
  });

  return (
    <div
      aria-disabled={disabled}
      {...getRootProps({
        className: cn(
          "flex items-center h-12 w-full min-w-0 rounded-lg border border-input bg-transparent px-4 py-3 text-sm font-medium transition-[color,box-shadow] cursor-pointer outline-none",
          // Selection state
          "selection:bg-primary selection:text-primary-foreground",
          // Disabled state
          "aria-disabled:pointer-events-none aria-disabled:opacity-50",
          // Focus state
          "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          // Error state
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
          className
        ),
        ...props,
      })}
    >
      <input {...getInputProps()} />

      {valueState.length > 0 && (
        <span className="inline-block min-w-0 truncate">
          {valueState.map((file) => file.name).join(", ")}
        </span>
      )}

      {valueState.length === 0 && (
        <span className="inline-block min-w-0 truncate text-ellipsis text-muted-foreground">
          {placeholder}
        </span>
      )}
    </div>
  );
}

export default memo(FileInput);
