import Link, { type LinkProps } from "next/link";

import { cn } from "@/lib/styles";

interface NavigationItemProps extends LinkProps {
  children?: React.ReactNode;
  active?: boolean;
  className?: string;
}

function NavigationItem({
  children,
  active,
  className,
  ...props
}: NavigationItemProps) {
  return (
    <Link
      className={cn(
        "flex w-full min-w-0 rounded-lg px-3 py-1 text-base text-foreground outline-none border-none",
        // Focus state
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        // Active state
        active && "font-bold",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export { NavigationItem };
