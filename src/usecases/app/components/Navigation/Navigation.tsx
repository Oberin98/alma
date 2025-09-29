import { cn } from "@/lib/styles";

function Navigation({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex w-full shrink grow flex-col gap-3", className)}
      {...props}
    >
      {children}
    </nav>
  );
}

export { Navigation };
