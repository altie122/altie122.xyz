import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { www } from "./www/schema";

export default defineSchema({
  ...www,
  users: defineTable({
    clerkId: v.string(),
    name: v.string(),
    image: v.string(),
    role: v.optional(
      v.object({
        global: v.optional(v.string()),
        drigonflow: v.optional(
          v.object({
            creator: v.boolean(),
            role: v.string(),
          }),
        ),
      }),
    ),
  }),
});
