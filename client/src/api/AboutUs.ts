import z from "zod";
export { z } from "zod";

export const AboutUsSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
});

export type AboutUsItem = z.infer<typeof AboutUsSchema>;

export const AboutUsSchemaTwo = z.object({
  id: z.number(),
  descrip: z.string(),
  title: z.string(),
});

export type AboutUsItemTwo = z.infer<typeof AboutUsSchemaTwo>;
