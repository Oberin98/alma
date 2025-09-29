import { cn } from "@/lib/styles";

function LayoutContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <main
      className={cn(
        "flex min-h-screen w-full min-w-0 flex-1 flex-col p-7",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}

export { LayoutContent };
