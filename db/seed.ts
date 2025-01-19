import { db, links } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(links).values([
    {
      title: "YouTube",
      url: "https://www.youtube.com/@altie122",
      description:
        "Subscribe to my YouTube channel to get updates on my latest videos and tutorials.",
      icon: "https://www.altie122.xyz/icon.png",
    },
    {
      title: "Twitch",
      url: "https://www.twitch.tv/altie122",
      description:
        "Follow me on Twitch to get updates on my latest streams and tutorials.",
      icon: "https://www.altie122.xyz/icon.png",
    },
    {
      title: "GitHub",
      url: "https://github.com/altie122-youtube",
      description:
        "Follow me on GitHub to get updates on my latest projects and tutorials.",
      icon: "https://www.altie122.xyz/icon.png",
    },
  ]);
}
