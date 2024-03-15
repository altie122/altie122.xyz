import { db, BlogPost, Authors } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db
    .insert(Authors)
    .values([{ id: 1, name: "Altie", image: "/icon.png" }]);
  await db.insert(BlogPost).values([
    {
      id: 1,
      title: "Channel Changes",
      slug: "channel-changes-2024",
      published: new Date("2024-03-11"),
      description: "Just channel changes and plans.",
      authorid: 1,
      image_url: "/assets/images/default-thumbnail.jpg",
      image_alt: "Channel Banner",
      tags: "content",
      body: "# test\\test",
      likes: 0,
      dislikes: 0,
    },
    {
      id: 2,
      title: "Channel Changes",
      slug: "channel-changes-2024-1",
      published: new Date("2024-03-12"),
      description: "Just channel changes and plans.",
      authorid: 1,
      image_url: "/assets/images/default-thumbnail.jpg",
      image_alt: "Channel Banner",
      tags: "content",
      body: "# test\\test",
      likes: 0,
      dislikes: 0,
    },
  ]);
}
