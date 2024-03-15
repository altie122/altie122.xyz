import { column, defineDb, defineTable } from "astro:db";

const BlogPost = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    slug: column.text(),
    title: column.text(),
    published: column.date(),
    description: column.text(),
    authorid: column.number({ references: () => Authors.columns.id }),
    image_url: column.text(),
    image_alt: column.text(),
    body: column.text(),
    likes: column.number(),
    dislikes: column.number(),
  },
});

const Authors = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    image: column.text(),
  },
});

const API_Keys = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    key: column.text(),
  },
});

const Youtube = defineTable({
  columns: {
    unix_timestamp: column.number(),
    subscribers: column.number(),
    videos: column.number(),
    views: column.number(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { BlogPost, Authors, API_Keys, Youtube },
});
