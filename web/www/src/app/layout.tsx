import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "@workspace/ui/globals.css";
import { BottomNav } from "@workspace/ui/components/bottom-nav";

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
      <html lang='en' className={`${geist.variable}`}>
        <body>
          <div className='h-[100dvh] w-full'>{children}</div>
					<BottomNav currentPage={"/"} />
        </body>
      </html>
    </ClerkProvider>
  );
}
