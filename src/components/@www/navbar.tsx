import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface NavbarProps {
  ModeToggle: React.ReactNode;
}

export function Navbar({ ModeToggle }: NavbarProps) {
  return (
    <header className="border-sidebar-border bg-sidebar text-sidebar-foreground fixed top-0 z-10 flex h-12 w-full flex-row items-center justify-between border-b shadow">
      <div className="flex h-full basis-1/2 flex-row items-center justify-start gap-4 p-2 md:basis-1/3">
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger />
          </TooltipTrigger>
          <TooltipContent>
            <p>Sidebar</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/"
              className="flex h-10 w-auto items-center text-2xl"
              aria-label="Home"
            >
              <img
                src="/icon.png"
                alt="Altie122"
                className="h-10 w-auto rounded-full pr-2"
              />
              Altie122
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="flex basis-1/3 flex-row items-center justify-center gap-4 max-md:hidden"></div>
      <div className="flex flex-auto basis-1/2 flex-row items-center justify-end gap-2 p-2 md:basis-1/3">
        {ModeToggle}
      </div>
    </header>
  );
}
