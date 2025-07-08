import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Input valid email" }),
  password: z.string().min(6, { message: "Input valid password" }),
});
