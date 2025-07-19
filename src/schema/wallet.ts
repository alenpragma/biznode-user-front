import { z } from "zod";

export const swapSchema = z.object({
    amount: z.string({ required_error: "Amount is required" }),

});



