"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// Compatible interface with previous usage, mapping 'to' to 'href'
interface NavLinkCompatProps extends Omit<LinkProps, "className" | "href"> {
  to: LinkProps["href"];
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string);
  activeClassName?: string;
  pendingClassName?: string;
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    const pathname = usePathname();
    // Simple active check. For exact matches use exact prop if needed, not implemented here to match broad RouterNavLink behavior roughly.
    // RouterNavLink matches partially by default if 'end' is not true.
    // Assuming exact match for now as safe default for non-nested routes.
    const isActive = pathname === to || pathname?.startsWith(String(to) + "/");
    const isPending = false; // Next.js doesn't expose pending state here easily without useTransition

    let finalClassName: string | undefined;
    if (typeof className === "function") {
      finalClassName = className({ isActive, isPending });
    } else {
      finalClassName = cn(className, isActive && activeClassName, isPending && pendingClassName);
    }

    return (
      <Link ref={ref} href={to} className={finalClassName} {...props} />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
