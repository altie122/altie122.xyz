import { paginationOptsValidator } from "convex/server";
import { query } from "../_generated/server";
import { v } from "convex/values";

export const getAll = query({
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").collect();
    return projects;
  },
});

export const random = query({
  args: { skipCache: v.optional(v.any()) },
  handler: async (ctx, _args) => {
    const projects = await ctx.db.query("projects").collect();
    return projects[Math.floor(Math.random() * projects.length)];
  },
});

export const list = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projects")
      .order("desc")
      .paginate(args.paginationOpts);
  },
});