import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.email({ message: "Invalid email address" }),
});

export const selectUserSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.email(),
});

export type CreateUser = z.infer<typeof createUserSchema>;
export type User = z.infer<typeof selectUserSchema>;
