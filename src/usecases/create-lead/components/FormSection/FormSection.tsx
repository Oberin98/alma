import { cn } from "@/lib/styles";

function FormSection({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main className={cn("w-screen py-12", className)} {...props}>
      <div className="mx-auto w-full max-w-xl">{children}</div>
    </main>
  );
}

export { FormSection };
