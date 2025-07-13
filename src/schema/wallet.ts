import { z } from "zod";

// ------------------------------------------
export const swapSchema = z.object({
    swap_amount: z.coerce.number().positive({ message: "Swap amount must be greater than 0" }),
    price: z.coerce.number().positive({ message: "Swap amount must be greater than 0" }),
    available_bizt: z.coerce.number().nonnegative({ message: "Available BIZT cannot be negative" }),
    recivedUsdt: z.coerce.number().optional(),
});



// ------------------------------------------