import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "~/components/AppSidebar";
import * as React from "react";
import Navbar from "@/components/NavBar";
// import Progress from "./progressbar";

const Progress = () => {
  // This is a placeholder for the progress bar, may or may not be implemented later
  return null;
};

export default function Layout({ children }: { children: React.ReactNode }) {
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
      <main className="flex flex-col w-full h-full">
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
