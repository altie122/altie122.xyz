import { defineDb, defineTable, column } from "astro:db";

const links = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    url: column.text(),
    description: column.text(),
    icon: column.text({ default: "https://www.altie122.xyz/icon.png" }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    links,
  },
});
