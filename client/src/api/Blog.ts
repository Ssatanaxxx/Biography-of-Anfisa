import { z } from "zod";

export const BlogSchema = z.object({
  id: z.number(),
  data: z.string(),
  category: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  likes: z.number().default(0),
  comments: z.number().default(0)
});

export type BlogItem = z.infer<typeof BlogSchema>;