import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "@/components/providers";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "altie122.xyz",
  description: "altie122.xyz, Just a website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

function getSubdomain(host: string | null): string {
  if (!host) return "www";

  const parts = host.split(".");

  // Need at least 3 parts for a subdomain (sub.domain.tld)
  if (parts.length < 3) return "www";

  // Return the second-to-last part before the main domain
  return parts[parts.length - 3]!;
}

export default async function RootLayout({
  www,
  yttoytnocookie,
  children,
}: Readonly<{
  www: React.ReactNode;
  yttoytnocookie: React.ReactNode;
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const subdomain = getSubdomain(headersList.get("Host"));
  console.log(subdomain);
  return (
    <html lang="en" className={`${geist.variable} dark`}>
      <body>
        <Providers>
          <div className="h-full w-full">
            {subdomain === "www" || subdomain === "dev"
              ? www
              : subdomain === "yt-to-ytnocookie"
                ? yttoytnocookie
                : children}
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
