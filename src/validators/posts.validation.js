import z from "zod";

export const postSchema = z.object({
  title: z.string().trim().min(1).max(200),
  content: z.string().min(1).max(50000),
});
