  import { z } from "zod";

  export const SkillsSchema = z.object({
    id: z.number(),
    emodji: z.string(),
    title: z.string(),
    description: z.string(),
  });

  export type SkillsItem = z.infer<typeof SkillsSchema>;