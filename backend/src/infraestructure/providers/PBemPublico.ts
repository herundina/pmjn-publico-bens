import { Connection } from "mongoose";
import { BemPublicoSchema } from "../entity/bemPublico.entity";
import { IBemPublico } from "../interface/DBemPublico";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "../exception/HttpExceptionFilter";

export const BemPublicoProviders = [
    {
    provide: 'BEMPUBLICO_MODEL',
    useFactory: (connection : Connection) => connection.model<IBemPublico>('bempublico', BemPublicoSchema),
    inject: ['DATABASE_CONNECTION']}
]