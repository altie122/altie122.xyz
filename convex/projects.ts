import { query } from "./_generated/server";
import { v } from "convex/values";

export const getAll = query({
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").collect();
    return projects;
  },
});

export const random = query({
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").collect();
    return projects[Math.floor(Math.random() * projects.length)];
  }
})