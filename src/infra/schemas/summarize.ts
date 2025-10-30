import { z } from "zod";

export const summarizeSchema = z.object({
  text: z.string().min(100, 'Texto muito curto'),
});

export type SummarizeRequestBody = z.infer<typeof summarizeSchema>;
