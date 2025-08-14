import "@/styles/@yt-to-ytnocookie.css";

import { type Metadata } from "next";
import { OddBanner } from "@/components/@yt-to-ytnocookie/client/odd";
import { Header } from "@/components/@yt-to-ytnocookie/navbar";
import { Footer } from "@/components/@yt-to-ytnocookie/footer";

export const metadata: Metadata = {
  title: "YT to YT No Cookie",
  description:
    "Simple little website that takes a YouTube URL (Share and Embed URL's and Video ID's are also supported) and turns it into a YouTube nocookie URL",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`hyphens-auto`}>
      <Header />
      <OddBanner />
      <div className="min-h-dvh p-5 text-center">{children}</div>
      <Footer />
    </main>
  );
}
