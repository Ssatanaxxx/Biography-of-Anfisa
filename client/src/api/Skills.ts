  import { z } from "zod";

  export const SkillsSchema = z.object({
    id: z.number(),
    emodji: z.string(),
    title: z.string(),
    description: z.string(),
    level: z.number().min(0).max(10).default(5)
  });

  export type SkillsItem = z.infer<typeof SkillsSchema>;