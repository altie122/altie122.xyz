import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "@workspace/ui/globals.css";
import { BottomNav } from "@workspace/ui/components/bottom-nav";
import Navbar from "@workspace/ui/components/navbar";
import { SidebarProvider } from "@workspace/ui/components/sidebar";

export const metadata: Metadata = {
  title: "Altie122",
  description: "Altie122.xyz, Just a website.",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
        <SidebarProvider>
          <Navbar ModeToggle={<div/>} />
          <div className='h-[100dvh] w-full'>{children}</div>
          <BottomNav />
        </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
