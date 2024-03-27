import { Module } from "@nestjs/common";
import { funcionarioProviders } from "../providers/funcionario.Provider";
import { FuncionarioController } from "../controllers/funcionario/funcionario.controller";
import { RFuncionario } from "../repository/RFuncionario";
import { SFuncionario } from "../service/funcionario.service";
import { dataBaseModule } from "./dataBaseModule";
import { HttpExceptionFilter } from "../exception/HttpExceptionFilter";

@Module({
    imports:[dataBaseModule],
    controllers:[FuncionarioController],
    providers:[
        RFuncionario,
        SFuncionario,
        ...funcionarioProviders,
        {
            provide: 'APP_FILTER',
            useClass: HttpExceptionFilter
        }
    ],
    exports:[]
})

export class FuncionarioModule {}