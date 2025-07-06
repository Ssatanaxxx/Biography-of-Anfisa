import { z } from "zod";

export const BlogSchema = z.object({
  id: z.number(),
  data: z.string(),
  title: z.string(),
});

export const BlogTagSchema = z.object({
  id: z.number(),
  tag1: z.string(),
  tag2: z.string(),
  tag3: z.string(),
  tag4: z.string(),
});

export const BlogTitleSchema = z.object({
  id: z.number(),
  blockTitle: z.string(),
  blockText: z.string(),
  tags: z.array(BlogTagSchema),
});
