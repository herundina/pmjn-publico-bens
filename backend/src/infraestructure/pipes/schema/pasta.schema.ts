import { Types } from "mongoose";
import { ZodBigIntDef, z } from "zod";

export const pastaSchema = z.object({    
    pasta: z.string(),
}).required();

export type pastaDto = z.infer<typeof pastaSchema>;