import { query } from "./_generated/server";
import { v } from "convex/values";

export const getAll = query({
  handler: async (ctx) => {
    const links = await ctx.db.query("links").collect();
    return links;
  },
});

export const random = query({
  handler: async (ctx) => {
    const links = await ctx.db.query("links").collect();
    return links[Math.floor(Math.random() * links.length)];
  }
})