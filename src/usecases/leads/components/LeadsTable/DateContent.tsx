import { cn } from "@/lib/styles";
import { useMemo } from "react";

type ElementInheritProps = Omit<
  React.HTMLAttributes<HTMLParagraphElement>,
  "children"
>;

interface DateContentProps extends ElementInheritProps {
  date: Date | string | number | null | undefined;
}

function DateContent({ date, className, ...props }: DateContentProps) {
  const renderDate = useMemo(() => {
    // Validate if date is a valid value and valid date
    if (date === null || date === undefined || date === "") {
      return null;
    }

    const dateObject = new Date(date);

    // Check if the date is valid
    if (isNaN(dateObject.getTime())) {
      return null;
    }

    const dateValue = dateObject.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    const timeValue = dateObject.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return `${dateValue}, ${timeValue}`;
  }, [date]);

  return (
    <p
      className={cn(
        "block p-2 text-foreground",
        !renderDate && "text-muted-foreground",
        className
      )}
      {...props}
    >
      {renderDate || "N/A"}
    </p>
  );
}

export { DateContent };
