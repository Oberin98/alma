import { cn } from "@/lib/styles";

function Layout({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex min-h-screen w-full bg-[linear-gradient(140deg,#d9dea5_0%,#d9dea5_6.3%,white_11.7%,white_100%)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Layout };
