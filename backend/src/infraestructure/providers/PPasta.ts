import { Connection } from "mongoose";
import { IPasta } from "../interface/DPasta";
import { pastaArquivoSchema } from "../entity/pastaArquivo.entity";


export const pastaProviders = [{
    provide: "PASTA_MODEL",
    useFactory: (connection : Connection) => connection.model<IPasta>('pasta', pastaArquivoSchema),
    inject: ["DATABASE_CONNECTION"]
}]