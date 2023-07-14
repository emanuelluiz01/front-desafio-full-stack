import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(2),
  email: z.string().email("Deve ser um email válido!"),
  password: z.string().nonempty("Senha obrigatória!"),
  phone: z.string().min(8),
});

export type RegisterData = z.infer<typeof RegisterSchema>;
