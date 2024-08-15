import { z } from "zod";

export const taskSchema = z.object({
  atributo: z.string({
    required_error: "Title is required",
  }),
});
