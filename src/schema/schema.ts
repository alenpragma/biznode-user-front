import { z } from "zod"

export const depositSchema = z.object({
  method_id: z.string({ message: "Payment method is required" }),
  transaction_id: z.string().min(5, {
    message: "Transaction ID must be at least 5 characters",
  }),
  amount: z
    .string()
    .min(1, { message: "Amount is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 100, {
      message: "Amount must be at least 100৳",
    }),
  number: z.string().min(11, {
    message: "Enter a valid number (at least 11 digits)",
  }),
})

export const withDrawSchema = z.object({
  method: z.string({ message: "Payment method is required" }),
  amount: z
    .string()
    .min(1, { message: "Amount is required" })
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 100, {
      message: "Amount must be at least 100৳",
    }),
  number: z
    .string()
    .min(1, { message: "Number is required" })
    .refine((val) => /^\d{11}$/.test(val), {
      message: "Number must be exactly 11 digits",
    }),
  // account_type: z.enum(['personal', 'agent'], {
  //   required_error: "Select account type",
  // }),
})
