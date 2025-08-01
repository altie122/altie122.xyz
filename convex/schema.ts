import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  blog: defineTable({
    title: v.string(),
    slug: v.string(),
    author: v.string(),
    content: v.optional(v.string()),
    image: v.optional(v.string()),
    published: v.boolean(),
    createdAt: v.optional(v.number()),
    tags: v.optional(v.array(v.string())),
  }),
  projects: defineTable({
    url: v.string(),
  }),
  links: defineTable({
    title: v.string(),
    url: v.string(),
    description: v.string(),
  }),
})