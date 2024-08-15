import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username es requerido",
  }),
  email: z
    .string({
      required_error: "Email es requerido",
    })
    .email({
      message: "El correo electrónico no es válido.",
    }),
  password: z
    .string({
      required_error: "Password es requerido",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres.",
    }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
