import { NOW, column, defineDb, defineTable } from "astro:db";

const SoundBoard = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    created: column.date({ default: NOW }),
    audioFile: column.text({unique: true}),
    thumbnailFile: column.text({default: "https://utfs.io/f/138fbbea-c4fc-4425-9dd3-4bb48a459a2b-1jgvrq.png"}),
    length: column.number(), //Length in seconds
    cooldown: column.number(), //Cooldown in seconds
    inCooldownUntil: column.date({ optional: true }),
  },
  indexes: [
    { on: ["id", "created"], unique: true },
  ]
});

// https://astro.build/db/config
export default defineDb({
  tables: { SoundBoard },
});
