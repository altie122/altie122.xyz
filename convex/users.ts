import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const initUser = mutation({
  args: {
    clerkID: v.string(),
    clerkImage: v.optional(v.string()),
    clerkName: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      clerkId: args.clerkID,
      image:
        args.clerkImage ??
        `https://api.dicebear.com/9.x/rings/svg?seed=${Array.from(
          new Uint8Array(
            await crypto.subtle.digest(
              "SHA-256",
              new TextEncoder().encode(
                args.clerkID + "-" + crypto.randomUUID(),
              ),
            ),
          ),
        )
          .map((b) => b.toString(16).padStart(2, "0"))
          .join(
            "",
          )}&ringFive=full,eighth,half,quarter&ringFour=half,quarter,full,eighth&ringOne=half,quarter,full,eighth&ringThree=half,quarter,full,eighth&ringTwo=half,quarter,full,eighth`,
      name: args.clerkName,
      role: {
        global: "user",
        drigonflow: {
          creator: false,
          role: "user",
        },
      },
    });
  },
});
