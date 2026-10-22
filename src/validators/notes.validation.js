import z from "zod";

export const noteSchema = z.object({
  title: z.string().trim().min(1).max(200),
  content: z.string().max(50000).optional(),
  tags: z.array(z.string().trim().min(1).max(30)).max(50).optional(),
});

export const noteUpdateSchema = z
  .object({
    title: z.string().trim().min(1).max(200).optional(),
    content: z.string().max(50000).optional(),
    tags: z.array(z.string().trim().min(1).max(30)).max(50).optional(),
  })
  .refine((payload) => Object.keys(payload).length > 0, {
    message: "At least one field must be provided",
  });
