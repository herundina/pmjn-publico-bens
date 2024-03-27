import { z } from "zod";

export const certidaoSchema = z.object({

    bemPublico_id: z.string(),
    matricula: z.string(),
    cartorio: z.string(),
    livro: z.string(),
    ficha: z.string(),
}).required()

export type certidaoDto = z.infer<typeof certidaoSchema>;