"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "./convex-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
        <SidebarProvider>
          <div className="h-full w-full">{children}</div>
        </SidebarProvider>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
