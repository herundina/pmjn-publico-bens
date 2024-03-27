import { Types } from "mongoose";
import { z } from "zod";

export const bemPublicoSchema = z.object({
    
    tipoBem: z.string(),
    glebas: z.string(),
    endereco: z.object({
        logradouro: z.string(),
        numero: z.string(),
        bairro: z.string(),
        complemento: z.string(),
    }),
    limites: z.object({
        norte:  z.string(),
        sul: z.string(),
        leste: z.string(),
        oeste: z.string(),
    }),
    municipio: z.string(),
    areaComprimento: z.number(),
    areaLargura: z.number(),
    latitude: z.number(),
    longetude: z.number()
}).required()

export type bemPublicoDto  = z.infer<typeof bemPublicoSchema>;