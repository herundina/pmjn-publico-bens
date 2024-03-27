import { Controller, Module } from "@nestjs/common";
import { dataBaseModule } from "./dataBaseModule";
import { UsuarioController } from "../controllers/usuario/usuario.controller";
import { SUsuario } from "../service/SUsuario";
import { UsuarioPrivedrs } from "../providers/usuario.provider";
import { RUsuario } from "../repository/RUsuario";

@Module({
    imports:[dataBaseModule],
    controllers:[UsuarioController],
    providers:[SUsuario,RUsuario, ...UsuarioPrivedrs],
})

export class UsuarioModule {}