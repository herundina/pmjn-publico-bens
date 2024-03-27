import { Connection } from "mongoose";
import { CertidaoSchema } from "../entity/ECertidao.entity";
import { ICertidao } from "../interface/DCertidao";


export const CertidaoProviders = [
    {
        provide: 'CERTIDAO_MODEL',
        useFactory: (connection: Connection) => connection.model<ICertidao>('certidao', CertidaoSchema),
        inject: ['DATABASE_CONNECTION']
    }
]