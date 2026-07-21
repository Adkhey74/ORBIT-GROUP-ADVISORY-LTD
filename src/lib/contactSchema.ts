import { z } from "zod";

/**
 * Shared contact-form schema — used by the client form (react-hook-form)
 * and re-validated server-side in the /api/contact route.
 */
export const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your full name.").max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Please include a short message.")
    .max(5000, "Message is too long."),
  /** Honeypot — must remain empty. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
