import { z } from "zod";

export const withdrawSchema = z.object({
    amount: z.string({ required_error: "Amount is required" }),
    wallet: z.string().min(6, { message: "Wallet must be at least 10 characters long" }),
    network: z.enum(["bnb"], { required_error: "Network is required" }),
});
