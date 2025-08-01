import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { BottomNav } from "@/components/bottom-nav";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "altie122.xyz",
  description: "altie122.xyz, Just a website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} dark`}>
      <body>
        <Providers>
          <Navbar ModeToggle={<div />} />
          <div className="w-full h-[calc(100dvh-(var(--spacing)*12)-(var(--spacing)*12))]">{children}</div>
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
