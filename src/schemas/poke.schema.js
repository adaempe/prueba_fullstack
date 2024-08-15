import { z } from "zod";

export const createPokeSchema = z.object({
  atributo: z.string({
    required_error: "Atributo is required",
  }),
 
  date: z.string().datetime().optional(),
});