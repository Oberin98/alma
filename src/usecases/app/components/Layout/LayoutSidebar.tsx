"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback } from "@/components/Avatar";
import { AlmaIcon } from "@/icons";
import { cn } from "@/lib/styles";

import { Navigation, NavigationItem } from "../Navigation";

function LayoutSidebar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-screen sticky top-0 z-10 w-64 flex-col border-r border-sidebar-border px-4 py-8 shrink-0 min-w-0",
        className
      )}
      {...props}
    >
      <div className="mb-20 w-full shrink-0 grow-0 px-1">
        <Link
          href="/"
          className="inline-flex w-28 rounded-lg px-2 py-1 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <AlmaIcon />
        </Link>
      </div>

      <Navigation
        aria-label="Main navigation"
        role="navigation"
        className="w-full flex-1"
      >
        <NavigationItem href="/leads" active={pathname.endsWith("/leads")}>
          Leads
        </NavigationItem>

        <NavigationItem href="/settings" active={pathname.endsWith("/settings")}>
          Settings
        </NavigationItem>
      </Navigation>

      <div className="flex items-center gap-3 px-3">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>

        <span className="font-bold">Admin</span>
      </div>
    </aside>
  );
}

export { LayoutSidebar };
