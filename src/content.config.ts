import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    lastUpdated: z.date().optional(),
    description: z.string(),
    authors: z.array(reference("authors")),
    image: z.object({
      cover: image(),
      alt: z.string(),
    }),
    relatedPosts: z.array(reference("posts")).optional(),
    relatedLinks: z.array(z.object({
      title: z.string(),
      url: z.string(),
      icon: z.string().default("https://www.altie122.xyz/icon.png"),
      description: z.string().optional(),
    })).optional(),
    tags: z.array(z.string()),
    isDraft: z.boolean().optional().default(false),
    isHidden: z.boolean().optional().default(false),
  }),
});

const links = defineCollection({
  loader: file("src/content/links.json"),
  schema: z.union([
    z.object({
      type: z.literal("link"),
      id: z.string(),
      icon: z.string(),
      title: z.string(),
      url: z.url(),
      description: z.string(),
      activity_level: z.string().optional(),
    }),
    // z.object({
    //   type: z.literal("project"),
    //   id: z.string(),
    //   title: z.string(),
    //   url: z.url(),
    //   description: z.string(),
    // }),
  ]),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    pfp: z.url(),
    website: z.object({
      url: z.url(),
      title: z.string(),
    }).optional(),
  }),
});

export const collections = { posts, links, authors };
