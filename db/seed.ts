import { db, SoundBoard, streamKeys } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(SoundBoard).values([
    {
      id: 1,
      title: "bruh",
      description: "bruh",
      created: new Date(),
      length: 1,
      thumbnailFile: "https://utfs.io/f/138fbbea-c4fc-4425-9dd3-4bb48a459a2b-1jgvrq.png",
      audioFile: "https://utfs.io/f/ed052ae4-e8bd-481d-994e-8c038386afc5-mrkfky.mp3",
      cooldown: 10,
    },
  ]);
  await db.insert(streamKeys).values([
    {
      id: 1,
      key: "TESTING",
      created: new Date(),
    },
  ]);
}