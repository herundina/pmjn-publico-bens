import { z } from "zod";

export const pastaSchema = z.object({

    funcionario_id: z.string(),
    email: z.string(),
    senha: z.string(),
    nivelAcesso: z.string(),

}).required();

export type pastaDto = z.infer<typeof pastaSchema>;