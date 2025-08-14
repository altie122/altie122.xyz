import { paginationOptsValidator } from "convex/server";
import { query } from "../_generated/server";
import { v } from "convex/values";

export const getAll = query({
  handler: async (ctx) => {
    const links = await ctx.db.query("links").collect();
    return links;
  },
});

export const random = query({
  args: { skipCache: v.optional(v.any()) },
  handler: async (ctx, _args) => {
    const links = await ctx.db.query("links").collect();
    return links[Math.floor(Math.random() * links.length)];
  },
});

export const list = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("links")
      .order("desc")
      .paginate(args.paginationOpts);
  },
});