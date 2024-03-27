import { z } from "zod";

export const createFuncionarioSchema = z.object({

    funcionario: z.string(),
    cpf: z.string(),
    matricula: z.string(),
    secretaria: z.string(),
    setor: z.string(),
    email: z.string(),
}).required();

export type funcionarioDto = z.infer<typeof createFuncionarioSchema>;