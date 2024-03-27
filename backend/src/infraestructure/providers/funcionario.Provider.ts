import { Connection } from "mongoose";
import { IFuncionario } from "../interface/DFuncionario";
import { funcionarioSchema } from "../entity/funcionario.entity";

export const funcionarioProviders = [{
    provide: 'FUNCIONARIO_MODEL',
    useFactory: (connect: Connection) => connect.model<IFuncionario>('funcionario', funcionarioSchema),
    inject: ['DATABASE_CONNECTION'],
}]