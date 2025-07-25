import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { AppSidebar } from "~/components/AppSidebar";
import * as React from "react";
import Navbar from "@workspace/ui/components/NavBar";
import { ModeToggle } from "~/components/ModeToggle";
import { BottomNav } from "@workspace/ui/components/bottom-nav";
import "@workspace/ui/globals.css";
// import Progress from "./progressbar";

const Progress = () => {
  // This is a placeholder for the progress bar, may or may not be implemented later
  return null;
};

interface LayoutProps {
  currentPage: string;
  children: React.ReactNode;
}

export default function Layout({ children, currentPage }: LayoutProps) {
  const [open, setOpen] = React.useState(() => {
    const savedOpenState = sessionStorage.getItem("main-sidebarOpen");
    return savedOpenState ? JSON.parse(savedOpenState) : true;
  });
  React.useEffect(() => {
    sessionStorage.setItem("main-sidebarOpen", JSON.stringify(open));
  }, [open]);
  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <Progress />
      <AppSidebar />
      <main className="flex flex-col w-full min-h-dvh">
        <Navbar ModeToggle={<ModeToggle />} />
        {children}
        <BottomNav  />
      </main>
    </SidebarProvider>
  );
}
