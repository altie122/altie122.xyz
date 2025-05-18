import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  ChevronDown,
  PanelLeft,
  Newspaper,
  BookCheck,
  NotebookPen,
  LibraryBig,
  Code,
  Package,
  Swords,
  Server,
  Image,
  ScrollText,
  BookUser,
  BookOpen,
  Eye,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import React from "react";
import { pages } from "~/lib/consts";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const [sidebar_collapsible_1_open, sidebar_collapsible_1_setOpen] =
    useSidebarState(1);
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader />
      <SidebarContent>
        <Collapsible
          className="group/collapsible"
          open={sidebar_collapsible_1_open}
          onOpenChange={sidebar_collapsible_1_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Pages
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {pages.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>
                          <item.icon />
                          {
                            item.isExternal ? (
                              <span className="after:content-['_↗']">{item.name}</span>
                            ) : (
                              <span>{item.name}</span>
                            )
                          }
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={toggleSidebar}>
              <PanelLeft />
              <span className="ml-auto">Toggle Sidebar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

// track sidebar state
function useSidebarState(collapsibleNumber: number) {
  const [isOpen, setIsOpen] = React.useState(() => {
    const savedOpenState = sessionStorage.getItem(
      `main-sidebar-collapsible-${collapsibleNumber}Open`,
    );
    return savedOpenState ? JSON.parse(savedOpenState) : true;
  });

  React.useEffect(() => {
    sessionStorage.setItem(
      `main-sidebar-collapsible-${collapsibleNumber}Open`,
      JSON.stringify(isOpen),
    );
  }, [isOpen, collapsibleNumber]);

  return [isOpen, setIsOpen] as const; // Explicitly return a tuple
}
