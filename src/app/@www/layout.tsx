import "@/styles/@www.css";

import { AppSidebar } from "@/components/@www/app-sidebar";
import { BottomNav } from "@/components/@www/bottom-nav";
import { Navbar } from "@/components/@www/navbar";

export default function WwwLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar ModeToggle={<div />} />
      <div className="h-[calc(100dvh-(var(--spacing)*12)] pt-12 w-full">
        <AppSidebar />
        {children}
      </div>
      <BottomNav />
    </>
  );
}
