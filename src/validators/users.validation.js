import z from "zod";

const interests = z.array(z.string().trim().min(1).max(50)).max(50).optional();
const role = z.enum(["user", "admin"]);

export const adminCreateUserSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  password: z.string().min(8).max(128),
  role: role.optional(),
  interests,
  isActive: z.boolean().optional(),
});

export const adminUpdateUserSchema = z
  .object({
    name: z.string().trim().min(2).max(100).optional(),
    email: z.string().trim().email().optional(),
    password: z.string().min(8).max(128).optional(),
    role: role.optional(),
    interests,
    isActive: z.boolean().optional(),
  })
  .refine((payload) => Object.keys(payload).length > 0, {
    message: "At least one field must be provided",
  });
