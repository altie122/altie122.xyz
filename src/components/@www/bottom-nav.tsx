"use client";
import { Package, Home, Link as LinkIcon, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/links", label: "Links", icon: LinkIcon },
  { href: "/projects", label: "Projects", icon: Package },
];

export function BottomNav() {
  const pathname = usePathname();

  const getCurrentPage = (path: string) => {
    if (path === "/") return "Home";
    if (path.startsWith("/blog")) return "Blog";
    if (path.startsWith("/links")) return "Links";
    if (path.startsWith("/projects")) return "Projects";
    return "";
  };

  const currentPage = getCurrentPage(pathname);
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 flex h-12 w-full items-center justify-center">
      <div className="border-sidebar-border bg-sidebar text-sidebar-foreground flex h-full w-full flex-row items-center justify-center gap-4 border-x border-t md:w-fit md:gap-6 md:rounded-t md:px-2">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = currentPage === label;

          return (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className={cn("rounded", isActive && "-mt-6")}
                >
                  <Link href={href} aria-label={label}>
                    <Icon
                      className={cn(
                        "text-sidebar-foreground h-6 w-6",
                        isActive && "text-accent",
                      )}
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
