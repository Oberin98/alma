import { cn } from "@/lib/styles";

function TextContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("block px-4 py-2 text-foreground", className)} {...props}>
      {children}
    </p>
  );
}

export { TextContent };
