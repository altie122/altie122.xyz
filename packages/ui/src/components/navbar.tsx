import { SidebarTrigger } from "@workspace/ui/components/sidebar";

interface NavbarProps {
  ModeToggle: React.ReactNode;
}

export default function Navbar({ ModeToggle }: NavbarProps) {
  return (
    <header className="flex h-12 flex-row border-b border-sidebar-border bg-sidebar text-sidebar-foreground shadow top-0 z-50 sticky w-full justify-between items-center">
      <div className="flex basis-1/2 flex-row items-center justify-start gap-4 md:basis-1/3 p-2 h-full">
        <SidebarTrigger />
        <a
          href="/"
          className="h-10 w-auto max-md:h-12 text-2xl flex items-center"
        >
          <img
            src="/icon.png"
            alt="Altie122"
            className="h-10 w-auto max-md:h-12 rounded-full pr-2"
          />
          Altie122
        </a>
      </div>
      <div className="flex basis-1/3 flex-row items-center justify-center gap-4 max-md:hidden"></div>
      <div className="flex flex-auto basis-1/2 flex-row items-center justify-end gap-2 p-2 md:basis-1/3">
        {ModeToggle}
      </div>
    </header>
  );
}
